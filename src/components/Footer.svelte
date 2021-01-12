<script>
    import Social from "./Social.svelte";

    import Address from "./Address.svelte";

    const socials = [
        {
            type: "twitter",
            url: "https://twitter.com/UCSFfetal",
            text: "@UCSFfetal",
        },
        {
            type: "youtube",
            url: "https://www.youtube.com/user/FetalTreatment/videos",
            text: "Youtube",
        },
    ];

    export let collapse = false;

    // TODO: create event that turns on/off collapse state
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
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: var(--space-sm);
        padding: var(--space-md);
    }
    @media (min-width: 576px) {
        .inner {
            flex-direction: row;
            gap: var(--space-lg);
            padding: var(--space-lg) var(--space-xl);
        }
    }
</style>

<footer class:collapse>
    <div class="max-hero-width inner">
        <Address
            header="UCSF Fetal Treatment Center"
            subhead="San Francisco"
            address="1855 4th Street, 2nd Floor, Room A-2432"
            city="San Francisco"
            state="CA"
            zip="94158-2549"
            phone="1-800-RX-FETUS (1-800-793-3887)"
            fax="415-502-0660"
            {collapse} />
        <Address
            header="UCSF Fetal Treatment Center"
            subhead="Oakland"
            address="744 52nd Street, 3rd Floor"
            city="Oakland"
            state="CA"
            zip="94609"
            phone="(510) 428-3156; opt #1"
            fax="415-502-0660"
            {collapse} />
        <Social {socials} {collapse} />
    </div>
</footer>
