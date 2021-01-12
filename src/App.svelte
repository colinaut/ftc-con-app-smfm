<script>
	import { slide } from "svelte/transition";
	import Header from "./components/Header.svelte";
	import Hydrops from "./content/Hydrops.md";
	import HeartAndBrain from "./content/HeartAndBrain.md";
	import IUERTtrial from "./content/IUERTtrial.md";
	import Exome from "./content/Exome.md";
	import Section from "./components/Section.svelte";
	import Main from "./components/Main.svelte";
	import Footer from "./components/Footer.svelte";
	import Hero from "./components/Hero.svelte";
	import Button from "./components/Button.svelte";
	import CardNav from "./components/CardNav.svelte";

	let research = [
		{
			id: 1,
			component: Hydrops,
			title: "Fetal Hydrops",
			btnurl: "https://fetus.ucsf.edu/hydrops-study",
			btntext: "Learn More",
			active: false,
		},
		{
			id: 2,
			component: Exome,
			title: "Fetal Exome",
			btnurl: "https://fetus.ucsf.edu/research/fetal-exome-sequencing",
			btntext: "Learn More",
			active: false,
		},
		{
			id: 3,
			component: IUERTtrial,
			title: "In Utero Enzyme Replacement Therapy",
			btnurl: "https://fetus.ucsf.edu/utero-enzyme-replacement-therapy",
			btntext: "Learn More",
			active: false,
		},
		{
			id: 4,
			component: HeartAndBrain,
			title: "Fetal Heart & Brain",
			btnurl: "https://fetus.ucsf.edu/research/fetal-heart-brain-study",
			btntext: "Learn More",
			active: false,
		},
	];

	let activeId = false;
	let hero = true;
	let footerCollapse = false;

	$: activeResearch = research.filter(
		(section) => section.id === activeId
	)[0];

	console.log(activeResearch);

	const logoClick = (e) => {
		hero = true;
		footerCollapse = false;
		activeId = false;
	};

	const navClick = (e) => {
		const id = e.detail.id;
		if (activeId !== false && activeId === id) {
			hero = true;
			footerCollapse = false;
			activeId = false;
		} else {
			hero = false;
			footerCollapse = true;
			activeId = e.detail.id;
			research = research.map((section) => {
				if (section.id === activeId) {
					return { ...section, active: true };
				}
				return { ...section, active: false };
			});
		}
	};
	// TODO: make navCLick also scroll back to top
</script>

<style>
	.content,
	.section {
		background: var(--white);
	}
	.content {
		padding-bottom: 9rem;
	}
</style>

<Header title="SMFM 41st Annual Pregnancy Meeting" on:click={logoClick} />
{#if hero}
	<div in:slide={{ duration: 2000 }} out:slide={{ duration: 2000 }}>
		<Hero
			title="Next Generation Fetal Diagnosis & Treatment"
			subtitle="Lorem ipsum dolor sit amet consectetur"
			src="https://fetus.ucsf.edu/sites/fetus.ucsf.edu/files/wysiwyg/anita-and-patient-ultrasound.jpg"
			alt="Dr. Anita Moon Grady and patient" />
	</div>
{/if}
<div class="content">
	<CardNav cards={research} {activeId} on:click={navClick} />
	{#if activeResearch}
		<div
			class="section"
			in:slide={{ duration: 2000 }}
			out:slide={{ duration: 2000 }}>
			<Main>
				<Section>
					<svelte:component this={activeResearch.component} />
					<Button
						on:click={(e) => console.log(e.detail.text)}
						url={activeResearch.btnurl}>
						{activeResearch.btntext}
					</Button>
				</Section>
			</Main>
		</div>
	{/if}
</div>
<Footer />
