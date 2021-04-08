import { createServer } from 'http'
import { Server } from 'socket.io'

const port = process.env.PORT || 5000

const server = createServer()
const io = new Server(server)

io.on('connection', socket => {
  socket.on('message', message => {
    io.emit('message', message)
  })

  socket.on('disconnect', () => {})
})

server.listen(port, () => {
  console.log('listening on port', port)
})
