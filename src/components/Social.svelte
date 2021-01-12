<script>
    // import Fa from "svelte-fa";
    import Icon from "svelte-awesome/components/Icon.svelte";
    import { faTwitter } from "@fortawesome/free-brands-svg-icons";
    import { faYoutube } from "@fortawesome/free-brands-svg-icons";
    import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
    export let socials = [];
    export let collapse = false;
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

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: 0 0 var(--space-md) 0;
    }
</style>

<div>
    <ul>
        <li>
            <a href="https://fetus.ucsf.edu">
                <span class="icon"><Icon
                        data={faClinicMedical}
                        style={iconStyle}
                        scale="1.5" /></span><span
                    class="text">fetus.ucsf.edu</span></a>
        </li>
        {#if !collapse}
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
        {/if}
    </ul>
</div>
