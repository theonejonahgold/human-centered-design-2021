import initChat from './chat'
import initTypingSpeed from './input/typingSpeed'
import initWebcam from './input/webcam'
import initWordChoice from './input/wordChoice'
import initAnimation from './output/animation'
import initBackgroundColor from './output/backgroundColor'
import initEmojis from './output/emojis'
import initStorytelling from './output/storyTelling'
import initSettings, { initialSettings } from './settings'

window.addEventListener('load', main)

async function main() {
  initChat(initialSettings)
  initSettings()
  initWebcam(initialSettings)
  initTypingSpeed(initialSettings)
  initWordChoice()
  initAnimation(initialSettings)
  initBackgroundColor(initialSettings)
  initEmojis(initialSettings)
  initStorytelling(initialSettings)
}
