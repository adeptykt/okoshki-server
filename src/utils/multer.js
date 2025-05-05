const multer = require('multer')
const fs = require('fs')
const { nanoid } = require('nanoid')

const destination = `${__dirname}/../../../uploads`

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destination)
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.split('.').pop()
    const fileName = nanoid()
    cb(null, `${fileName}.${fileExtension}`)
  },
})

const upload = multer({ storage })

const deleteFile = (path) => fs.unlink(path, () => {})

module.exports = { upload, deleteFile }
