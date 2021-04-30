import { Settings, registerSettingsChangeListener } from '../settings'
import type { Emotion } from '../chat'

let setting: boolean

export default function initEmojis(initialSettings: Settings) {
  setting = initialSettings.output.emojis
  registerSettingsChangeListener(settings => {
    setting = settings.output.emojis
    runEmojis()
  })
  runEmojis()
}

export function runEmojis() {
  if (!setting) return removeEmojis()
  addEmojis()
}

function addEmojis() {
  const messages = document.querySelectorAll<HTMLLIElement>('main ul li')!
  messages.forEach(message => {
    message.dataset.emoji = emojis.get(message.dataset.emotion as Emotion)!
    message.classList.add('emoji')
  })
}

function removeEmojis() {
  const messages = document.querySelectorAll<HTMLLIElement>('main ul li')!
  messages.forEach(message => message.classList.remove('emoji'))
}

const emojis = new Map<Emotion, string>([
  ['voldaan', '☺️'],
  ['somber', '😔'],
  ['vrolijk', '🙂'],
  ['bozig', '😠'],
  ['angstig', '😥'],
  ['verrukt', '😁'],
  ['razend', '🤬'],
  ['verdrietig', '😢'],
  ['neutraal', '😶'],
  ['verrast', '😯'],
  ['geschrokken', '😱'],
  ['boos', '😡'],
  ['geïrriteerd', '😒'],
  ['blij', '😊'],
  ['teleurgesteld', '😕'],
  ['over the moon', '🥳'],
  ['bang', '😰'],
])
