<script>
  import UserImage from '$lib/components/atoms/UserImage.svelte'
  import Achievement from '$lib/components/molecules/Achievement.svelte'
  import {
    achievements,
    discoveredEmotions,
    reachedAchievements,
  } from '$lib/stores/achievements'
</script>

<style lang="scss">
  main {
    max-height: 100%;
    overflow-y: scroll;
    > header {
      position: sticky;
      top: 0;
      background: var(--text-secondary);
      border-bottom: 1px solid darken(#f4f4f4, 10);
      padding: 1rem 1rem 0.75rem;
    }
  }

  h2 {
    margin: 0;
  }

  main :global(img:nth-child(2)) {
    display: block;
    margin: 1rem auto;
  }

  p {
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0 0;
    font-weight: bold;
  }

  section {
    padding: 1rem;

    > header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }

    h3 {
      margin: 0;
    }
  }

  header > label {
    font-size: 0.75rem;
    color: darken(#f4f4f4, 20);
  }

  progress {
    display: block;
    appearance: none;
    width: 100%;

    &[value]::-webkit-progress-bar {
      background-color: var(--text-secondary);
      height: 0.4rem;
      border-radius: var(--br);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }

    &[value]::-webkit-progress-value {
      border-radius: var(--br);
      background-color: var(--primary);
    }

    &[value].complete::-webkit-progress-value {
      background: repeating-linear-gradient(
        -20deg,
        #668f80 0 5px,
        lighten(#668f80, 10) 5px 10px
      );
      background-size: 200% 100%;

      animation: completion 2s linear infinite;
    }

    @keyframes completion {
      from {
        background-position-x: 0;
      }

      to {
        background-position-x: 100%;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  section:first-of-type ul {
    li {
      padding: 0.25rem 0.5rem;
      background: var(--primary);
      color: var(--text-secondary);
      border-radius: var(--br);
      margin-right: 0.5rem;
    }
  }

  section:nth-of-type(2) ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
</style>

<main>
  <header>
    <h2>Profiel</h2>
  </header>
  <UserImage size="12rem" />
  <p>Berend Jr.</p>
  <section>
    <header>
      <h3>Emoties</h3>
      <label>
        {$discoveredEmotions.size} van de 17
        <progress
          class:complete={$discoveredEmotions.size === 17}
          min="0"
          max="17"
          value={$discoveredEmotions.size}
        />
      </label>
    </header>
    <ul>
      {#each [...$discoveredEmotions] as emotion (emotion)}
        <li>
          {emotion}
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <header>
      <h3>Achievements</h3>
      <label>
        {$reachedAchievements.size} van de {$achievements.size}
        <progress
          class:complete={$achievements.size === $reachedAchievements.size}
          min="0"
          max={$achievements.size}
          value={$reachedAchievements.size}
        />
      </label>
    </header>
    <ul>
      {#each [...$achievements] as [name, { description, occluded }] (name)}
        <li>
          <Achievement
            {name}
            {description}
            reached={$reachedAchievements.has(name)}
            {occluded}
          />
        </li>
      {/each}
    </ul>
  </section>
</main>
