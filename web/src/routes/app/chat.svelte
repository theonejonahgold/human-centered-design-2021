<script>
  import Chat from '$lib/components/molecules/Chat.svelte'
  import ChatHeader from '$lib/components/molecules/ChatHeader.svelte'
  import { io } from 'socket.io-client'
  import { onDestroy, onMount } from 'svelte'
  import type { Socket } from 'socket.io-client'
  import ChatInput from '$lib/components/atoms/ChatInput.svelte'
  import { outputSettings } from '$lib/stores/settings'
  import { discoveredEmotions } from '$lib/stores/achievements'

  let socket: Socket
  let messages = new Set<Message>()
  let online = false

  $: emotion = messages.size ? [...messages][messages.size - 1].emotion : ''

  $: bgColor =
    $outputSettings.backgroundColor === 'all' ||
    $outputSettings.backgroundColor === 'chat'

  $: animation =
    $outputSettings.animation === 'all' || $outputSettings.animation === 'chat'

  function submitMessage({
    detail: { message, emotion },
  }: CustomEvent<{ message: string; emotion: Emotion }>) {
    const newMessage: Message = {
      username: 'Berend',
      message,
      emotion,
    }
    socket.emit('message', newMessage)
    discoveredEmotions.update(val => val.add(emotion))
    messages.add({ ...newMessage, username: 'jij' })
    messages = messages
  }

  onMount(() => {
    socket = io(
      import.meta.env.PROD ? 'hcd-chat.herokuapp.com' : 'localhost:5000'
    )

    socket.on('status', (status: boolean) => {
      online = status
    })

    socket.on('message', (message: Message) => {
      messages.add(message)
      messages = messages
    })
  })

  onDestroy(() => socket?.disconnect())
</script>

