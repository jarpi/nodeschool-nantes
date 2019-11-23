const http = require('http')
const fs = require('fs')

const file = fs.createReadStream(process.argv[3])
const server = http.createServer(function (req, res) {
	file.pipe(res)
})
server.listen(process.argv[2])
