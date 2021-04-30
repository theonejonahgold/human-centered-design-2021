import { browser } from '$app/env'
import { derived, readable, Writable, writable } from 'svelte/store'
import type { OutputSettings } from './settings'

export const discoveredEmotions: Writable<Set<Emotion>> = writable<
  Set<Emotion>
>(new Set<Emotion>(), set => {
  let persist: string
  if (browser) persist = localStorage.getItem('discovered-emotions')
  const data = persist
    ? new Set<Emotion>(JSON.parse(persist))
    : new Set<Emotion>()
  const unsubscribe = discoveredEmotions.subscribe(value => {
    if (browser)
      localStorage.setItem('discovered-emotions', JSON.stringify([...value]))
  })
  set(data)
  return unsubscribe
})

export const achievements = readable<AchievementMap>(
  new Map([
    [
      'Hitting the road.',
      {
        conditions: { discoveredEmotions: 1 },
        description: 'Ontdek je eerste emotie',
      },
    ],
    [
      '5 gezichten',
      {
        conditions: { discoveredEmotions: 5 },
        description: 'Ontdek 5 emoties',
      },
    ],
    [
      '10 vingers in de lucht!',
      {
        conditions: { discoveredEmotions: 10 },
        description: 'Ontdek 10 emoties',
      },
    ],
    [
      'Een mens van vele gezichten',
      {
        conditions: { discoveredEmotions: 17 },
        description: 'Ontdek alle 17 emoties',
      },
    ],
    [
      'We have a liftoff!',
      {
        conditions: { certainEmotion: 'over the moon' },
        description: 'Ontdek de "over the moon" emotie',
        occluded: true,
      },
    ],
    [
      'Witheet',
      {
        conditions: { certainEmotion: 'razend' },
        description: 'Ontdek de "razend" emotie',
        occluded: true,
      },
    ],
  ]),
  () => {}
)

export const reachedAchievements = derived<
  [typeof discoveredEmotions, typeof achievements],
  AchievementMap
>(
  [discoveredEmotions, achievements],
  ([$discoveredEmotions, $achievements], set) => {
    set(
      new Map(
        [...$achievements.entries()].filter(([_, { conditions }]) => {
          let result = false
          if (conditions.discoveredEmotions)
            result = conditions.discoveredEmotions <= $discoveredEmotions.size
          if (conditions.certainEmotion)
            result = $achievements.has(conditions.certainEmotion)
          return result
        })
      )
    )
  }
)

type AchievementMap = Map<
  string,
  {
    description: string
    conditions: Partial<{
      discoveredEmotions: number
      certainEmotion: Emotion
      settings: Partial<OutputSettings>
    }>
    occluded?: boolean
  }
>
