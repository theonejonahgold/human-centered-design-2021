import { createServer } from 'http'
import { Server } from 'socket.io'

const port = process.env.PORT || 5000

const server = createServer()
const io = new Server(server, { cors: { origin: '*' } })

io.on('connection', socket => {
  socket.on('message', message =>
    io.sockets.allSockets().then(sockets =>
      sockets.forEach(s => {
        if (s !== socket.id) socket.to(s).emit('message', message)
      })
    )
  )
})

server.listen(port, () => {
  console.log('listening on port', port)
})
