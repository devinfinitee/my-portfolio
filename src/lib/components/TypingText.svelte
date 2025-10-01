<script>
	import { onMount } from 'svelte';

	export let texts = ['Developer', 'Designer', 'Creator'];
	export let typingSpeed = 100;
	export let deletingSpeed = 50;
	export let pauseDuration = 2000;

	let displayText = '';
	let currentIndex = 0;
	let isDeleting = false;
	let showCursor = true;

	onMount(() => {
		let timeout;

		function type() {
			const currentText = texts[currentIndex];

			if (!isDeleting) {
				// Typing
				if (displayText.length < currentText.length) {
					displayText = currentText.substring(0, displayText.length + 1);
					timeout = setTimeout(type, typingSpeed);
				} else {
					// Pause before deleting
					timeout = setTimeout(() => {
						isDeleting = true;
						type();
					}, pauseDuration);
				}
			} else {
				// Deleting
				if (displayText.length > 0) {
					displayText = currentText.substring(0, displayText.length - 1);
					timeout = setTimeout(type, deletingSpeed);
				} else {
					// Move to next text
					isDeleting = false;
					currentIndex = (currentIndex + 1) % texts.length;
					timeout = setTimeout(type, 500);
				}
			}
		}

		// Start typing
		type();

		// Cursor blink animation
		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 530);

		return () => {
			clearTimeout(timeout);
			clearInterval(cursorInterval);
		};
	});
</script>

<span class="typing-text">
	{displayText}<span class="cursor" class:blink={showCursor}>|</span>
</span>

<style>
	.typing-text {
		display: inline-block;
	}

	.cursor {
		opacity: 0;
		transition: opacity 0.1s;
	}

	.cursor.blink {
		opacity: 1;
	}
</style>
