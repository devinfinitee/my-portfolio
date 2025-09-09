<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Theme store
	const isDark = writable(true);

	onMount(() => {
		// Check for saved theme preference or default to dark
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			isDark.set(savedTheme === 'dark');
		}
		
		// Apply theme to document
		isDark.subscribe((dark) => {
			document.documentElement.classList.toggle('dark', dark);
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		});
	});
</script>

<div class="min-h-screen site-background transition-colors duration-300">
	<slot />
</div>
