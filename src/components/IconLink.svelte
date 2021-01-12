<script>
    import Icon from "svelte-awesome/components/Icon.svelte";
    import { faFlag } from "@fortawesome/free-solid-svg-icons";

    export let icon = faFlag;
    export let link;
    export let color = "--var(--white)";
    export let fontSize = "--var(--text-base)";
</script>

<style>
    a {
        color: var(--link-color);
        font-size: var(--link-font-size);
        display: flex;
        align-items: center;
        cursor: pointer;
    }
</style>

<a href={link} style={`--link-color:${color}; --link-font-size:${fontSize};`}>
    <span class="icon"><Icon
            data={icon}
            style={`color: #fff; margin-right: var(--space-md); position: relative; top: .1rem;`}
            scale="1.5" /></span><span class="text"><slot /></span></a>
