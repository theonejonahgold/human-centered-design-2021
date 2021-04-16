import initChat from './chat'
import initWebcam from './input/webcam'
import initSettings, {
  initialSettings,
  registerSettingsChangeListener,
} from './settings'

let emotion = 'neutral'

window.addEventListener('load', main)

async function main() {
  initChat(initialSettings)
  initSettings()
  initWebcam(initialSettings)
  registerSettingsChangeListener(() => {
    console.log('hoi')
  })
}
