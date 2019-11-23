const mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], (err, filteredFiles) => {
  if (err) return console.dir(err)
  filteredFiles.forEach(f => console.log(f))
})

