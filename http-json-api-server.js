const map = require('through2-map')
const http = require('http')
const server = http.createServer(function (req, res) {
  const urlParams = new URL(req.url, `http://localhost:${process.argv[2]}`)
  console.dir(urlParams)
  console.dir(urlParams.pathname)
  console.dir(urlParams.searchParams.get('iso'))
  if (urlParams.pathname === '/api/parsetime') {
    const isoDate = urlParams.searchParams.get('iso')
    const ds = new Date(isoDate)
    res.end(JSON.stringify({
      'hour': ds.getHours(),
      'minute': ds.getMinutes(),
      'second': ds.getSeconds()
    }))
  }
  else if (urlParams.pathname === '/api/unixtime') {
    const isoDate = urlParams.searchParams.get('iso')
    const ds = new Date(isoDate)
    res.end(JSON.stringify({'unixtime': ds.getTime()}))
  }
  else {
    res.send(404, JSON.stringify({'error':'NO ENDPOINT'}))
  }
	/* req.pipe(map(function(str) {
		return str.toString().toUpperCase()
	})).pipe(res) */
})

server.listen(process.argv[2])


