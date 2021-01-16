<script>
  const alt = "Fetal Treatment Center";
  export let format = "normal";

  $: src = format === "stocky" ? "FTC-logo-stocky.svg" : "FTC-logo.svg";
</script>

<div class="logo"><img {src} {alt} /></div>

<style>
  img {
    width: 100%;
    max-width: 30ch;
    max-height: 10vh;
  }
</style>
