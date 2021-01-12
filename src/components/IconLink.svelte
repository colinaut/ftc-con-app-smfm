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
        --icon-margin: var(--space-sm);
    }
    @media (min-width: 576px) {
        a {
            --icon-margin: var(--space-md);
        }
    }
</style>

<a href={link} style={`--link-color:${color}; --link-font-size:${fontSize};`}>
    <Icon
        data={icon}
        style={`color: #fff; margin-right: var(--icon-margin);`}
        scale="1.5" />
    <slot /></a>
