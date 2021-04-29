<script>
  import Chat from '$lib/components/molecules/Chat.svelte'
  import ChatHeader from '$lib/components/molecules/ChatHeader.svelte'
  import { outputSettings } from '$lib/stores/settings'
  import FakeChatInput from '$lib/components/atoms/FakeChatInput.svelte'
  import { tick } from 'svelte'

  let messages = new Set<Message>()
  let waiting = false
  let emotions = new Set<Emotion>([
    'blij',
    'geïrriteerd',
    'angstig',
    'boos',
    'bozig',
    'razend',
  ])
  const texts = new Set<string>([
    'Hoi opa! Hoe gaat het?',
    'Oh nee hè, moet je weer eens hoi zeggen?',
    'Wat is daar erg aan dan?',
    'Snap je dan niet dat ik helemaal klaar met je ben?',
    'Ja, is dat zo? Nou, dan ben ik helemaal klaar met jou!',
    'TOP! OPROTTEN DAN!',
  ])

  $: bgColor =
    $outputSettings.backgroundColor === 'all' ||
    $outputSettings.backgroundColor === 'chat'

  $: animation =
    $outputSettings.animation === 'all' || $outputSettings.animation === 'chat'

  async function submitHandler() {
    messages = messages.add({
      emotion: [...emotions][messages.size],
      message: [...texts][messages.size],
      username: 'jij',
    })
    waiting = true
    await tick()
    setTimeout(() => {
      messages = messages.add({
        emotion: [...emotions][messages.size],
        message: [...texts][messages.size],
        username: 'Berend Sr.',
      })
      waiting = false
    }, 2000)
  }

  function restart() {
    messages.clear()
    messages = messages
  }
</script>

