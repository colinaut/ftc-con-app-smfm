<script>
    import CardNavItem from "./CardNavItem.svelte";
    export let cards, activeId;
</script>

<style>
    .wrapper {
        /* background: var(--lighter-gray); */
        position: sticky;
        top: 0px;
    }
    nav {
        display: flex;
        justify-content: space-between;
        gap: 4px;
        margin: 0 auto;
        background: var(--white);
        z-index: var(--z-nav);
        border-top: 4px solid var(--white);
        border-bottom: 4px solid var(--white);
    }
</style>

<div class="wrapper">
    <nav class="max-hero-width">
        {#each cards as navItem}
            <CardNavItem {navItem} {activeId} on:click />
        {/each}
    </nav>
</div>
