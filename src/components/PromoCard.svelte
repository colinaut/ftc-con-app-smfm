<script>
  import * as animateScroll from "svelte-scrollto";
  import { createEventDispatcher } from "svelte";

  export let Section,
    imgSrc,
    imgAlt = "",
    buttonText = "Read More";

  const dispatch = createEventDispatcher();

  const click = () => {
    animateScroll.scrollToTop();
    dispatch("promoCardClick", {
      Section: Section,
    });
  };
</script>

<div class="card">
  <h3><slot name="title">Title</slot></h3>
  <div class="cardContent">
    {#if imgSrc}
      <div class="img-block"><img src={imgSrc} alt={imgAlt} /></div>
    {/if}
    <div class="description">
      <p><slot name="description">Description</slot></p>
      <button on:click={click}>{buttonText}</button>
    </div>
  </div>
</div>

<style>
  .card {
    background: var(--lighter-gray);
    margin: var(--space-lg) 0;
  }

  .cardContent {
    display: flex;
  }

  .img-block {
    max-width: 33%;
  }

  .img-block img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    background: var(--light-navy);
    color: white;
    padding: var(--space) var(--space-md);
    margin: 0;
    line-height: var(--leading-tight);
  }

  .description {
    padding: var(--space) var(--space-md);
  }

  p {
    margin: 0 0 var(--space-sm);
  }
</style>
