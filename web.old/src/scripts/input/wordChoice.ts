import { registerSettingsChangeListener, Settings } from '../settings'

const words = new Map([
  ['godverdomme', 2],
  ['klootzak', 3],
  ['eikel', 2],
  ['fuck', 2],
  ['fucking', 2],
  ['potverdorrie', 1],
  ['potverdikkeme', 1],
  ['mongool', 5],
  ['kut', 2],
  ['kutkind', 4],
  ['kutjoch', 4],
  ['kutwijf', 4],
  ['kutmens', 4],
  ['kutgozer', 4],
  ['bitch', 3],
  ['klootviool', 2],
  ['teringleier', 3],
  ['tyfushond', 3],
  ['tyfuskind', 3],
  ['teringhond', 3],
  ['tyfusleier', 3],
  ['tering', 3],
  ['tyfus', 3],
  ['oprotten', 1],
  ['opzouten', 1],
  ['optyfen', 3],
  ['opkankeren', 5],
  ['opgetyft', 3],
  ['halvegare', 3],
  ['hoer', 4],
  ['slet', 4],
  ['rotjoch', 2],
  ['kankermongool', 10],
  ['kankerkind', 7],
  ['kankergezwel', 7],
  ['kankerhoer', 6],
  ['kanker', 5],
  ['trut', 3],
  ['tyf', 2],
])

export default function initWordChoice() {}

export function retrieveResult() {
  return tallyWordChoiceResult()
}

function tallyWordChoiceResult() {
  const chatInput: HTMLInputElement = document.querySelector(
    '[data-chat] input[name="message"]'
  )!
  const messageWords = chatInput.value.split(' ')
  return messageWords
    .filter(word => words.has(word.toLowerCase()))
    .reduce((acc, curr) => acc + words.get(curr.toLowerCase())!, 0)
}
