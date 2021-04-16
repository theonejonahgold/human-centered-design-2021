const settings: Settings = {
  output: {
    backgroundColor: 'all',
    animation: 'none',
    emojis: false,
    storyTelling: false,
  },
  input: {
    webcam: false,
    typingSpeed: false,
    swears: false,
  },
}

export const initialSettings = { ...settings }

const settingsProxyHandler: ProxyHandler<Settings> = {
  get(target, key) {
    const prop = <string>key
    if (typeof target[prop] === 'object' && target[prop] !== null) {
      return new Proxy(target[prop], settingsProxyHandler)
    }
  },
  set(target, p, val) {
    target[p as string] = val
    settingsCallbacks.forEach(cb => cb(settings))
    return true
  },
}

const settingsProxy = new Proxy(settings, settingsProxyHandler)

const settingsCallbacks: SettingsCallback[] = []

export function registerSettingsChangeListener(cb: SettingsCallback) {
  settingsCallbacks.push(cb)
  setTimeout(() => {
    settingsProxy.input.swears = true
  }, 500)
}

export default function initSettings() {
  document
    .querySelector('[data-settings]')!
    .querySelectorAll('input')
    .forEach(input => {
      input.addEventListener('change', inputChangeHandler)
    })
}

function inputChangeHandler(this: HTMLInputElement) {
  switch (this.name as SettingsInputNames) {
    case 'bg-color':
      settingsProxy.output.backgroundColor = this.value as OutputLocation
      break
    case 'animation':
      settingsProxy.output.animation = this.value as OutputLocation
      break
    case 'emoji':
      settingsProxy.output.emojis = this.checked
      break
    case 'storytelling':
      settingsProxy.output.storyTelling = this.checked
      break
    case 'swears':
      settingsProxy.input.swears = this.checked
      break
    case 'type-speed':
      settingsProxy.input.typingSpeed = this.checked
      break
    case 'webcam':
      settingsProxy.input.webcam = this.checked
      break
  }
}

export interface Settings extends Record<string, any> {
  output: {
    backgroundColor: OutputLocation
    animation: OutputLocation
    emojis: boolean
    storyTelling: boolean
  }
  input: {
    webcam: boolean
    typingSpeed: boolean
    swears: boolean
  }
}

type OutputLocation = 'all' | 'none'

type SettingsInputNames =
  | 'bg-color'
  | 'animation'
  | 'emoji'
  | 'storytelling'
  | 'webcam'
  | 'type-speed'
  | 'swears'

type SettingsCallback = (settings: Settings) => void
