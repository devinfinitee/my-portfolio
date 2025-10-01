<script>
	import { onMount } from 'svelte';

	let scrollProgress = 0;

	function updateScrollProgress() {
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const scrollTop = window.scrollY;
		const scrollableHeight = documentHeight - windowHeight;
		
		if (scrollableHeight > 0) {
			scrollProgress = (scrollTop / scrollableHeight) * 100;
		}
	}

	onMount(() => {
		updateScrollProgress();
		window.addEventListener('scroll', updateScrollProgress);
		window.addEventListener('resize', updateScrollProgress);

		return () => {
			window.removeEventListener('scroll', updateScrollProgress);
			window.removeEventListener('resize', updateScrollProgress);
		};
	});
</script>

<div class="fixed top-[73px] left-0 right-0 z-40 h-1.5 bg-gray-800/50 dark:bg-gray-800/50">
	<div 
		class="h-full transition-all duration-100 ease-out shadow-lg"
		style="width: {scrollProgress}%; background: linear-gradient(90deg, var(--color-primary), var(--color-complement), var(--color-secondary));"
	></div>
</div>

<!-- Styles removed: gradient handled by inline style; keeping file lean -->
