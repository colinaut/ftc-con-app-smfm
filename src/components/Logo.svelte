<script>
  const alt = "Fetal Treatment Center";
  export let format = "normal";

  $: src = format === "stocky" ? "FTC-logo-stocky.svg" : "FTC-logo.svg";
</script>

<div class="logo"><img {src} {alt} /></div>

<style>
  img {
    width: 100%;
    max-height: 90px;
    max-height: clamp(60px, 9vh, 120px);
    object-fit: contain;
    object-position: left;
  }
</style>
