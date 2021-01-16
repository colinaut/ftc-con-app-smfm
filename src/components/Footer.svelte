<script>
  import Social from "./Social.svelte";
  import IconLink from "./IconLink.svelte";

  import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
  import Address from "./Address.svelte";
  import Button from "./Button.svelte";

  let collapsed = true;

  $: collapserBtnText = collapsed ? "Contact Us" : "Close";

  const toggleFooter = () => {
    collapsed = !collapsed;
  };
</script>

<footer class:collapse={collapsed}>
  <div class="max-hero-width inner">
    <h2 on:click={toggleFooter}>{collapserBtnText}</h2>

    <IconLink icon={faClinicMedical}>fetus.ucsf.edu</IconLink>

    {#if !collapsed}
      <div class="location">
        <Address
          header="UCSF Fetal Treatment Center"
          subhead="San Francisco"
          address="1855 4th Street, 2nd Floor, Room A-2432"
          city="San Francisco"
          state="CA"
          zip="94158-2549"
          phone="1-800-RX-FETUS"
          phone2="1-800-793-3887"
          fax="415-502-0660"
        />
      </div>
      <div class="location2">
        <Address
          header="UCSF Fetal Treatment Center"
          subhead="Oakland"
          address="744 52nd Street, 3rd Floor"
          city="Oakland"
          state="CA"
          zip="94609"
          phone="(510) 428-3156; opt #1"
          fax="415-502-0660"
        />
      </div>

      <div class="links">
        <Social />
      </div>
    {/if}
  </div>
</footer>

<style>
  footer {
    background: var(--navy);
    color: var(--white);
    width: 100%;
    position: relative;
    z-index: 1000;
    position: fixed;
    bottom: 0px;
  }

  .collapse {
    position: fixed;
    bottom: 0px;
  }

  .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: var(--space-md);
    padding: var(--space-md);
    padding-bottom: calc(var(--space-md) + env(safe-area-inset-bottom));
  }
  .location {
    grid-area: 2 / 1 / 3 / 2;
  }
  .location2 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .links {
    grid-area: 2 / 2 / 3 / 3;
  }

  h2 {
    justify-self: start;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 400;
    margin: 0;
    font-size: var(--text-base);
    letter-spacing: 0.1rem;
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--border-radius);
    border: 1px solid var(--white);
    background: var(--navy);
    transition: background 500ms;
  }
  @media (hover: hover) {
    h2:hover {
      background: var(--primary);
    }
  }

  @media (min-width: 576px) {
    .inner {
      grid-template-columns: 1fr 1fr 1fr;
      gap: var(--space-lg);
    }
    h2 {
      grid-column: 1 / 3;
    }
    .location2 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .links {
      grid-area: 2 / 3 / 3 / 4;
    }
  }
</style>
