<script>
  import { slide, fly } from "svelte/transition";
  import Header from "./components/Header.svelte";
  import Hydrops from "./content/Hydrops.md";
  import HeartAndBrain from "./content/HeartAndBrain.md";
  import IUERTtrial from "./content/IUERTtrial.md";
  import ATM from "./content/ATM.md";
  import Exome from "./content/Exome.md";
  import More from "./content/More.md";
  import Section from "./components/Section.svelte";
  import Main from "./components/Main.svelte";
  import Footer from "./components/Footer.svelte";
  import Hero from "./components/Hero.svelte";
  import Home from "./content/Home.md";
  import CardNav from "./components/CardNav.svelte";

  let research = [
    {
      id: 1,
      component: Hydrops,
      title: "Fetal Hydrops",
      imgSrc: "images/hydrops-image.jpg",
      btnurl: "https://fetus.ucsf.edu/hydrops-study",
      btntext: "Learn More",
      active: false,
    },
    {
      id: 2,
      component: Exome,
      title: "Fetal Exome Sequencing",
      imgSrc: "images/FTC-exome.jpg",
      btnurl: "https://fetus.ucsf.edu/research/fetal-exome-sequencing",
      btntext: "Learn More",
      active: false,
    },
    {
      id: 3,
      component: ATM,
      title: "Intrauterine Therapy for ATM",
      imgSrc: "images/atm.png",
      btnurl:
        "https://fetus.ucsf.edu/research/intrauterine-therapy-alpha-thalassemia-major",
      btntext: "Learn More",
      active: false,
    },
    {
      id: 4,
      component: HeartAndBrain,
      title: "Fetal Heart & Brain",
      imgSrc: "images/brain.jpg",
      btnurl: "https://fetus.ucsf.edu/research/fetal-heart-brain-study",
      btntext: "Learn More",
      active: false,
    },
    {
      id: 5,
      component: IUERTtrial,
      title: "In Utero Enzyme Replacement Therapy",
      imgSrc: "images/lab.jpg",
      btnurl: "https://fetus.ucsf.edu/utero-enzyme-replacement-therapy",
      btntext: "Learn More",
      active: false,
    },
    {
      id: 6,
      component: More,
      title: "More About Our Research",
      imgSrc: "images/more.jpg",
      btnurl: "https://fetus.ucsf.edu/utero-enzyme-replacement-therapy",
      btntext: "Learn More",
      active: false,
    },
  ];

  let activeId = false;
  let hero = true;

  $: activeResearch = research.filter((section) => section.id === activeId)[0];

  const logoClick = (e) => {
    hero = true;
    activeId = false;
  };

  const navClick = (e) => {
    const id = e.detail.id;
    if (activeId !== false && activeId === id) {
      hero = true;
      activeId = false;
    } else {
      hero = false;
      activeId = e.detail.id;
      research = research.map((section) => {
        if (section.id === activeId) {
          return { ...section, active: true };
        }
        return { ...section, active: false };
      });
    }
  };
</script>

<!-- TODO: Move all image content to public folder -->
<!-- TODO: replace pdfs for ATM with new ones both here and on FTC site -->
<Header on:click={logoClick} />
{#if hero}
  <div class="transition-wrapper" transition:slide={{ duration: 1000 }}>
    <Hero
      title="Leaders in genomics and precision-based in utero diagnosis and care"
      src="/images/hero.jpg"
      alt="Dr. Anita Moon Grady and patient"
    />
  </div>
{/if}

<div class="content">
  <CardNav cards={research} {activeId} on:click={navClick} />
  <Main>
    <Section>
      {#if activeResearch}
        <div
          class="section"
          in:fly={{ duration: 400, delay: 1400, x: -1000 }}
          out:fly={{ duration: 400, delay: 1000, x: 1000 }}
        >
          <svelte:component this={activeResearch.component} />
        </div>
      {:else}
        <div
          class="section"
          in:fly={{ duration: 400, delay: 1400, x: -1000 }}
          out:fly={{ duration: 400, delay: 1000, x: 1000 }}
        >
          <Home />
        </div>
      {/if}
    </Section>
  </Main>
</div>
<Footer />

<style>
  .content,
  .section {
    background: var(--white);
  }
  .content {
    padding-bottom: var(--space-xxl);
  }
  .transition-wrapper {
    position: relative;
    overflow: hidden;
  }
</style>
