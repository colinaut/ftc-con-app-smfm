<script>
    import Icon from "svelte-awesome/components/Icon.svelte";
    import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
    import { faFax } from "@fortawesome/free-solid-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

    export let header,
        subhead,
        address,
        city,
        state,
        zip,
        phone,
        phone2,
        fax,
        email;

    const iconStyle = `position: relative; top: .15rem;`;
</script>

<style>
    address {
        font-size: var(--text-sm);
    }
    h2 {
        font-size: var(--text-sm);
        margin-bottom: var(--space-xs);
    }
    p {
        margin: var(--space-xs) 0;
    }
    .subhead {
        display: inline-block;
    }
    .city-state-zip {
        display: block;
    }
    .p-locality::after {
        content: ",";
    }
    .icon {
        width: 1.4rem;
        display: inline-block;
    }
    .phone1 {
        margin-bottom: 0;
    }
    .phone2 {
        margin-top: 0;
    }

    @media (min-width: 576px) {
        h2 {
            font-size: var(--text-base);
            margin-bottom: var(--space-sm);
        }

        p {
            margin: var(--space-sm) 0;
        }
        .icon {
            width: 1.6rem;
        }
    }
</style>

<address class="h-card">
    <h2>
        {header}
        {#if subhead}<span class="subhead">{subhead}</span>{/if}
    </h2>

    <div>
        <p class="p-adr h-adr">
            <span class="p-street-address">{address}</span>
            {#if city}
                <span class="city-state-zip">
                    <span class="p-locality">{city} </span>
                    {#if state}
                        <span class="p-region">{state}</span>
                        <span class="p-postal-code">{zip}</span>
                    {/if}
                </span>
            {/if}
        </p>
        {#if phone}
            <p class="p-tel phone1">
                <span class="icon">
                    <Icon data={faPhoneAlt} style={iconStyle} />
                </span>{phone}
            </p>
            {#if phone2}
                <p class="p-tel phone2"><span class="icon" />{phone2}</p>
            {/if}
        {/if}
        {#if fax}
            <p class="p-tel-fax">
                <span class="icon">
                    <Icon data={faFax} style={iconStyle} />
                </span>{fax}
            </p>
        {/if}
        {#if email}
            <p class="u-email">
                <span class="icon">
                    <Icon data={faEnvelope} style={iconStyle} />
                </span>{email}
            </p>
        {/if}
    </div>
</address>
