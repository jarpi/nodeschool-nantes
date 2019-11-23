const fs = require('fs')

module.exports = (dir, ext, cb) => {
  fs.readdir(dir, (err, files) => {
    if (err) return cb(err)
    const filteredFiles = files.filter(e => {
      const fileNameParts = e.split('.')
      if (fileNameParts[1]) {
        return fileNameParts[1].indexOf(ext) > -1
      }
      return false
    })
    return cb(null, filteredFiles)
  })
}
