<script>
	import Header from "./components/Header.svelte";
	import Hydrops from "./content/Hydrops.svx";
	import HeartAndBrain from "./content/HeartAndBrain.svx";
	import IUERTtrial from "./content/IUERTtrial.svx";
	import Exome from "./content/Exome.md";
	import Section from "./components/Section.svelte";
	import Main from "./components/Main.svelte";
	import Footer from "./components/Footer.svelte";
	import Hero from "./components/Hero.svelte";
	import Button from "./components/Button.svelte";

	const research = [
		{
			component: Hydrops,
			btnurl: "https://fetus.ucsf.edu/hydrops-study",
			btntext: "Learn More",
		},
		{
			component: Exome,
			btnurl: "https://fetus.ucsf.edu/research/fetal-exome-sequencing",
			btntext: "Learn More",
		},
		{
			component: IUERTtrial,
			btnurl: "https://fetus.ucsf.edu/utero-enzyme-replacement-therapy",
			btntext: "Learn More",
		},
		{
			component: HeartAndBrain,
			btnurl: "https://fetus.ucsf.edu/research/fetal-heart-brain-study",
			btntext: "Learn More",
		},
	];
</script>

<Header title="SMFM 41st Annual Pregnancy Meeting" />
<Hero
	title="Next Generation Fetal Diagnosis & Treatment"
	subtitle="Lorem ipsum dolor sit amet consectetur"
	src="https://fetus.ucsf.edu/sites/fetus.ucsf.edu/files/wysiwyg/anita-and-patient-ultrasound.jpg"
	alt="Dr. Anita Moon Grady and patient" />

<Main>
	{#each research as section}
		<Section>
			<svelte:component this={section.component} />
			<Button url={section.btnurl} text={section.btntext} />
		</Section>
	{/each}
</Main>
<Footer />
