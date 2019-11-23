const net = require('net')
 const server = net.createServer(function (socket) {
	// socket handling logic
	const d = new Date()
	socket.end(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}\r\n`)
 })
 server.listen(process.argv[2])
