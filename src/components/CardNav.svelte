<script>
  import CardNavItem from "./CardNavItem.svelte";
  export let cards, activeId;
</script>

<div class="wrapper max-hero-width">
  <nav>
    {#each cards as navItem}
      <CardNavItem {navItem} {activeId} on:click />
    {/each}
  </nav>
</div>

<style>
  .wrapper {
    position: sticky;
    top: 0px;
    z-index: var(--z-nav);
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    background: var(--white);
    border-right: 1px solid var(--white);
    border-left: 1px solid var(--white);
  }

  @media (min-width: 576px) {
    nav {
      border: none;
    }
  }
</style>
