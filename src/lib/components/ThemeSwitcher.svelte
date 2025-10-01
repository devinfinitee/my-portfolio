<script>
	import { Palette, Check } from 'lucide-svelte';
	import { currentTheme, themes } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let isOpen = false;
	let selectedTheme = 'ocean';

	currentTheme.subscribe((theme) => {
		selectedTheme = theme;
	});

	function toggleDropdown() {
		isOpen = !isOpen;
		if (isOpen) {
			gsap.fromTo(
				'.theme-dropdown',
				{ opacity: 0, y: -10, scale: 0.95 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' }
			);
		}
	}

	function selectTheme(themeName) {
		currentTheme.set(themeName);
		isOpen = false;
	}

	onMount(() => {
		// Close dropdown when clicking outside
		const handleClickOutside = (event) => {
			if (!event.target.closest('.theme-switcher-container')) {
				isOpen = false;
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<div class="theme-switcher-container relative">
	<button
		on:click={toggleDropdown}
		class="flex items-center space-x-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all duration-200 hover:scale-105 border border-gray-700"
		aria-label="Change color theme"
	>
		<Palette size={20} class="text-current" style="color: var(--color-primary)" />
		<span class="hidden sm:inline text-sm font-medium">Theme</span>
	</button>

	{#if isOpen}
		<div
			class="theme-dropdown absolute right-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700 overflow-hidden z-50"
		>
			<div class="p-3 border-b border-gray-700">
				<p class="text-sm font-semibold text-white">Choose Color Theme</p>
			</div>
			<div class="p-2 space-y-1 max-h-80 overflow-y-auto">
				{#each Object.entries(themes) as [key, theme]}
					<button
						on:click={() => selectTheme(key)}
						class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group"
					>
						<div class="flex items-center space-x-3">
							<div
								class="w-8 h-8 rounded-full bg-gradient-to-r {theme.gradient} shadow-lg"
							></div>
							<span class="text-sm font-medium text-white group-hover:text-blue-400">
								{theme.name}
							</span>
						</div>
						{#if selectedTheme === key}
							<Check size={18} class="text-green-400" />
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.theme-dropdown {
		animation: slideDown 0.2s ease-out;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
