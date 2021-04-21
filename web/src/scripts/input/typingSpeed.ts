import { registerSettingsChangeListener, Settings } from '../settings'

let startTime: Date
let wordCount: number
let handicap: number

export default async function initTypingSpeed(initialSettings: Settings) {
  registerSettingsChangeListener(settings => {
    if (!settings.input.typingSpeed) return stopTypingSpeed()
    startTypingSpeed()
  })
  if (!initialSettings.input.typingSpeed) return
  startTypingSpeed()
}

export function retrieveResult() {
  return calculateWPM()
}

function startTypingSpeed() {
  addChatInputListener()
}

function stopTypingSpeed() {
  removeChatInputListener()
}

function addChatInputListener() {
  const chatInput: HTMLInputElement = document.querySelector(
    '[data-chat] input[name="message"]'
  )!
  chatInput.addEventListener('keydown', chatInputPressHandler)
}

function removeChatInputListener() {
  const chatInput: HTMLInputElement = document.querySelector(
    '[data-chat] input[name="message"]'
  )!
  chatInput.removeEventListener('keydown', chatInputPressHandler)
}

function chatInputPressHandler(this: HTMLInputElement, e: KeyboardEvent) {
  if (e.key === 'Backspace') addHandicap()
  if (this.value.length === 1) resetValues()
  setWordCount(this.value)
}

function addHandicap() {
  handicap += 1
}

function setWordCount(message: string) {
  wordCount = message.split(' ').length
}

function resetValues() {
  startTime = new Date(Date.now())
  wordCount = 1
  handicap = 0
}

function calculateWPM() {
  const difference = (Date.now() - startTime.getTime()) / 1000 - handicap * 0.1
  return (wordCount / difference) * 60
}
