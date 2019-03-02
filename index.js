const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const PORT = 4000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', socket => {
  console.log('User connected')

  socket.emit("connection", "Hello")
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))