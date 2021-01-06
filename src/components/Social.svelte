<script>
    // import Fa from "svelte-fa";
    import Icon from "svelte-awesome/components/Icon.svelte";
    import { faTwitter } from "@fortawesome/free-brands-svg-icons";
    import { faYoutube } from "@fortawesome/free-brands-svg-icons";
    export let socials = [];

    const iconStyle = `color: #fff; margin-right: var(--space-sm); position: relative; top: .1rem;`;
</script>

<style>
    div {
        font-size: var(--text-sm);
    }
    a {
        color: var(--white);
        display: flex;
        align-items: center;
    }
    h2 {
        font-size: var(--text-base);
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: var(--space-sm) 0;
    }
</style>

<div>
    <h2>Follow UCSF Fetal Treatment Center</h2>
    <ul>
        {#each socials as social}
            <li>
                <a href={social.url} title={social.type}>
                    <span class="icon">
                        {#if social.type === 'twitter'}
                            <Icon
                                data={faTwitter}
                                style={iconStyle}
                                scale="1.5" />
                        {:else if social.type === 'youtube'}
                            <Icon
                                data={faYoutube}
                                style={iconStyle}
                                scale="1.5" />
                        {/if}
                    </span>
                    <span class="text">{social.text}</span>
                </a>
            </li>
        {/each}
    </ul>
</div>
