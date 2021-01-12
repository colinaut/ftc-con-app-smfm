<script>
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
        dispatch("click", {
            id: id,
        });
    };
</script>

<style>
    div {
        display: grid;
        grid-template-areas: "block";
        text-align: center;
        cursor: pointer;
        background: var(--navy);
    }

    .active img {
        filter: grayscale(0);
        opacity: 1;
    }

    h2 {
        font-size: var(--text-base);
        grid-area: block;
        padding: var(--space-md);
        line-height: var(--leading-tight);
        height: 50%;
        min-height: 4rem;
        align-self: end;
        margin: 0;
        z-index: calc(var(--z-nav) + 2);
        background: rgba(255, 255, 255, 0.7);
        text-shadow: 0 1px 5px rgba(255, 255, 255, 0.6);
    }

    img {
        grid-area: block;
        width: 100%;
        height: 5rem;
        position: relative;
        filter: none;
        transition: filter 400ms, opacity 400ms;
        z-index: calc(var(--z-nav) + 1);
        object-fit: cover;
        filter: grayscale(0.8);
        opacity: 0.3;
    }

    @media (hover: hover) {
        div:hover img {
            filter: grayscale(0);
            opacity: 1;
        }
    }

    @media (min-width: 576px) {
        img {
            height: 8rem;
        }
        h2 {
            font-size: var(--text-md);
        }
    }

    @media (min-width: 768px) {
        img {
            height: 12rem;
        }
        h2 {
            font-size: var(--text-base);
        }
    }
</style>

<!-- TODO: Work on sizes using real images and responsive for mobile vs desktop -->

<div class:active={id === activeId} on:click={click}>
    <h2 class="center-content">{title}</h2>
    <img src={imgSrc} alt={imgAlt} />
</div>
