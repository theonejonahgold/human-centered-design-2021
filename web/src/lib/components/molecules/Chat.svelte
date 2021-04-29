<script>
  import { browser } from '$app/env'

  import { afterUpdate, beforeUpdate } from 'svelte'
  import ChatMessage from '../atoms/ChatMessage.svelte'

  export let messages: Set<Message>

  let ulEl: HTMLUListElement
  let battleDemo = false

  afterUpdate(() => {
    if (!browser) return
    if (!ulEl) return
    ulEl.scrollTop = ulEl.scrollHeight
  })
</script>

<style>
  ul {
    margin: 0;
    padding: 1rem 1rem 0;
    list-style: none;
    max-height: 31rem;
    overflow-y: scroll;
  }
</style>

<ul bind:this={ulEl}>
  {#each [...messages] as { username, message, emotion }}
    <li>
      <ChatMessage demo={battleDemo} author={username} {emotion}
        >{message}</ChatMessage
      >
    </li>
  {/each}
</ul>
