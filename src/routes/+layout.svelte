<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';

	// Theme store
	const isDark = writable(true);

	onMount(() => {
		if (!browser) return;
		
		// Check for saved theme preference or default to dark
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			isDark.set(savedTheme === 'dark');
		} else {
			// Ensure dark mode is set by default
			isDark.set(true);
			localStorage.setItem('theme', 'dark');
		}
		
		// Apply theme to document
		const unsubscribe = isDark.subscribe((dark) => {
			if (browser) {
				document.documentElement.classList.toggle('dark', dark);
				document.documentElement.style.backgroundColor = dark ? '#0b1220' : '#f7fafc';
				localStorage.setItem('theme', dark ? 'dark' : 'light');
			}
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<div class="min-h-screen site-background transition-colors duration-300">
	<slot />
</div>
