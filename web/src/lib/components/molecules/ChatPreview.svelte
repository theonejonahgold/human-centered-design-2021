<script>
  import { outputSettings } from '$lib/stores/settings'
  import ChatMessage from '../atoms/ChatMessage.svelte'

  $: bgColor =
    $outputSettings.backgroundColor === 'all' ||
    $outputSettings.backgroundColor === 'chat'

  $: animation =
    $outputSettings.animation === 'all' || $outputSettings.animation === 'chat'
</script>

<style lang="scss">
  ul {
    list-style: none;
    background: darken(#f4f4f4, 5);
    width: 100%;
    position: relative;
    border-radius: var(--br);
    margin: 0;
    padding: 1rem 1rem 0.1rem;
  }

  .bg-color {
    background: rgb(177, 80, 28);
  }

  .animation {
    animation: blij 1.5s ease;

    @keyframes blij {
      40%,
      60% {
        transform: rotateX(360deg);
      }
      to {
        transform: rotateX(720deg);
      }
    }
  }
</style>

<article>
  <h2>Preview</h2>
  <ul class:bg-color={bgColor} class:animation>
    <li>
      <ChatMessage author="Eric" emotion="voldaan">
        Hoe gaat het met jou?
      </ChatMessage>
    </li>
    <li>
      <ChatMessage author="jij" emotion="blij">Ja goed! Met jou?</ChatMessage>
    </li>
  </ul>
</article>
