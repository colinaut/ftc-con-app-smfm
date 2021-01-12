<script>
    import CardNavItem from "./CardNavItem.svelte";
    export let cards, activeId;
</script>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        gap: var(--space-sm);
        margin: 0 auto;
        position: sticky;
        top: 0px;
        background: var(--white);
        z-index: var(--z-nav);
    }
</style>

<nav class="max-hero-width">
    {#each cards as navItem}
        <CardNavItem {navItem} {activeId} on:click />
    {/each}
</nav>
