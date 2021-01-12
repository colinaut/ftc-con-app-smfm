<script>
    import IconLink from "./IconLink.svelte";

    import { faTwitter } from "@fortawesome/free-brands-svg-icons";
    import { faYoutube } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
</script>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: 0 0 var(--space-md) 0;
    }
</style>

<!-- TODO: Add ripple effect to social links -->

<div>
    <ul>
        <li>
            <IconLink icon={faEnvelope}>fetus@ucsf.edu</IconLink>
        </li>
        <li>
            <IconLink icon={faTwitter} link="https://twitter.com/UCSFfetal">
                @UCSFfetal
            </IconLink>
        </li>
        <li>
            <IconLink
                icon={faYoutube}
                link="https://www.youtube.com/user/FetalTreatment/videos">
                FTC Youtube
            </IconLink>
        </li>
    </ul>
</div>
