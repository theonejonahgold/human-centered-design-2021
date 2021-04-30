<script lang="ts">
  import { emojis, outputSettings } from '$lib/stores/settings'
  import Emoji from 'svelte-emoji'

  export let author: string
  export let emotion: Emotion
  export let demo = false

  $: bgColor =
    $outputSettings.backgroundColor === 'all' ||
    $outputSettings.backgroundColor === 'message'

  $: animation =
    $outputSettings.animation === 'all' ||
    $outputSettings.animation === 'message'
</script>

<style lang="scss">
  @use 'sass:selector';

  article {
    border-radius: var(--br);
    border-bottom-left-radius: 0px;
    background-color: var(--primary);
    max-width: 20ch;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .you {
    background-color: var(--text-primary);
    border-radius: var(--br);
    border-bottom-right-radius: 0px;
    margin-left: auto;

    & h1 {
      text-align: right;
    }
  }

  h1 {
    font-size: 0.75rem;
    font-weight: 500;
  }

  h1,
  p {
    color: var(--text-secondary);
    margin: 0;
    text-align: left;
  }

  p {
    font-size: 1rem;
  }

  @mixin create-emotion($bg-color, $message-animation) {
    @at-root #{selector.unify(&, '.animation:not(.no-animate)')} {
      animation: $message-animation 1.5s ease-in-out;
    }

    @at-root #{selector.unify(&, '.bg-color')} {
      background-color: darken($bg-color, 15%);
    }
  }

  :global {
    article.somber,
    article.somber.you {
      $bg-color: rgb(27, 62, 89);
      $message-animation: somber;

      @include create-emotion($bg-color, $message-animation);

      @keyframes somber {
        40%,
        60% {
          transform: rotateZ(-20deg);
          transform-origin: center right;
        }
        from,
        to {
          transform: rotateZ(0deg);
          transform-origin: center right;
        }
      }
    }

    article.voldaan,
    article.voldaan.you {
      $bg-color: rgb(232, 165, 84);
      $message-animation: voldaan;

      @include create-emotion($bg-color, $message-animation);

      @keyframes voldaan {
        from,
        to {
          transform: translateY(0);
        }
        70%,
        80% {
          transform: translateY(-15px);
        }
      }
    }

    article.vrolijk,
    article.vrolijk.you {
      $bg-color: rgb(216, 196, 80);
      $message-animation: vrolijk;

      @include create-emotion($bg-color, $message-animation);

      @keyframes vrolijk {
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

    article.bozig,
    article.bozig.you {
      $bg-color: rgb(181, 65, 65);
      $message-animation: boos;

      @include create-emotion($bg-color, $message-animation);
    }

    article.angstig,
    article.angstig.you {
      $bg-color: rgb(111, 159, 196);
      $message-animation: angstig;

      @include create-emotion($bg-color, $message-animation);

      @keyframes angstig {
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

    article.verrukt,
    article.verrukt.you {
      $bg-color: rgb(216, 105, 57);
      $message-animation: verrukt;

      @include create-emotion($bg-color, $message-animation);

      @at-root #{selector.unify(&, 'article.animation')} {
        animation-iteration-count: 2;
        animation-duration: 0.75s;
      }

      @keyframes verrukt {
        from,
        25%,
        50%,
        75%,
        to {
          transform: translateY(0);
        }
        12.5%,
        37.5%,
        62.5%,
        87.5% {
          transform: translateY(-50px);
        }
      }
    }

    article.razend,
    article.razend.you {
      $bg-color: rgb(255, 0, 0);
      $message-animation: boos;

      @include create-emotion($bg-color, $message-animation);

      @at-root #{selector.unify(&, 'article.animation')} {
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

    article.verdrietig,
    article.verdrietig.you {
      $bg-color: rgb(32, 60, 215);
      $message-animation: verdrietig;

      @include create-emotion($bg-color, $message-animation);

      @keyframes verdrietig {
        from,
        to {
          transform: rotateX(0deg);
          transform-origin: bottom center;
        }
        10%,
        60% {
          transform: rotateX(110deg);
          transform-origin: bottom center;
        }
      }
    }

    article.neutraal,
    article.neutraal.you {
      $bg-color: rgb(133, 133, 133);
      $message-animation: none;

      @include create-emotion($bg-color, $message-animation);
    }

    article.verrast,
    article.verrast.you {
      $bg-color: rgb(206, 138, 101);
      $message-animation: verrast;

      @include create-emotion($bg-color, $message-animation);

      @keyframes verrast {
        10%,
        90% {
          transform: translateY(-20px);
        }
      }
    }

    article.geschrokken,
    article.geschrokken.you {
      $bg-color: rgb(77, 141, 189);
      $message-animation: geschrokken;

      @include create-emotion($bg-color, $message-animation);

      @keyframes geschrokken {
        10%,
        90% {
          transform: translateY(-400px) rotateZ(-45deg);
        }
      }
    }

    article.geïrriteerd,
    article.geïrriteerd.you {
      $bg-color: rgb(210, 83, 83);
      $message-animation: geïrriteerd;

      @include create-emotion($bg-color, $message-animation);

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

    article.boos,
    article.boos.you {
      $bg-color: rgb(147, 30, 30);
      $message-animation: boos;

      @at-root #{selector.unify(&, 'article.animation')} {
        animation-duration: calc(1.5s / 2);
        animation-iteration-count: 2;
      }

      @include create-emotion($bg-color, $message-animation);
    }

    article.blij,
    article.blij.you {
      $bg-color: rgb(177, 80, 28);
      $message-animation: blij;

      @include create-emotion($bg-color, $message-animation);

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

    article.teleurgesteld,
    article.teleurgesteld.you {
      $bg-color: rgb(169, 83, 83);
      $message-animation: teleurgesteld;

      @include create-emotion($bg-color, $message-animation);

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

    article.over-the-moon,
    article.over-the-moon.you {
      $bg-color: rgb(255, 89, 0);
      $message-animation: overthemoon;

      @include create-emotion($bg-color, $message-animation);

      @at-root #{selector.unify(&, 'article.animation')} {
        animation-duration: 1.5s;
      }

      @keyframes overthemoon {
        50%,
        75% {
          transform: rotateZ(3turn) translateY(-400%);
        }
        100% {
          transform: rotateZ(3turn) translateY(0);
        }
      }
    }

    article.bang,
    article.bang.you {
      $bg-color: rgb(52, 127, 167);
      $message-animation: bang;

      @include create-emotion($bg-color, $message-animation);

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

<article
  class:no-animate={demo}
  class={emotion}
  class:bg-color={bgColor || demo}
  class:animation
  class:you={author === 'jij'}
>
  <h1>{author}</h1>
  {#if $outputSettings.storyTelling}
    <p>
      "<slot />", zei {author}
      {emotion}
      {#if $outputSettings.emoji}
        <Emoji
          symbol={$emojis.get(emotion)}
          label={$outputSettings.storyTelling ? null : emotion}
        />
      {/if}
    </p>
  {:else}
    <p>
      <slot />
      {#if $outputSettings.emoji}
        <Emoji
          symbol={$emojis.get(emotion)}
          label={$outputSettings.storyTelling ? null : emotion}
        />
      {/if}
    </p>
  {/if}
</article>
