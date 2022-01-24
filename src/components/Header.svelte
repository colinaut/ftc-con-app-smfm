<script>
  import Logo from "./Logo.svelte";
  let w;

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
    <span class="year">2022 Annual Meeting</span>
  </div>
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: var(--space-lg);
    padding: var(--space-sm) var(--space);
  }
  .con-branding {
    text-align: right;
  }
  .con-logo {
    max-height: 80px;
    max-height: clamp(50px, 9vh, 90px);
  }
  .year {
    display: block;
    color: var(--teal);
    text-align: right;
    font-size: var(--text-sm);
    font-size: clamp(var(--text-xs), 2vh, var(--text-md));
  }
  .branding {
    align-self: center;
    cursor: pointer;
  }
  @media (min-width: 576px) {
    header {
      gap: var(--space-lg);
      padding: var(--space) var(--space);
    }
  }
</style>
