<script>
  export let player = "youtube",
    videoId,
    width = "100%",
    height = "100%",
    frameborder = "0",
    wmode = "transparent",
    allow =
      "autoplay; fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    title = "vimeo";

  let src;

  switch (player) {
    case "vimeo":
      src = `https://player.vimeo.com/video/${videoId}?title=0&byline=0`;
      allow = `autoplay; fullscreen;`;
      break;
    case "youtube":
      src = `https://www.youtube.com/embed/${videoId}`;
      allow = `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`;
  }
</script>

{#if videoId}
  <div>
    <iframe
      {title}
      {src}
      {width}
      {height}
      {wmode}
      {frameborder}
      {allow}
      allowfullscreen
    />
  </div>
{/if}

<style>
  div {
    position: relative;
    padding-bottom: 54%;
    height: 0;
    overflow: hidden;
    z-index: 0;
    margin: var(--space) 0;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
</style>
