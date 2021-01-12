<script>
    export let src, alt, title, subtitle;
</script>

<style>
    img {
        object-fit: cover;
        object-position: 50% 50%;
    }

    .hero-wrapper {
        position: relative;
        overflow: hidden;
    }

    .hero-wrapper:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: calc((8 / 16) * 100%);
    }

    .hero-wrapper > .hero {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .hero-content {
        background-image: linear-gradient(
            to top,
            rgba(5, 32, 73, 1),
            rgba(5, 32, 73, 0.4) 50%,
            transparent 75%,
            transparent
        );
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: var(--space-md);
        color: #fff;
    }
    .hero-title {
        margin: 0 20% var(--space-sm) 0;
        font-weight: bold;
        font-size: var(--text-md);
        line-height: var(--leading-tight);
        text-shadow: 0 1px 5px rgba(5, 32, 73, 0.5);
    }
    .hero-subtitle {
        font-size: var(--text-sm);
        line-height: 20px;
        letter-spacing: 1.6px;
        font-weight: 400;
    }
    @media (min-width: 576px) {
        .hero-title {
            font-size: var(--text-xxl);
            margin-bottom: var(--space-md);
        }
        .hero-subtitle {
            font-size: var(--text-md);
        }
        .hero-content {
            padding: var(--space-lg);
        }
    }
    @media (min-width: 768px) {
        .hero-title {
            font-size: var(--text-xxxxl);
            margin-bottom: var(--space-lg);
        }
        .hero-subtitle {
            font-size: var(--text-lg);
        }
        .hero-content {
            padding: var(--space-xl);
        }
    }
</style>

<section>
    <div class="max-hero-width hero-wrapper">
        <div class="hero">
            <div class="hero-image"><img {src} {alt} /></div>
            <div class="hero-content">
                <h1 class="hero-title">{title}</h1>
                {#if subtitle}
                    <div class="hero-subtitle">{subtitle}</div>
                {/if}
            </div>
        </div>
    </div>
</section>
