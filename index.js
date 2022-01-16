const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log('A user connected')
    socket.on('disconnect', () => {
        console.log('User are disconnected!')
    })
    socket.on('message', (data) => {
        io.emit('message', data)
    })
})

server.listen(3000, () => {
    console.log('listing on *: 3000')
})