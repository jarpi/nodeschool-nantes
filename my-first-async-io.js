const fs = require('fs')
fs.readFile(process.argv[2], (err, file) => {
  if (err) console.dir(err)
  console.log(file.toString().split('\n').length - 1)
})
