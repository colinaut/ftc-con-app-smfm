<section>
  <slot />
</section>

<style>
  section {
    padding: var(--space-md) var(--space-md);
  }
  section:nth-child(n + 2) {
    border-top: 1px solid var(--gray);
  }
  @media (min-width: 576px) {
    section {
      padding: var(--space-lg) var(--space-md);
    }
  }
</style>
