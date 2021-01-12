<script>
    import { slide } from "svelte/transition";
    export let header,
        subhead,
        address,
        city,
        state,
        zip,
        phone,
        fax,
        email,
        collapse;
</script>

<style>
    address {
        font-size: var(--text-sm);
    }
    h2 {
        font-size: var(--text-base);
    }
    h2:first-child {
        margin-top: 0;
    }
    p {
        margin: var(--space-sm) 0;
    }
    .city-state-zip {
        display: block;
    }
    .subhead {
        display: block;
    }
</style>

<address class="h-card">
    <h2>
        {header}
        {#if subhead}<span class="subhead">{subhead}</span>{/if}
    </h2>
    {#if !collapse}
        <div in:slide={{ duration: 500 }} out:slide={{ duration: 500 }}>
            <p class="p-adr h-adr">
                <span class="icon"> <i class="fas fa-map-marker-alt" /> </span>
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
                <p class="p-tel">
                    <span class="icon">
                        <i class="fas fa-phone-square-alt" />
                    </span>
                    <span>{phone}</span>
                </p>
            {/if}
            {#if fax}
                <p class="p-tel-fax">
                    <span class="icon"> <i class="fas fa-fax" /> </span>
                    {fax}
                </p>
            {/if}
            {#if email}
                <p class="u-email">
                    <span class="icon"> <i class="fas fa-envelope" /> </span>
                    {email}
                </p>
            {/if}
        </div>
    {/if}
</address>
