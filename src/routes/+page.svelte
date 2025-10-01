<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		// Smooth scroll behavior for anchor links
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const target = document.querySelector(this.getAttribute('href'));
				if (target) {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			});
		});
	});
</script>

<main class="min-h-screen overflow-x-hidden">
	<Header />
	<ScrollProgress />
	<Hero />
	<About />
	<TechStack />
	<Projects />
	<Experience />
	<Contact />
	<Footer />
</main>
