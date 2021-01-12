<script>
    import Social from "./Social.svelte";
    import IconLink from "./IconLink.svelte";

    import { faClinicMedical } from "@fortawesome/free-solid-svg-icons";
    import Address from "./Address.svelte";
    import Button from "./Button.svelte";

    let collapsed = true;

    $: collapserBtnText = collapsed ? "Contact Us" : "Close Footer";

    const toggleFooter = () => {
        collapsed = !collapsed;
    };

    /* TODO: Refactor this so it is a seperate thing than the other nav.
     * Collapsed this just shows Contact Us on one side and the website link on the other side
     * Both are subtle buttons with ripple with the same color as the bg and a white border on hover/active.
     * When uncollpased it opens to reveal all the rest.
     */
    // TODO: make grid for mobile and for desktop
</script>

<style>
    footer {
        background: var(--navy);
        color: var(--white);
        width: 100%;
        position: relative;
        z-index: 1000;
        position: fixed;
        bottom: 0px;
    }
    .collapse {
        position: fixed;
        bottom: 0px;
    }
    .inner {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "locations links";
        justify-content: space-between;
        flex-direction: column;
        gap: var(--space-sm);
        padding: var(--space-md);
    }

    h2 {
        justify-self: start;
        grid-column: 1 / 3;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 400;
        margin: 0;
        font-size: var(--text-base);
        letter-spacing: 0.1rem;
        padding: var(--space-xs) var(--space-sm);
        border-radius: var(--border-radius);
        border: 1px solid var(--white);
        background: var(--navy);
        transition: background 500ms;
    }
    @media (hover: hover) {
        h2:hover {
            background: var(--primary);
        }
    }

    @media (min-width: 576px) {
        .inner {
            flex-direction: row;
            gap: var(--space-lg);
            padding: var(--space-lg) var(--space-md);
        }
    }
</style>

<footer class:collapse={collapsed}>
    <div class="max-hero-width inner">
        <h2 on:click={toggleFooter}>{collapserBtnText}</h2>

        <IconLink icon={faClinicMedical}>fetus.ucsf.edu</IconLink>

        {#if !collapsed}
            <Address
                header="UCSF Fetal Treatment Center"
                subhead="San Francisco"
                address="1855 4th Street, 2nd Floor, Room A-2432"
                city="San Francisco"
                state="CA"
                zip="94158-2549"
                phone="1-800-RX-FETUS (1-800-793-3887)"
                fax="415-502-0660" />

            <Address
                header="UCSF Fetal Treatment Center"
                subhead="Oakland"
                address="744 52nd Street, 3rd Floor"
                city="Oakland"
                state="CA"
                zip="94609"
                phone="(510) 428-3156; opt #1"
                fax="415-502-0660" />
            <Social />
        {/if}
    </div>
</footer>
