<script>
  import Checkbox from '$lib/components/atoms/Checkbox.svelte'

  import NumberInput from '$lib/components/atoms/NumberInput.svelte'
  import Radio from '$lib/components/atoms/Radio.svelte'

  import Slider from '$lib/components/molecules/Slider.svelte'

  import { calibrationSettings, outputSettings } from '$lib/stores/settings'
  import { translateOutputSetting } from '$lib/utils/outputSettings'
</script>

<style lang="scss">
  main {
    max-height: 100%;
    overflow-y: scroll;
  }

  header {
    position: sticky;
    top: 0;
    background: var(--text-secondary);
    border-bottom: 1px solid darken(#f4f4f4, 10);
    padding: 1rem 1rem 0.75rem;
  }

  h2 {
    margin: 0;
  }

  section {
    padding: 1rem;
  }

  section h1 {
    margin-top: 0;
  }

  section:first-of-type form {
    & :global(input) {
      max-width: 10rem;
    }

    & :global(output) {
      display: block;
      margin-bottom: 0.75rem;
    }
  }

  section:last-child {
    label {
      display: flex;
      align-items: center;
      width: 24rem;
    }
  }
</style>

<main>
  <header>
    <h2>Instellingen</h2>
  </header>
  <section>
    <h1>Woordkeuze</h1>
    <form on:submit|preventDefault>
      <Slider id="swears" bind:value={$calibrationSettings.swearAmount}>
        Hoe vaak scheld je?
      </Slider>
      <Slider
        id="mood"
        results={[
          'Niet',
          'Een beetje',
          '50/50',
          'Heel erg',
          'Recht-toe-recht-aan',
        ]}
        bind:value={$calibrationSettings.directAmount}
      >
        Hoe direct ben je met je woorden?
      </Slider>
      <Slider
        results={['Niet', 'Weinig', '50/50', 'Erg', 'Heel erg']}
        bind:value={$calibrationSettings.emotionAmount}
        id="emotion"
      >
        Hoe expressief ben je?
      </Slider>
      <Slider
        id="emoji"
        results={['Nooit', 'Af en toe', 'Regelmatig', 'Vaak', '(Bijna) altijd']}
        bind:value={$calibrationSettings.emojiAmount}
      >
        Hoevaak gebruik je emoji's?
      </Slider>
    </form>
  </section>
  <section>
    <h1>Typesnelheid</h1>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
      Woorden per minuut:
      <NumberInput bind:value={$calibrationSettings.wpm} />
    </label>
  </section>
  <section>
    <h1>Chatinstellingen</h1>
    <form on:submit|preventDefault>
      <fieldset>
        <legend>Achtergrondkleur</legend>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Overal
          <Radio
            bind:group={$outputSettings.backgroundColor}
            value="all"
            name="achtergrondkleur"
          />
        </label>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Chat
          <Radio
            bind:group={$outputSettings.backgroundColor}
            value="chat"
            name="achtergrondkleur"
          />
        </label>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Berichten
          <Radio
            bind:group={$outputSettings.backgroundColor}
            value="message"
            name="achtergrondkleur"
          />
        </label>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Nergens
          <Radio
            bind:group={$outputSettings.backgroundColor}
            value="none"
            name="achtergrondkleur"
          />
        </label>
      </fieldset>
      <fieldset>
        <legend> Animaties </legend>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Overal
          <Radio
            bind:group={$outputSettings.animation}
            value="all"
            name="animaties"
          />
        </label>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Chat
          <Radio
            bind:group={$outputSettings.animation}
            value="chat"
            name="animaties"
          />
        </label>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Berichten
          <Radio
            bind:group={$outputSettings.animation}
            value="message"
            name="animaties"
          />
        </label>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Nergens
          <Radio
            bind:group={$outputSettings.animation}
            value="none"
            name="animaties"
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Berichttekst</legend>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Verhalend
          <Checkbox
            bind:checked={$outputSettings.storyTelling}
            name="verhalen"
            value="aan"
          />
        </label>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          Emoji
          <Checkbox
            bind:checked={$outputSettings.emoji}
            name="emoji"
            value="aan"
          />
        </label>
      </fieldset>
    </form>
  </section>
</main>
