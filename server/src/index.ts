import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

const port = process.env.PORT || 5000

const server = createServer()
const io = new Server(server, { cors: { origin: '*' } })

const rooms = new Map<string, Set<string>>()

io.on('connection', socket => {
  prepareRoomForSocket(socket)
  if (rooms.get(socket.data.roomID)!.size > 1)
    io.to(socket.data.roomID).emit('status', true)

  socket.on('message', message => {
    const { roomID } = socket.data
    socket.to(roomID).emit('message', message)
  })
  socket.on('disconnect', () => {
    removeSocketFromRoom(socket)
    io.to(socket.data.roomID).emit('status', false)
  })
})

server.listen(port, () => {
  console.log('listening on port', port)
})

function prepareRoomForSocket(socket: Socket) {
  if (!rooms.size) {
    const roomID = `${Math.floor(Math.random() * 1000000)}`
    rooms.set(roomID, new Set([socket.id]))
    socket.data.roomID = roomID
    return socket.join(roomID)
  }
  const halfEmptyRooms = [...rooms].filter(([_, sockets]) => sockets.size === 1)
  if (halfEmptyRooms.length) {
    const [roomID, sockets] = halfEmptyRooms[0]
    rooms.set(roomID, new Set([...sockets, socket.id]))
    socket.data.roomID = roomID
    return socket.join(roomID)
  }
  const roomID = `${Math.floor(Math.random() * 1000000)}`
  rooms.set(roomID, new Set([socket.id]))
  socket.data.roomID = roomID
  return socket.join(roomID)
}

function removeSocketFromRoom(socket: Socket) {
  const roomID = socket.data.roomID
  const room = rooms.get(roomID)!
  room.delete(socket.id)
  if (!room.size) return rooms.delete(roomID)
  rooms.set(roomID, room)
}
