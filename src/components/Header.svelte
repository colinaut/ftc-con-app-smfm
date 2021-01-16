<script>
  import Logo from "./Logo.svelte";
  export let title, w;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const click = () => {
    dispatch("click", {
      logoClick: true,
    });
  };

  $: logoFormat = w > 576 ? "normal" : "stocky";
</script>

<header class="max-hero-width" bind:clientWidth={w}>
  <div class="branding" on:click={click}>
    <Logo format={logoFormat} />
  </div>
  <div class="con-branding">
    <img
      class="con-logo"
      src="images/smfm-logo.png"
      alt="Society for Maternal Fetal Medicine"
    />
    <span class="year">2021 Annual Meeting</span>
    <!-- <h1>{title}</h1> -->
  </div>
</header>

<!-- TODO: fix header on mobile -->
<style>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: var(--space-lg);
    padding: var(--space-sm) var(--space-md);
  }
  .con-branding {
    text-align: right;
  }
  .con-logo {
    max-height: 7vh;
  }
  .year {
    display: block;
    color: var(--teal);
    text-align: right;
    font-size: 1.6vh;
  }
  .branding {
    align-self: center;
    cursor: pointer;
  }
  @media (min-width: 576px) {
    header {
      gap: var(--space-lg);
      padding: var(--space-md) var(--space-md);
    }
  }
</style>
