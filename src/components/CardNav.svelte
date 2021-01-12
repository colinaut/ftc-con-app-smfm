<script>
    import CardNavItem from "./CardNavItem.svelte";
    export let cards, activeId;
</script>

<style>
    .wrapper {
        position: sticky;
        top: 0px;
    }

    nav {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        gap: 4px;
        margin: 0 auto;
        background: var(--white);
        z-index: var(--z-nav);
        border-top: 4px solid var(--white);
        border-bottom: 4px solid var(--white);
    }

    @media (min-width: 576px) {
        nav {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media (min-width: 768px) {
        nav {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
    }
</style>

<!-- TODO: make a grid for mobile and for desktop -->

<div class="wrapper">
    <nav class="max-hero-width">
        {#each cards as navItem}
            <CardNavItem {navItem} {activeId} on:click />
        {/each}
    </nav>
</div>
