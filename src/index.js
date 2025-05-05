const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('@apollo/server-plugin-landing-page-graphql-playground')
const cors = require('cors')
const express = require('express')
const http = require('http')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { applyMiddleware } = require('graphql-middleware')
const { PrismaSelect } = require('@paljs/plugins')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const { Expo } = require('expo-server-sdk')

const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers')
const { upload } = require('./utils/multer')

dotenv.config()

const prisma = new PrismaClient()
const app = express()
const httpServer = http.createServer(app)
const expo = new Expo({ accessToken: 'l5danA4BgwnwZo1W-ssrxB00PnMMjHuZl9yaKzzk' })

const select = async (resolve, root, args, context, info) => {
    const result = new PrismaSelect(info).value
    if (Object.keys(result.select).length > 0) {
        args = {
            ...args,
            ...result
        }
    }
    return resolve(root, args, context, info)
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: applyMiddleware(schema, select)
})

const corsOptions = {
    origin: "http://localhost:3000"
}

const startServer = async () => {
    await server.start()

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(cors({origin: true, credentials: true}))

    app.use('/uploads', express.static(__dirname + '/../../uploads'))
    app.post('/upload', upload.single('file'), async (req, res) => {
        try {
            const { file } = req

            return res.json({ filename: file.filename, message: 'success' })
        } catch (err) {
            console.error(err)
            return res.sendStatus(500)
        }
    })

    app.post('/push', async (req, res) => {
        const { to, title, body } = req.body
        await expo.sendPushNotificationsAsync([
            {
                to,
                sound: 'default',
                title,
                body,
                priority: 'high'
            }
        ])
        res.sendStatus(200)
    })


    app.use(
        '/graphql',
        expressMiddleware(server, {
            context: async (ctx) => {
                const { authorization } = ctx.req.headers
                const token = authorization ? authorization.replace('Bearer ', '') : ''
                const verify = await jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
                    if (err) {
                        return null
                    }
                    return decoded
                })
                return {
                    prisma,
                    verify
                }
            }
        })
    )

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
    const admins = await prisma.admin.count()
    if (admins === 0) {
        const password = await bcrypt.hash('123123', 10)
        await prisma.admin.create({
            data: {
                login: 'admin',
                password
            }
        })
    }
    console.log('Server ready at http://localhost:4000/graphql')
}

startServer()