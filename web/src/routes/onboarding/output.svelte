<script lang="ts">
  import Button from '$lib/components/atoms/Button.svelte'
  import Checkbox from '$lib/components/atoms/Checkbox.svelte'
  import Radio from '$lib/components/atoms/Radio.svelte'
  import ChatPreview from '$lib/components/molecules/ChatPreview.svelte'
  import { outputSettings } from '$lib/stores/settings'
  import { translateOutputSetting } from '$lib/utils/outputSettings'
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  label {
    display: flex;
    align-items: center;
  }

  form {
    max-height: 21rem;
    overflow-y: scroll;
  }

  details[open] {
    margin-bottom: 1rem;
  }
</style>

<h1>En dan nog de output...</h1>
<p>
  Omdat niet iedereen houdt van intense emotie-battles, mag je kiezen hoe de
  emoties worden getoond bij een bericht.
</p>

<div>
  <ChatPreview />
  <form on:submit|preventDefault>
    <h2>Instellingen</h2>
    <details>
      <summary>
        Achtergrondkleur ({translateOutputSetting(
          $outputSettings.backgroundColor
        )})
      </summary>
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
    </details>
    <details>
      <summary>
        Animaties ({translateOutputSetting($outputSettings.animation)})
      </summary>
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
    </details>
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
      <Checkbox bind:checked={$outputSettings.emoji} name="emoji" value="aan" />
    </label>
  </form>
</div>

<Button center large type="link" href="/onboarding/finished">Doorgaan</Button>