<style lang="scss">
  @use 'sass:selector';

  main {
    position: relative;
  }

  main.step-1 {
    background-color: rgb(177, 80, 28);

    & :global(li:first-child) {
      animation: step-1 1.5s ease-in-out;

      transform-origin: bottom right;

      @keyframes step-1 {
        from,
        to {
          transform: rotateZ(0deg);
        }
        25%,
        50%,
        75% {
          transform: rotateZ(-20deg);
        }
        12.5%,
        37.5%,
        62.5%,
        87.5% {
          transform: rotateZ(20deg);
        }
      }
    }
  }

  main.step-2 {
    background-color: rgb(210, 83, 83);

    & :global(li:nth-child(2)) {
      animation: step-2-in 0.7s cubic-bezier(0.33, 1.11, 0.68, 1.34);
    }

    & :global(li:nth-child(1)) {
      animation: step-2-out 0.5s 0.35s cubic-bezier(0.33, 1.11, 0.68, 1.34)
        forwards;
    }

    @keyframes step-2-in {
      from {
        transform: translateX(-150%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes step-2-out {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(10%);
      }
    }
  }

  main.step-3 {
    background-color: rgb(111, 159, 196);

    & :global(li:nth-child(3)) {
      animation: step-3-in 1.5s ease-in-out 1 forwards;

      animation-iteration-count: 1;

      & :global(article) {
        animation: step-3-in-2 0.25s linear 7 forwards;
      }
    }

    & :global(li:nth-child(1)) {
      transform: translate(10%);
    }

    @keyframes step-3-in {
      from {
        transform: translateX(110%);
      }
      to {
        transform: translateX(5%);
      }
    }

    @keyframes step-3-in-2 {
      from,
      10%,
      20%,
      30%,
      40%,
      50%,
      60%,
      70%,
      80%,
      90%,
      to {
        transform: translateY(0);
      }
      5%,
      15%,
      25%,
      35%,
      45%,
      55%,
      65%,
      75%,
      85%,
      95% {
        transform: translateY(10px);
      }
    }
  }

  main.step-4 {
    background-color: rgb(147, 30, 30);

    & :global(li:nth-child(4)) {
      animation: step-4 0.5s cubic-bezier(0.21, 1.59, 0.74, 1.29) forwards;
    }

    & :global(li:nth-child(3)) {
      animation: step-4-in-2 0.1s ease-in 0.2s forwards;
      transform: translateX(5%);
    }

    & :global(li:nth-child(1)) {
      transform: translate(10%);
    }

    @keyframes step-4 {
      from {
        transform: translateX(-110%);
      }
      to {
        transform: translateX(20%);
      }
    }

    @keyframes step-4-in-2 {
      from {
        transform: translateX(5%);
      }
      to {
        transform: translateX(25%);
      }
    }
  }

  main.step-5 {
    background-color: rgb(181, 65, 65);

    & :global(li:nth-child(5)) {
      animation: step-5 1s cubic-bezier(0.63, 0.02, 1, 0.69) forwards;
      transform-origin: center right;
    }

    & :global(li:nth-child(4)) {
      transform: translateX(20%);
      animation: step-5-2 0.2s 1s cubic-bezier(0.62, -0.57, 0.75, -0.04)
        forwards;
      transform-origin: top center;
    }

    & :global(li:nth-child(3)) {
      transform: translateX(25%);
    }

    & :global(li:nth-child(1)) {
      transform: translate(10%);
    }

    @keyframes step-5 {
      from {
        transform: rotateZ(90deg) translateX(-50%);
      }
      to {
        transform: rotateZ(0deg) translateX(-50%);
      }
    }

    @keyframes step-5-2 {
      from {
        transform: translateX(20%) translateY(0) rotateZ(0);
      }
      to {
        transform: translateX(20%) translateY(60px) rotateZ(10deg);
      }
    }
  }

  main.step-6 {
    background-color: rgb(255, 0, 0);

    & :global(li:nth-child(6)) {
      animation: step-6 1.5s ease-in-out;
      transform-origin: bottom left;

      & :global(article) {
        animation: step-6-2 0.25s 5 linear;
      }
    }

    & :global(li:nth-child(5)) {
      transform: rotateZ(0deg) translateX(-50%);
      transform-origin: center right;
    }

    & :global(li:nth-child(4)) {
      transform: translateX(20%) translateY(60px) rotateZ(10deg);
      transform-origin: center top;
    }

    & :global(li:nth-child(3)) {
      transform: translateX(25%);
    }

    & :global(li:nth-child(1)) {
      transform: translate(10%);
    }

    & :global {
      li:nth-child(1) article,
      li:nth-child(3) article,
      li:nth-child(5) article {
        animation: step-6-3 1s 1.5s cubic-bezier(0.63, 0.02, 1, 0.69) forwards;
        transform-origin: bottom center;

        @keyframes step-6-3 {
          from {
            transform: rotateX(0);
          }
          to {
            transform: rotateX(90deg);
          }
        }
      }
    }

    @keyframes step-6 {
      from {
        transform: translate(-50%, 50%) scale(0);
      }
      40%,
      60% {
        transform: translate(0, 0) scale(2);
      }
      to {
        transform: translate(0, 0) scale(1);
      }
    }

    @keyframes step-6-2 {
      from,
      10%,
      20%,
      30%,
      40%,
      50%,
      60%,
      70%,
      80%,
      90%,
      to {
        transform: translateX(0);
      }
      5%,
      15%,
      25%,
      35%,
      45%,
      55%,
      65%,
      75%,
      85%,
      95% {
        transform: translateX(10px);
      }
    }
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: var(--text-secondary);

    button {
      display: block;
      appearance: none;
      font-size: 1.5rem;
      background: var(--green);
      border: none;
      color: var(--text-secondary);
      border-radius: var(--br);
      padding: 0.5em 0.75em;
      margin: 0 auto;
    }
  }
</style>

<main class="step-{messages.size}" class:animation class:bg-color={bgColor}>
  <ChatHeader
    name="Berend Sr. (emotie-battle demo)"
    online={messages.size !== texts.size}
  />
  <Chat bind:messages />
  {#if texts.size === messages.size}
    <div>
      <button on:click={restart}>Herstart</button>
    </div>
  {:else}
    <FakeChatInput
      bind:disabled={waiting}
      on:submit={submitHandler}
      message={[...texts][messages.size]}
    />
  {/if}
</main>
