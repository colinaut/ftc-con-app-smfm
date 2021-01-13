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

<style>
    div {
        flex: 1 0 100%;
        display: grid;
        grid-template-areas: "block";
        text-align: center;
        cursor: pointer;
        background: var(--navy);
        border-bottom: 4px solid var(--white);
    }

    div:last-child {
        border-right: 0;
    }

    h2 {
        font-size: var(--text-sm);
        grid-area: block;
        padding: var(--space-md);
        line-height: var(--leading-tight);
        height: 2rem;
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
        height: 2rem;
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

    .active h2 {
        background: var(--navy);
        color: var(--white);
        text-shadow: 0 1px 5px var(--navy);
    }

    @media (hover: hover) {
        div:hover img {
            filter: grayscale(0);
            opacity: 1;
        }
    }

    @media (min-width: 576px) {
        div {
            flex-basis: 33.333%;
        }
        img {
            height: 6rem;
        }
        h2 {
            height: 3.5rem;
            font-size: var(--text-md);
        }
    }

    @media (min-width: 768px) {
        div {
            flex-basis: 20%;
        }
        img {
            height: 12rem;
        }
        h2 {
            height: 5.5rem;
            font-size: var(--text-base);
        }
    }
</style>

<!-- TODO: Work on sizes using real images and responsive for mobile vs desktop -->

<div class="nav-btn" class:active={id === activeId} on:click={click}>
    <h2 class="center-content">{title}</h2>
    <img src={imgSrc} alt={imgAlt} />
</div>
