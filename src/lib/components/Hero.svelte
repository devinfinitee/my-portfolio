<script lang="ts">
	import { Mail, Settings, Code, Palette, Database, Globe } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	const quickNavItems = [
		{ name: 'Steatie', icon: Mail, active: true },
		{ name: 'Eturtis', icon: Settings },
		{ name: 'Devtools', icon: Code },
		{ name: 'Design', icon: Palette },
		{ name: 'Data', icon: Database },
		{ name: 'Web', icon: Globe }
	];

	onMount(() => {
		// Set initial states immediately
		gsap.set('.hero-title', { y: 50, opacity: 0 });
		gsap.set('.hero-subtitle', { y: 30, opacity: 0 });
		gsap.set('.nav-item', { y: 20, opacity: 0 });
		gsap.set('.profile-photo', { scale: 0.9, opacity: 0 });
		gsap.set('.glow-effect', { scale: 0.8, opacity: 0 });

		// Create timeline with minimal delay
		const tl = gsap.timeline({ delay: 0.1 });

		// Hero title - immediate animation
		tl.to('.hero-title', {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power3.out'
		});

		// Subtitle - quick follow
		tl.to('.hero-subtitle', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out'
		}, 0.2);

		// Profile photo - parallel with subtitle
		tl.to('.profile-photo', {
			scale: 1,
			opacity: 1,
			duration: 0.8,
			ease: 'power3.out'
		}, 0.3);

		// Glow effect - subtle entrance
		tl.to('.glow-effect', {
			scale: 1,
			opacity: 0.2,
			duration: 1,
			ease: 'power2.out'
		}, 0.4);

		// Navigation items - quick stagger
		tl.to('.nav-item', {
			y: 0,
			opacity: 1,
			duration: 0.5,
			ease: 'power3.out',
			stagger: 0.1
		}, 0.5);

		// Continuous subtle glow animation
		gsap.to('.glow-effect', {
			scale: 1.1,
			opacity: 0.3,
			duration: 2,
			ease: 'power2.inOut',
			yoyo: true,
			repeat: -1,
			delay: 1
		});

		// Add hover animations to nav items
		document.querySelectorAll('.nav-item').forEach((item) => {
			item.addEventListener('mouseenter', () => {
				gsap.to(item, {
					scale: 1.05,
					y: -3,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
			
			item.addEventListener('mouseleave', () => {
				gsap.to(item, {
					scale: 1,
					y: 0,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
		});
	});
</script>

<section class="min-h-screen flex items-center justify-center pt-20 px-4">
	<div class="container mx-auto max-w-6xl">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left side - Name, Role, and Quick Nav -->
			<div class="space-y-8">
				<!-- Name and Role -->
				<div class="space-y-4">
					<h1 class="hero-title text-6xl lg:text-7xl font-bold text-white leading-tight">
						Infinite
					</h1>
					<h2 class="hero-subtitle text-2xl lg:text-3xl text-gray-300 font-medium">
						Full-Stack Developer
					</h2>
				</div>

				<!-- Quick Navigation Icons -->
				<div class="flex flex-wrap gap-4">
					{#each quickNavItems as item}
						<button 
							class="nav-item flex flex-col items-center p-4 rounded-full transition-all duration-300 hover:scale-105 {item.active ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}"
						>
							<svelte:component this={item.icon} size={24} />
							<span class="text-xs mt-2">{item.name}</span>
						</button>
					{/each}
				</div>
			</div>

			<!-- Right side - Profile Photo -->
			<div class="flex justify-center lg:justify-end">
				<div class="relative">
					<!-- Glowing background effect -->
					<div class="glow-effect absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
					
					<!-- Profile photo -->
					<div class="profile-photo relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
						<div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
							<div class="text-6xl text-white font-bold">I</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


