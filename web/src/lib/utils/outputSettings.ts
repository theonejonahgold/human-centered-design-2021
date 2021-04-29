import type { OutputToggle } from '../stores/settings'

export function translateOutputSetting(output: OutputToggle) {
  switch (output) {
    case 'all':
      return 'Overal'
    case 'chat':
      return 'Chat'
    case 'message':
      return 'Berichten'
    case 'none':
      return 'Nergens'
  }
}
