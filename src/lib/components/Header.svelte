<script lang="ts">
	import { Menu, X, Home, User, Briefcase, Code, Mail, Moon, Sun } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	let mobileMenuOpen = false;
	let isDarkMode = true;

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		document.documentElement.classList.toggle('dark', isDarkMode);
		localStorage.setItem('darkMode', isDarkMode ? 'dark' : 'light');
	}

	const navItems = [
		{ name: 'Home', href: '#home', icon: Home },
		{ name: 'About', href: '#about', icon: User },
		{ name: 'Projects', href: '#projects', icon: Briefcase },
		{ name: 'Experience', href: '#experience', icon: Code },
		{ name: 'Contact', href: '#contact', icon: Mail }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		if (mobileMenuOpen) {
			gsap.fromTo(
				'.mobile-menu',
				{ x: '100%', opacity: 0 },
				{ x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
			);
		}
	}

	function scrollToSection(href) {
		mobileMenuOpen = false;
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(() => {
		// Check for saved dark mode preference
		const savedMode = localStorage.getItem('darkMode');
		if (savedMode) {
			isDarkMode = savedMode === 'dark';
			document.documentElement.classList.toggle('dark', isDarkMode);
		}

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

<header class="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-lg border-b border-default">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
		<div class="flex items-center justify-between">
			<!-- Logo (button for accessibility) -->
			<button
				type="button"
				class="logo text-xl sm:text-2xl lg:text-3xl font-bold text-white cursor-pointer bg-transparent border-0 p-0 m-0"
				on:click={() => scrollToSection('#home')}
				aria-label="Go to home section"
			>
				<span class="gradient-text">Infinite</span>
			</button>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex items-center space-x-8">
				{#each navItems as item}
					<a
						href={item.href}
						on:click|preventDefault={() => scrollToSection(item.href)}
						class="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
					>
						{item.name}
					</a>
				{/each}
			</nav>

			<!-- Right side - Theme Switcher and Mobile Menu -->
			<div class="header-right flex items-center space-x-3">
				<ThemeSwitcher />
				
				<!-- Dark/Light Mode Toggle -->
				<button
					on:click={toggleDarkMode}
					class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
					aria-label="Toggle dark mode"
				>
					{#if isDarkMode}
						<Sun size={20} />
					{:else}
						<Moon size={20} />
					{/if}
				</button>
				
				<!-- Mobile Menu Button -->
				<button
					on:click={toggleMobileMenu}
					class="lg:hidden p-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="mobile-menu lg:hidden bg-surface/95 backdrop-blur-lg border-t border-default">
			<nav class="container mx-auto px-4 py-6 space-y-4">
				{#each navItems as item}
					<a
						href={item.href}
						on:click|preventDefault={() => scrollToSection(item.href)}
						class="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-800"
					>
						<svelte:component this={item.icon} size={20} />
						<span class="font-medium">{item.name}</span>
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>

<style>
	.gradient-text {
		background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style>