<style lang="scss">
  @use 'sass:selector';

  main {
    position: relative;
  }

  @mixin create-emotion($bg-color, $chat-animation) {
    @at-root #{selector.unify(&,'.animation')} {
      animation: $chat-animation 1.5s ease-in-out;
    }

    @at-root #{selector.unify(&,'.bg-color')} {
      background-color: $bg-color;
    }
  }

  :global {
    main.somber {
      $bg-color: rgb(27, 62, 89);
      $chat-animation: chat-somber;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes chat-somber {
        40%,
        60% {
          transform: rotateX(-30deg) translateY(10px);
        }
        from,
        to {
          transform: rotateX(0deg) translateY(0px);
        }
      }
    }

    main.voldaan {
      $bg-color: rgb(232, 165, 84);
      $chat-animation: chat-voldaan;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes chat-voldaan {
        from,
        to {
          transform: translateY(0);
        }
        70%,
        80% {
          transform: translateY(-30px);
        }
      }
    }

    main.vrolijk {
      $bg-color: rgb(216, 196, 80);
      $chat-animation: chat-vrolijk;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes chat-vrolijk {
        from,
        25%,
        50%,
        75%,
        to {
          transform: translateY(0) rotateZ(0deg);
          transform-origin: bottom right;
        }
        12.5%,
        37.5%,
        62.5%,
        87.5% {
          transform: translateY(-20px) rotateZ(20deg);
          transform-origin: bottom right;
        }
      }
    }

    main.bozig {
      $bg-color: rgb(181, 65, 65);
      $chat-animation: boos;

      @include create-emotion($bg-color, $chat-animation);
    }

    main.angstig {
      $bg-color: rgb(111, 159, 196);
      $chat-animation: chat-angstig;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes chat-angstig {
        from,
        to {
          transform: scaleY(1) scaleX(1);
          transform-origin: bottom center;
        }
        40%,
        60% {
          transform: scaleY(0.8) scaleX(0.9);
          transform-origin: bottom center;
        }
      }
    }

    main.verrukt {
      $bg-color: rgb(216, 105, 57);
      $chat-animation: chat-verrukt;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes chat-verrukt {
        from,
        to {
          transform: translate(0, 0) rotateZ(0);
        }
        25% {
          transform: translate(40px, -8px) rotateZ(301deg);
        }
        50% {
          transform: translate(290px, -49px) rotateZ(144deg);
        }
        75% {
          transform: translate(-80px, -200px) rotateZ(-28deg);
        }
      }
    }

    main.razend {
      $bg-color: rgb(255, 0, 0);
      $chat-animation: boos;

      @include create-emotion($bg-color, $chat-animation);

      @at-root #{selector.unify(&, 'main.animation')} {
        animation-iteration-count: 4;
        animation-duration: calc(1.5s / 4);
      }

      @keyframes boos {
        from,
        to {
          transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70%,
        90% {
          transform: translateX(20px);
        }
        20%,
        40%,
        60%,
        80% {
          transform: translateX(-20px);
        }
      }
    }

    main.verdrietig {
      $bg-color: rgb(32, 60, 215);
      $chat-animation: chat-verdrietig;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes chat-verdrietig {
        from,
        to {
          transform-origin: bottom center;
        }
        20%,
        60% {
          transform: translateY(20px) rotateX(30deg) rotateY(-20deg);
          transform-origin: bottom center;
        }
      }
    }

    main.neutraal {
      $bg-color: rgb(133, 133, 133);
      $chat-animation: none;

      @include create-emotion($bg-color, $chat-animation);
    }

    main.verrast {
      $bg-color: rgb(206, 138, 101);
      $chat-animation: chat-verrast;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes chat-verrast {
        10%,
        30%,
        50%,
        70%,
        90% {
          transform: translateX(-5px) translateY(-50px);
        }
        20%,
        40%,
        60%,
        80% {
          transform: translateX(5px) translateY(-50px);
        }
      }
    }

    main.geschrokken {
      $bg-color: rgb(77, 141, 189);
      $chat-animation: chat-geschrokken;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes chat-geschrokken {
        10%,
        90% {
          transform: translateY(-200%) rotateZ(-45deg);
        }
      }
    }

    main.geïrriteerd {
      $bg-color: rgb(210, 83, 83);
      $chat-animation: geïrriteerd;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes geïrriteerd {
        from,
        to {
          transform: translateX(0);
        }
        10%,
        50%,
        90% {
          transform: translateX(20px);
        }
        30%,
        70% {
          transform: translateX(-20px);
        }
      }
    }

    main.boos {
      $bg-color: rgb(147, 30, 30);
      $chat-animation: boos;

      @at-root #{selector.unify(&, 'main.animation')} {
        animation-duration: calc(1.5s / 2);
        animation-iteration-count: 2;
      }

      @include create-emotion($bg-color, $chat-animation);
    }

    main.blij {
      $bg-color: rgb(177, 80, 28);
      $chat-animation: blij;

      @include create-emotion($bg-color, $chat-animation);

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

    main.teleurgesteld {
      $bg-color: rgb(169, 83, 83);
      $chat-animation: chat-teleurgesteld;

      @include create-emotion($bg-color, $chat-animation);

      @at-root #{selector.unify(&, 'main.animation')} {
        animation-duration: 2s;
      }

      @keyframes chat-teleurgesteld {
        30%,
        50% {
          transform: scaleX(0.8) scaleY(1.1);
          transform-origin: bottom center;
        }
        70%,
        90% {
          transform: scaleX(1) scaleY(0.95);
          transform-origin: bottom center;
        }
      }

      @keyframes teleurgesteld {
        30%,
        50% {
          transform: scaleX(0.8) scaleY(1.1);
          transform-origin: bottom center;
        }
        70%,
        90% {
          transform: scaleX(1) scaleY(0.95);
          transform-origin: bottom center;
        }
      }
    }

    main.over-the-moon {
      $bg-color: rgb(255, 89, 0);
      $chat-animation: chat-overthemoon;

      @include create-emotion($bg-color, $chat-animation);

      @at-root #{selector.unify(&, 'main.animation')} {
        animation-duration: 2s;
      }

      @keyframes chat-overthemoon {
        5%,
        15%,
        25%,
        35%,
        45% {
          transform: translateX(-5px);
        }
        0%,
        10%,
        20%,
        30%,
        40% {
          transform: translateX(5px);
        }
        50% {
          transform: translateX(-5px);
        }
        60%,
        90% {
          transform: translateY(-150%);
        }
      }
    }

    main.bang {
      $bg-color: rgb(52, 127, 167);
      $chat-animation: bang;

      @include create-emotion($bg-color, $chat-animation);

      @keyframes bang {
        10%,
        90% {
          transform: scaleY(0.8);
          transform-origin: bottom center;
        }
        20%,
        30%,
        40%,
        50%,
        60%,
        70%,
        80% {
          transform: scaleY(0.8) translateX(-10px);
          transform-origin: bottom center;
        }
        15%,
        25%,
        35%,
        45%,
        55%,
        65%,
        75%,
        85% {
          transform: scaleY(0.8) translateX(10px);
          transform-origin: bottom center;
        }
      }
    }
  }
</style>

<main class={emotion} class:animation class:bg-color={bgColor}>
  <ChatHeader bind:online />
  <Chat bind:messages />
  <ChatInput on:submit={submitMessage} />
</main>
