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
</script>

<style>
    footer {
        background: var(--navy);
        color: var(--white);
    }
    .inner {
        display: flex;
        justify-content: space-around;
        gap: var(--space-xl);
        padding: var(--space-xl) var(--space-md);
    }
    @media (max-width: 576px) {
        .inner {
            flex-direction: column;
            gap: var(--space-sm);
            padding: var(--space-md) var(--space-md);
        }
    }
</style>

<footer>
    <div class="max-hero-width inner">
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
        <Social {socials} />
    </div>
</footer>
