<script>
  import { slide, fly } from "svelte/transition";
  import Header from "./components/Header.svelte";
  import Hydrops from "./content/Hydrops.md";
  import HeartAndBrain from "./content/HeartAndBrain.md";
  import IUERT from "./content/IUERTtrial.md";
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
      title: "Hydrops Fetalis",
      imgSrc: "images/hydrops-image.jpg",
      btnurl: "https://fetus.ucsf.edu/hydrops-fetalis",
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
      component: IUERT,
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
  let CurrentSection = Home;

  const navClick = (e) => {
    const id = e.detail.id;
    const navItem = research.find((item) => item.id == id);
    changeSection(navItem.component, id);
  };

  const changeSection = (Section, id = false) => {
    console.log("change section", id);
    CurrentSection = Section;
    console.log(
      "🚀 ~ file: App.svelte ~ line 87 ~ changeSection ~ CurrentSection",
      CurrentSection
    );
    // this shows active nav item unless false
    activeId = id;
  };
  const sectionLinkClick = (e) => {
    console.log(e.detail);
    changeSection(e.detail.Section);
    if (e.detail.id) activeId = e.detail.id;
  };
</script>

<Header on:click={() => changeSection(Home)} />
{#if CurrentSection === Home}
  <!-- Show hero on home section only -->
  <div class="transition-wrapper" transition:slide={{ duration: 1000 }}>
    <a href="/" on:click|preventDefault={() => changeSection(IUERT)}>
      <Hero
        title="In Utero Enzyme Replacement Therapy"
        src="/images/FTC-exome-lrg.jpg"
        alt="Close-up of lab equipment"
      />
    </a>
  </div>
{/if}

<div class="content">
  <CardNav cards={research} {activeId} on:click={navClick} />
  <Main>
    <Section>
      <!-- TODO get Fly working -->
      <div
        class="section"
        in:fly={{ duration: 400, delay: 1400, x: -1000 }}
        out:fly={{ duration: 400, delay: 1000, x: 1000 }}
      >
        <svelte:component
          this={CurrentSection}
          on:sectionLinkClick={sectionLinkClick}
        />
      </div>
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
    padding-bottom: var(--space-xl);
  }
  .transition-wrapper {
    position: relative;
    overflow: hidden;
  }
</style>
