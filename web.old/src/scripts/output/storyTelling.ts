import { registerSettingsChangeListener, Settings } from '../settings'

let setting: boolean

export default function initStorytelling(initialSettings: Settings) {
  setting = initialSettings.output.storyTelling
  registerSettingsChangeListener(settings => {
    setting = settings.output.storyTelling
    runStorytelling()
  })
  runStorytelling()
}

export function runStorytelling() {
  if (!setting) return removeStorytelling()
  addStorytelling()
}

function addStorytelling() {
  const messages = document.querySelectorAll<HTMLInputElement>('main ul li')
  messages.forEach(
    message =>
      (message.innerHTML = `"${message.dataset.message}", zei ${message.dataset.name} ${message.dataset.emotion}`)
  )
}

function removeStorytelling() {
  const messages = document.querySelectorAll<HTMLInputElement>('main ul li')
  messages.forEach(
    message =>
      (message.innerHTML = `
    <span>${message.dataset.name!}</span>
    ${message.dataset.message!}
  `)
  )
}
