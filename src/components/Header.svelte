<script>
    import Logo from "./Logo.svelte";
    export let title;
</script>

<style>
    header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-lg);
        padding: 0 var(--space-md);
    }
    h1 {
        justify-self: end;
        align-self: center;
        font-weight: 400;
        font-size: var(--text-lg);
        color: var(--darkest-gray);
    }
    .branding {
        align-self: center;
        padding: var(--space-lg) 0;
    }
    @media (max-width: 576px) {
        h1 {
            font-size: var(--text-base);
        }
    }
</style>

<header class="max-hero-width">
    <div class="branding">
        <Logo />
    </div>
    <h1>{title}</h1>
</header>
