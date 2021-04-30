import { io, Socket } from 'socket.io-client'
import { retrieveResult as typingSpeedResult } from './input/typingSpeed'
import { retrieveResult as webcamResult } from './input/webcam'
import { retrieveResult as wordChoiceResult } from './input/wordChoice'
import { runAnimation } from './output/animation'
import { runBackgroundColor } from './output/backgroundColor'
import { runEmojis } from './output/emojis'
import { runStorytelling } from './output/storyTelling'
import { Settings, registerSettingsChangeListener } from './settings'

let settings: Settings

export default async function initChat(initialSettings: Settings) {
  const socket = connectToSocket()
  addFormSubmitListener(socket)
  addSocketMessageListener(socket)
  settings = initialSettings
  registerSettingsChangeListener(newSettings => (settings = newSettings))
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
    const nameInput = this.querySelector<HTMLInputElement>(
      'input[name="name"]'
    )!
    const messageInput = this.querySelector<HTMLInputElement>(
      'input[name="message"]'
    )!
    const emotion = parseEmotionInputs()
    socket.emit('message', {
      message: messageInput.value,
      name: nameInput.value,
      emotion,
    })
    addOwnChatMessageToList({
      message: messageInput.value,
      name: nameInput.value,
      emotion,
    })
    messageInput.value = ''
  }
}

function addOwnChatMessageToList(message: ChatMessage) {
  const messages = document.querySelector('main ul')!
  const listItem = document.createElement('li')
  listItem.dataset.name = 'jij'
  listItem.dataset.message = message.message
  listItem.dataset.emotion = message.emotion
  listItem.textContent = message.message
  listItem.classList.add(message.emotion.replace(/\s/g, '-'))
  listItem.classList.add('own')
  const chatUI = document.querySelector('main')!
  emotions.forEach(emotion =>
    chatUI.classList.remove(emotion.replace(/\s/g, '-'))
  )
  chatUI.classList.add(message.emotion.replace(/\s/g, '-'))
  messages.appendChild(listItem)
  runEmojis()
  runAnimation()
  runBackgroundColor()
  runStorytelling()
  messages.scrollTop = messages.scrollHeight
}

function parseEmotionInputs(): Emotion {
  const results: {
    wordChoice: string
    typingSpeed: string
    webcam: string
  } = {
    wordChoice: '',
    typingSpeed: '',
    webcam: '',
  }

  if (settings.input.swears)
    results.wordChoice = parseWordChoiceEmotion(wordChoiceResult())
  if (settings.input.typingSpeed)
    results.typingSpeed = parseTypingSpeedEmotion(typingSpeedResult())
  if (settings.input.webcam) results.webcam = webcamResult()

  if (results.webcam) {
    let emotion = results.webcam as Emotion
    switch (results.typingSpeed) {
      case 'langzaam':
        if (emotion === 'blij') emotion = 'voldaan'
        if (emotion === 'verdrietig') emotion = 'somber'
        if (emotion === 'boos') emotion = 'teleurgesteld'
        break
      case 'middel':
        if (emotion === 'blij') emotion = 'vrolijk'
        if (emotion === 'boos') emotion = 'bozig'
        if (emotion === 'bang') emotion = 'angstig'
        break
      case 'snel':
        if (emotion === 'verrast') emotion = 'geschrokken'
        break
      case 'supersnel':
        if (emotion === 'blij') emotion = 'verrukt'
        if (emotion === 'boos') emotion = 'razend'
        break
    }
    switch (results.wordChoice) {
      case 'middel':
        if (emotion === 'blij') emotion = 'vrolijk'
        if (emotion === 'somber') emotion = 'verdrietig'
        if (emotion === 'teleurgesteld') emotion = 'bozig'
        break
      case 'veel':
        if (emotion === 'verrast') emotion = 'geschrokken'
        if (emotion === 'bozig') emotion = 'boos'
        if (emotion === 'verrukt') emotion = 'over the moon'
        break
      case 'superveel':
        if (emotion === 'boos') emotion = 'razend'
        if (emotion === 'blij') emotion = 'over the moon'
    }
    return emotion
  }

  switch (results.typingSpeed) {
    case 'langzaam':
      switch (results.wordChoice) {
        case 'weinig':
          return 'neutraal'
        case 'middel':
          return 'geïrriteerd'
        case 'veel':
          return 'bozig'
        case 'extreem':
          return 'boos'
      }
    case 'middel':
      switch (results.wordChoice) {
        case 'weinig':
          return 'blij'
        case 'middel':
          return 'geïrriteerd'
        case 'veel':
          return 'bozig'
        case 'extreem':
          return 'boos'
      }
    case 'snel':
      switch (results.wordChoice) {
        case 'weinig':
          return 'verrast'
        case 'middel':
          return 'verrukt'
        case 'veel':
          return 'geschrokken'
        case 'extreem':
          return 'razend'
      }
    case 'supersnel':
      switch (results.wordChoice) {
        case 'weinig':
          return 'verrukt'
        case 'middel':
          return 'verrast'
        case 'veel':
          return 'angstig'
        case 'extreem':
          return 'razend'
      }
    default:
      return 'neutraal'
  }
}

function parseWordChoiceEmotion(result: number) {
  if (result < 2) return 'weinig'
  if (result < 5) return 'middel'
  if (result < 8) return 'veel'
  return 'extreem'
}

function parseTypingSpeedEmotion(result: number) {
  if (result < 70) return 'langzaam'
  if (result < 90) return 'middel'
  if (result < 110) return 'snel'
  return 'supersnel'
}

function addSocketMessageListener(socket: Socket) {
  const messages = document.querySelector('main ul')!
  socket.on('message', (message: ChatMessage) => {
    const listItem = document.createElement('li')
    listItem.dataset.name = message.name
    listItem.dataset.message = message.message
    listItem.dataset.emotion = message.emotion
    listItem.textContent = message.message
    listItem.classList.add(message.emotion.replace(/\s/g, '-'))
    const chatUI = document.querySelector('main')!
    emotions.forEach(emotion =>
      chatUI.classList.remove(emotion.replace(/\s/g, '-'))
    )
    chatUI.classList.add(message.emotion)
    messages.appendChild(listItem)
    runEmojis()
    runAnimation()
    runBackgroundColor()
    runStorytelling()
    messages.scrollTop = messages.scrollHeight
  })
}

type ChatMessage = {
  message: string
  emotion: Emotion
  name: string
}

const emotions: Emotion[] = [
  'voldaan',
  'somber',
  'vrolijk',
  'bozig',
  'angstig',
  'verrukt',
  'razend',
  'verdrietig',
  'neutraal',
  'verrast',
  'geschrokken',
  'boos',
  'geïrriteerd',
  'blij',
  'teleurgesteld',
  'over the moon',
  'bang',
]

export type Emotion =
  | 'voldaan'
  | 'somber'
  | 'vrolijk'
  | 'bozig'
  | 'angstig'
  | 'verrukt'
  | 'razend'
  | 'verdrietig'
  | 'neutraal'
  | 'verrast'
  | 'geschrokken'
  | 'boos'
  | 'geïrriteerd'
  | 'blij'
  | 'teleurgesteld'
  | 'over the moon'
  | 'bang'
