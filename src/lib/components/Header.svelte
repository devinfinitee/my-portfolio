<script lang="ts">
	import { Search, Settings } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		// Set initial states
		gsap.set('header', { y: -40, opacity: 0 });
		gsap.set('.logo', { x: -20, opacity: 0 });
		gsap.set('.header-right', { x: 20, opacity: 0 });

		// Simple timeline
		const tl = gsap.timeline();

		// Header slide down
		tl.to('header', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out'
		});

		// Logo and right side elements slide in together
		tl.to('.logo', {
			x: 0,
			opacity: 1,
			duration: 0.5,
			ease: 'power3.out'
		}, 0.1);

		tl.to('.header-right', {
			x: 0,
			opacity: 1,
			duration: 0.5,
			ease: 'power3.out'
		}, 0.1);

		// Add hover animations
		const headerElements = document.querySelectorAll('.header-right button, .header-right span');
		headerElements.forEach((element) => {
			element.addEventListener('mouseenter', () => {
				gsap.to(element, {
					scale: 1.05,
					y: -2,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
			
			element.addEventListener('mouseleave', () => {
				gsap.to(element, {
					scale: 1,
					y: 0,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
		});

		// Logo hover animation
		const logo = document.querySelector('.logo');
		logo.addEventListener('mouseenter', () => {
			gsap.to(logo, {
				scale: 1.05,
				rotation: 1,
				duration: 0.2,
				ease: 'power2.out'
			});
		});
		
		logo.addEventListener('mouseleave', () => {
			gsap.to(logo, {
				scale: 1,
				rotation: 0,
				duration: 0.2,
				ease: 'power2.out'
			});
		});
	});
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
	<div class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<div class="logo text-2xl font-bold text-white">
				Infinite
			</div>

			<!-- Right side icons and tags -->
			<div class="header-right flex items-center space-x-4">
				<!-- Search Icon -->

				<!-- Technology Tags -->
				<div class="flex items-center space-x-2">
					<span class="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
						SvelteJS
					</span>
					<span class="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
						Tailwind CSS
					</span>
				</div>
			</div>
		</div>
	</div>
</header>




