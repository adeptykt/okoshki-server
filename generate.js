const { Generator } = require('@paljs/generator')

new Generator(
    {
        name: 'sdl',
        schemaPath: './prisma/schema.prisma'
    },
    {
        javaScript: true,
        excludeFields: ['_count'],
        excludeQueriesAndMutations: [
            'aggregate'
        ],
    }
).run()
