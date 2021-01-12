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
        flex: 1 1 0;
        display: grid;
        grid-template-areas: "block";
        text-align: center;
        cursor: pointer;
    }
    .active img {
        filter: grayscale(1) contrast(0.5) brightness(2);
    }
    h2 {
        font-size: var(--text-base);
        grid-area: block;
        padding: var(--space-md);
        height: 30%;
        align-self: end;
        position: relative;
        z-index: calc(var(--z-nav) + 2);
        background: rgba(255, 255, 255, 0.7);
        text-shadow: 0 1px 5px rgba(255, 255, 255, 0.5);
    }
    img {
        grid-area: block;
        width: 100%;
        position: relative;
        filter: none;
        transition: filter 400ms;
        z-index: calc(var(--z-nav) + 1);
    }
</style>

<!-- TODO: Work on sizes using real images and responsive for mobile vs desktop -->

<div class:active={id === activeId} on:click={click}>
    <h2 class="center-content">{title}</h2>
    <img src={imgSrc} alt={imgAlt} />
</div>
