import { browser } from '$app/env'
import { readable, writable } from 'svelte/store'

export const outputSettings = writable<OutputSettings>(
  {
    backgroundColor: 'all',
    animation: 'none',
    emoji: false,
    storyTelling: true,
  },
  set => {
    let persist: string
    if (browser) persist = localStorage.getItem('output-settings')
    const data: OutputSettings = persist
      ? JSON.parse(persist)
      : {
          backgroundColor: 'all',
          animation: 'none',
          emoji: false,
          storyTelling: true,
        }
    const unsubscribe = outputSettings.subscribe(value => {
      if (browser)
        localStorage.setItem('output-settings', JSON.stringify(value))
    })
    set(data)
    return unsubscribe
  }
)

export interface OutputSettings {
  backgroundColor: OutputToggle
  animation: OutputToggle
  emoji: boolean
  storyTelling: boolean
}

export type OutputToggle = 'all' | 'chat' | 'message' | 'none'

export const calibrationSettings = writable<CalibrationSettings>(
  {
    wpm: 70,
    swearAmount: 1,
    directAmount: 3,
    emojiAmount: 2,
    emotionAmount: 3,
  },
  set => {
    let persist: string
    if (browser) persist = localStorage.getItem('calibration-settings')
    const data: CalibrationSettings = persist
      ? JSON.parse(persist)
      : {
          wpm: 70,
          swearAmount: 1,
          directAmount: 3,
          emojiAmount: 2,
          emotionAmount: 3,
        }
    const unsubscribe = calibrationSettings.subscribe(value => {
      if (browser)
        localStorage.setItem('calibration-settings', JSON.stringify(value))
    })
    set(data)
    return unsubscribe
  }
)

export const calibrationDone = writable(false, set => {
  let persist: string
  if (browser) persist = localStorage.getItem('calibration-done')
  const data: boolean = persist ? JSON.parse(persist) : false
  const unsubscribe = calibrationDone.subscribe(value => {
    if (browser)
      localStorage.setItem('calibration-done', JSON.stringify(value))
  })
  set(data)
  return unsubscribe
})

interface CalibrationSettings {
  wpm: number
  swearAmount: NrRange<0, 5>
  directAmount: NrRange<0, 5>
  emotionAmount: NrRange<0, 5>
  emojiAmount: NrRange<0, 5>
}

export const emojis = readable(
  new Map<Emotion, string>([
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
  ]),
  () => {}
)
