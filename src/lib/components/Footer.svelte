<script lang="ts">
	import { 
		Facebook, 
		Twitter, 
		Instagram, 
		Linkedin, 
		Github, 
		Moon,
		Sun
	} from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let isDark = true;
	let toggleButton: HTMLButtonElement;

	const socialLinks = [
		{ icon: Facebook, href: '#', label: 'Facebook' },
		{ icon: Twitter, href: '#', label: 'Twitter' },
		{ icon: Instagram, href: '#', label: 'Instagram' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' },
		{ icon: Github, href: '#', label: 'GitHub' },
	];

	function applyThemePreference(dark: boolean) {
		document.documentElement.classList.toggle('dark', dark);
	}

	onMount(() => {
		const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
		if (stored === 'dark') {
			isDark = true;
		} else if (stored === 'light') {
			isDark = false;
		} else {
			const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			isDark = prefersDark;
		}
		applyThemePreference(isDark);

		// Set initial states
		gsap.set('.footer-content', { y: 100, opacity: 0, scale: 0.8 });
		gsap.set('.social-link', { y: 50, opacity: 0, scale: 0.5, rotation: 15 });

		// Animate footer with dramatic entrance
		gsap.to('.footer-content', {
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 1.5,
			ease: 'power4.out',
			delay: 0.3
		});

		// Animate social links with dramatic stagger
		gsap.to('.social-link', {
			y: 0,
			opacity: 1,
			scale: 1,
			rotation: 0,
			duration: 0.8,
			ease: 'back.out(2)',
			stagger: {
				amount: 0.5,
				from: "center"
			},
			delay: 0.8
		});

		// Add continuous floating animation to social links
		gsap.to('.social-link', {
			y: -5,
			duration: 2,
			ease: 'power2.inOut',
			yoyo: true,
			repeat: -1,
			stagger: 0.2,
			delay: 2
		});
	});

	function toggleTheme() {
		// Dramatic toggle button animation
		gsap.to(toggleButton, {
			scale: 0.8,
			rotation: 180,
			duration: 0.2,
			ease: 'power2.inOut',
			yoyo: true,
			repeat: 1
		});

		// Add ripple effect
		gsap.to(toggleButton, {
			boxShadow: '0 0 0 20px rgba(59, 130, 246, 0.3)',
			duration: 0.3,
			ease: 'power2.out',
			yoyo: true,
			repeat: 1
		});

		isDark = !isDark;
		applyThemePreference(isDark);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		}
	}
</script>

<footer class="py-8 sm:py-12 px-4 border-t border-gray-800 bg-gray-900/50">
	<div class="container mx-auto max-w-6xl footer-content">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
			<!-- Copyright -->
			<div class="text-center md:text-left">
				<p class="text-gray-400 text-sm mb-1">
					© {new Date().getFullYear()} Infinite. All rights reserved.
				</p>
				<p class="text-gray-500 text-xs">
					Designed & Developed with passion
				</p>
			</div>

			<!-- Social Links -->
			<div class="flex justify-center space-x-3 sm:space-x-4">
				{#each socialLinks as social}
					<a
						href={social.href}
						class="social-link p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
						aria-label={social.label}
					>
						<svelte:component this={social.icon} size={18} class="sm:w-5 sm:h-5" />
					</a>
				{/each}
			</div>

			<!-- Quick Links -->
			<div class="flex justify-center md:justify-end">
				<p class="text-gray-400 text-sm">
					Made with <span class="text-red-500 animate-pulse">❤</span> by Infinite
				</p>
			</div>
		</div>
	</div>
</footer>
