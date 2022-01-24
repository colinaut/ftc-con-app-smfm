<script>
  export let imgSrc, link;
</script>

<div>
  <a href={link}><img src={imgSrc} alt="QRCode" /></a>
</div>

<style>
  div {
    max-width: 200px;
    margin: var(--space-md) 0;
  }
</style>
