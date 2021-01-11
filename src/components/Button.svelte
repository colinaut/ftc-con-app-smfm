<script>
    import { createEventDispatcher } from "svelte";

    export let speed = 600;
    let button,
        width,
        height,
        ripples = [];

    const dispatch = createEventDispatcher();

    function btnClick() {
        dispatch("click", {
            text: "Hello!",
        });
    }

    function createRipple(e) {
        if (ripples.length > 0) {
            const prev = ripples.length;
            setTimeout(() => {
                document.getElementById(prev).remove();
            }, speed);
        }

        const diameter = Math.max(width, height);
        const radius = diameter / 2;
        const left = `${e.clientX - (button.offsetLeft + radius)}px`;
        const top = `-${height / 2}px`; // TODO: get X axis working with mouse position. Low priority
        const id = ripples.length + 1;
        const newRipple = {
            id,
            diameter,
            radius,
            left,
            top,
        };
        ripples = [...ripples, newRipple];
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

    button {
        position: relative;
        overflow: hidden;
        transition: background 400ms;
    }
    button:not(:disabled):active {
        background-color: #6200ee;
    }
    button:focus {
        background-color: #883df2;
    }
    span {
        position: absolute;
        border-radius: 50%;
        transform: scale(0.7);
        animation-name: ripple;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        background-color: rgba(255, 255, 255, 0.7);
        opacity: 0.5;
        filter: blur(2px);
    }
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
            filter: blur(5px);
        }
    }
</style>

<button
    bind:this={button}
    bind:clientWidth={width}
    bind:clientHeight={height}
    on:click={btnClick}
    on:click={createRipple}>
    {#each ripples as { diameter, radius, left, top, id }, index}
        <span
            {id}
            style="width: {diameter}px;height: {diameter}px;left: {left}; top: {top};animation-duration: {speed}ms" />
    {/each}
    <slot />
</button>
