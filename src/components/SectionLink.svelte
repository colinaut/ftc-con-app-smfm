<script>
  import * as animateScroll from "svelte-scrollto";
  import { createEventDispatcher } from "svelte";

  export let Section;

  const dispatch = createEventDispatcher();

  const click = () => {
    animateScroll.scrollToTop();
    dispatch("sectionLinkClick", {
      Section: Section,
    });
  };
</script>

<button on:click={click}><slot /></button>
