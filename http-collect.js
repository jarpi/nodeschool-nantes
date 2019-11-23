const http = require('http')
let httpData = ''

http.get(process.argv[2], (response) => {
  response.on('data', data => httpData += data)
  response.on('end', _ => {
    console.log(httpData.length)
    console.log(httpData)
  })
})


