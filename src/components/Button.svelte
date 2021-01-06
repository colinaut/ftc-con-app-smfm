<script>
    export let url, text;
    function click() {
        window.location.href = url;
    }
</script>

<style>
    button {
        margin: var(--space-md) 0;
    }
</style>

<button on:click={click}>{text}</button>
