const http = require('http')
let httpData = ''

const getUrl = url => {
  return new Promise((resolve, reject) => {
    let httpData = ''
    http.get(url, (response) => {
      response.on('data', data => httpData += data)
      response.on('end', _ => {
        resolve(httpData)
      })
    })
  })
}

const responses = []
responses.push(getUrl(process.argv[2]))
responses.push(getUrl(process.argv[3]))
responses.push(getUrl(process.argv[4]))

Promise.all(responses)
  .then(res => {
    res.forEach(r => console.log(r))
  })
