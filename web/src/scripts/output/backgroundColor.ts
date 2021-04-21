import {
  Settings,
  OutputLocation,
  registerSettingsChangeListener,
} from '../settings'

let setting: OutputLocation

export default function initBackgroundColor(initialSettings: Settings) {
  setting = initialSettings.output.backgroundColor
  registerSettingsChangeListener(settings => {
    setting = settings.output.backgroundColor
    runBackgroundColor()
  })
  runBackgroundColor()
}

export function runBackgroundColor() {
  if (setting === 'none') {
    removeBGColorFromChat()
    return removeBGColorFromMessage()
  }
  if (setting === 'all') {
    addBGColorToMessage()
    return addBGColorToChat()
  }
  if (setting === 'chat') {
    removeBGColorFromMessage()
    return addBGColorToChat()
  }
  addBGColorToMessage()
  removeBGColorFromChat()
}

function addBGColorToChat() {
  const chat = document.querySelector('main')!
  chat.classList.add('bg-color')
}

function addBGColorToMessage() {
  const messages = document.querySelectorAll('main ul li')!
  messages.forEach(message => message.classList.add('bg-color'))
}

function removeBGColorFromChat() {
  const chat = document.querySelector('main')!
  chat.classList.remove('bg-color')
}

function removeBGColorFromMessage() {
  const messages = document.querySelectorAll('main ul li')!
  messages.forEach(message => message.classList.remove('bg-color'))
}
