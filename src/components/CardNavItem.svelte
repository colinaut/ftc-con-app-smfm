<script>
  import * as animateScroll from "svelte-scrollto";
  export let navItem = {};
  export let activeId;
  const {
    title,
    id,
    imgSrc = "https://placeimg.com/640/480/nature",
    imgAlt = "",
  } = navItem;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const click = () => {
    animateScroll.scrollToTop();
    dispatch("click", {
      id: id,
    });
  };
</script>

<div class="nav-btn" class:active={id === activeId} on:click={click}>
  <span class="center-content">{title}</span>
  <img src={imgSrc} alt={imgAlt} />
</div>

<style>
  div {
    --h: 1.8rem;
    flex: 1 0 0;
    white-space: nowrap;
    display: grid;
    grid-template-areas: "block";
    text-align: center;
    cursor: pointer;
    background: var(--navy);
    border-bottom: 2px solid var(--white);
    border-right: 1px solid var(--white);
    border-left: 1px solid var(--white);
  }

  span {
    font-size: var(--text-sm);
    font-weight: 700;
    grid-area: block;
    padding: var(--space-sm);
    line-height: var(--leading-tight);
    height: var(--h);
    align-self: end;
    margin: 0;
    z-index: calc(var(--z-nav) + 2);
    background: rgba(255, 255, 255, 0.7);
    text-shadow: 0 1px 5px rgba(255, 255, 255, 0.4);
    transition: all 400ms;
  }

  img {
    grid-area: block;
    width: 100%;
    height: var(--h);
    position: relative;
    filter: none;
    transition: filter 400ms, opacity 400ms;
    z-index: calc(var(--z-nav) + 1);
    object-fit: cover;
    filter: grayscale(0.8);
    opacity: 0.3;
  }

  .active img {
    filter: grayscale(0);
    opacity: 1;
  }

  .active span {
    background: var(--navy);
    color: var(--white);
    text-shadow: 0 1px 5px var(--navy);
  }

  @media (hover: hover) {
    div:hover img {
      filter: grayscale(0);
      opacity: 1;
    }
    div:hover span,
    .active:hover span {
      background: var(--primary);
      color: var(--white);
      text-shadow: 0 1px 5px var(--primary);
    }
  }

  @media (min-width: 576px) {
    div {
      flex: 1 0 33.333%;
      white-space: normal;
      border-right: none;
      border-left: none;
      --h: 6rem;
    }
    span {
      height: calc(var(--h) / 2);
      font-size: var(--text-base);
    }
  }

  @media (min-width: 768px) {
    div {
      flex: 1 0 15%;
      --h: 10rem;
    }
    span {
      font-size: var(--text-sm);
    }
  }
</style>
