<script>
    export let src, alt, title, subtitle;
</script>

<style>
    section {
        background: var(--lighter-gray);
    }

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

    .hero {
        --hero-p: var(--space-xl);
        --hero-title: var(--text-hero);
        --hero-sub: var(--text-md);
    }

    .hero-content {
        background-image: linear-gradient(
            to top,
            #052049,
            transparent 50%,
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
        padding: var(--hero-p);
        color: #fff;
    }
    .hero-title {
        margin: 0 20% 1rem 0;
        font-weight: bold;
        font-size: var(--hero-title);
        line-height: var(--leading-tight);
    }
    .hero-subtitle {
        font-size: var(--hero-sub);
        line-height: 20px;
        letter-spacing: 1.6px;
        font-weight: 400;
    }
    @media (max-width: 768px) {
        .hero {
            --hero-p: var(--space-lg);
            --hero-title: var(--text-xxxl);
            --hero-sub: var(--text-base);
        }
    }
    @media (max-width: 576px) {
        .hero {
            --hero-p: var(--space-md);
            --hero-title: var(--text-xl);
            --hero-sub: var(--text-base);
        }
    }
</style>

<section>
    <div class="max-hero-width hero-wrapper">
        <div class="hero">
            <div class="hero-image"><img {src} {alt} /></div>
            <div class="hero-content">
                <h1 class="hero-title">{title}</h1>
                <div class="hero-subtitle">{subtitle}</div>
            </div>
        </div>
    </div>
</section>
