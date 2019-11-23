const map = require('through2-map')
const http = require('http')
const server = http.createServer(function (req, res) {
	let body = ''
	if (req.method !== 'POST') {
		res.end(400, 'send POST')
	}
	req.pipe(map(function(str) {
		return str.toString().toUpperCase()
	})).pipe(res)
})

server.listen(process.argv[2])
