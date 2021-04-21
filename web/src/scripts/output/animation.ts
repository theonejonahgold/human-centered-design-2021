import {
  Settings,
  OutputLocation,
  registerSettingsChangeListener,
} from '../settings'

let setting: OutputLocation

export default function initAnimation(initialSettings: Settings) {
  setting = initialSettings.output.animation
  registerSettingsChangeListener(settings => {
    if (setting === settings.output.animation) return
    setting = settings.output.animation
    runAnimation()
  })
  runAnimation()
}

export function runAnimation() {
  if (setting === 'none') {
    removeAnimationFromChat()
    return removeAnimationFromMessage()
  }
  if (setting === 'all') {
    addAnimationToMessage()
    return addAnimationToChat()
  }
  if (setting === 'chat') {
    removeAnimationFromMessage()
    return addAnimationToChat()
  }
  addAnimationToMessage()
  removeAnimationFromChat()
}

function addAnimationToChat() {
  const chat = document.querySelector('main')!
  chat.classList.remove('animation')
  setTimeout(() => chat.classList.add('animation'), 1)
}

function addAnimationToMessage() {
  const message = document.querySelector<HTMLLIElement>('main ul li:last-child')
  if (!message) return
  message.classList.remove('animation')
  setTimeout(() => message.classList.add('animation'), 1)
}

function removeAnimationFromChat() {
  const chat = document.querySelector('main')!
  chat.classList.remove('animation')
}

function removeAnimationFromMessage() {
  const messages = document.querySelectorAll('main ul li')!
  messages.forEach(message => message.classList.remove('animation'))
}
