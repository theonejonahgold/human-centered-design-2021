import { io, Socket } from 'socket.io-client'
import { Settings } from './settings'

export default async function initChat(initialSettings: Settings) {
  const socket = connectToSocket()
  addFormSubmitListener(socket)
  addSocketMessageListener(socket)
  return true
}

function connectToSocket() {
  const url = import.meta.env.VITE_SOCKET_URL
  if (!url) throw new Error('Socket URL not found in environment')
  return io(<string>url)
}

function addFormSubmitListener(socket: Socket) {
  document
    .querySelector('[data-chat]')!
    .addEventListener('submit', submitMessage(socket))
}

function submitMessage(socket: Socket) {
  return submitHandler

  function submitHandler(this: HTMLFormElement, e: Event) {
    e.preventDefault()
    const input = this.querySelector('input')!
    socket.emit('message', { message: input.value })
    this.reset()
  }
}

function addSocketMessageListener(socket: Socket) {
  const messages = document.querySelector('main ul')!
  socket.on('message', (data: ChatMessage) => {
    const element = document.createElement('li')
    element.textContent = data.message
    messages.appendChild(element)
    messages.scrollTop = messages.scrollHeight
  })
}

type ChatMessage = {
  message: string
  emotion?: string
}
