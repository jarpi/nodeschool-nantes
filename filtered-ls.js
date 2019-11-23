const fs = require('fs')

fs.readdir(process.argv[2], (err, files) => {
  if (err) console.dir(err)
  const filteredFiles = files.filter(e => {
    const fileNameParts = e.split('.')
    if (fileNameParts[1]) {
      return fileNameParts[1].indexOf(process.argv[3]) > -1
    }
    return false
  })
  filteredFiles.forEach(f => console.log(f))
})
