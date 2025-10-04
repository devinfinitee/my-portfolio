<script lang="ts">
	import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import TypingText from './TypingText.svelte';

	const skills = ['Frontend', 'Backend', 'Design', 'DevOps'];
	const techStack = ['React', 'Svelte', 'TypeScript', 'AWS', 'Express', 'Vue', 'MongoDB', 'Docker', 'GitHub'];

	onMount(() => {
		// Set initial states
		gsap.set('.hero-greeting', { y: 30, opacity: 0 });
		gsap.set('.hero-name', { y: 40, opacity: 0 });
		gsap.set('.hero-role', { y: 30, opacity: 0 });
		gsap.set('.hero-description', { y: 30, opacity: 0 });
		gsap.set('.hero-cta', { y: 20, opacity: 0 });
		gsap.set('.hero-social', { y: 20, opacity: 0 });
		gsap.set('.tech-badge', { scale: 0, opacity: 0 });
		gsap.set('.avatar-container', { scale: 0.8, opacity: 0, rotation: -10 });
		gsap.set('.floating-shape', { opacity: 0 });

		// Create timeline
		const tl = gsap.timeline({ delay: 0.2 });

		// Animate text elements
		tl.to('.hero-greeting', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out'
		})
		.to('.hero-name', {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power3.out'
		}, 0.1)
		.to('.hero-role', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out'
		}, 0.3)
		.to('.hero-description', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out'
		}, 0.5)
		.to('.hero-cta', {
			y: 0,
			opacity: 1,
			duration: 0.5,
			ease: 'power3.out',
			stagger: 0.1
		}, 0.7)
		.to('.hero-social', {
			y: 0,
			opacity: 1,
			duration: 0.5,
			ease: 'power3.out',
			stagger: 0.05
		}, 0.8)
		.to('.tech-badge', {
			scale: 1,
			opacity: 1,
			duration: 0.4,
			ease: 'back.out(1.7)',
			stagger: 0.05
		}, 0.9);

		// Animate avatar
		tl.to('.avatar-container', {
			scale: 1,
			opacity: 1,
			rotation: 0,
			duration: 1,
			ease: 'power3.out'
		}, 0.3);

		// Animate floating shapes
		tl.to('.floating-shape', {
			opacity: 1,
			duration: 1,
			stagger: 0.2
		}, 0.5);

		// Continuous animations
		gsap.to('.avatar-glow', {
			scale: 1.2,
			opacity: 0.4,
			duration: 3,
			ease: 'power2.inOut',
			yoyo: true,
			repeat: -1
		});

		// Floating animation for shapes
		gsap.to('.floating-shape-1', {
			y: -20,
			x: 10,
			rotation: 5,
			duration: 4,
			ease: 'power1.inOut',
			yoyo: true,
			repeat: -1
		});

		gsap.to('.floating-shape-2', {
			y: 15,
			x: -15,
			rotation: -5,
			duration: 5,
			ease: 'power1.inOut',
			yoyo: true,
			repeat: -1
		});

		gsap.to('.floating-shape-3', {
			y: -15,
			x: -10,
			rotation: 3,
			duration: 6,
			ease: 'power1.inOut',
			yoyo: true,
			repeat: -1
		});
	});
</script>

<section id="home" class="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 overflow-hidden">
	<!-- Floating background shapes -->
	<div class="floating-shape floating-shape-1 absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
	<div class="floating-shape floating-shape-2 absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
	<div class="floating-shape floating-shape-3 absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl"></div>

	<div class="container mx-auto max-w-7xl relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
			<!-- Left side - Content -->
			<div class="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
				<!-- Greeting -->
				<div class="hero-greeting">
					<p class="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white">
						I am <span class="gradient-text animate-gradient">Infinite</span>
					</p>
				</div>

				<!-- Name with gradient -->
				<div class="hero-name">
					<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
						Problem <span class="gradient-text">Solver</span>
					</h1>
				</div>

				<!-- Role with typing animation -->
				<div class="hero-role">
					<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold">
						<TypingText texts={skills} typingSpeed={100} deletingSpeed={50} pauseDuration={2000} />
					</h2>
				</div>

				<!-- Description -->
				<div class="hero-description">
					<p class="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
						Crafting digital experiences that blend creativity with cutting-edge technology. 
						Let's build something amazing together.
					</p>
				</div>

				<!-- Tech Stack Badges -->
				<div class="flex flex-wrap gap-2 justify-center lg:justify-start">
					{#each techStack as tech}
						<span class="tech-badge px-3 py-1.5 card-surface text-default text-sm rounded-full border border-default hover:border-primary hover:text-primary transition-all duration-200">
							{tech}
						</span>
					{/each}
				</div>

				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
					<button class="hero-cta group px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
						<span>Get In Touch</span>
						<ArrowRight size={20} class="group-hover:translate-x-1 transition-transform" />
					</button>
					<button class="hero-cta px-6 py-3 bg-surface text-default rounded-lg font-semibold border border-default hover:border-primary transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
						<Download size={20} />
						<span>Download CV</span>
					</button>
				</div>

				<!-- Social Links -->
				<div class="flex gap-4 justify-center lg:justify-start">
					<a href="https://github.com/devinfinitee" target="_blank" rel="noopener noreferrer" class="hero-social p-3 card-surface text-muted rounded-lg hover:scale-110 transition-all duration-200 border border-default hover:border-primary" aria-label="GitHub">
						<Github size={22} />
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hero-social p-3 card-surface text-muted rounded-lg hover:scale-110 transition-all duration-200 border border-default hover:border-primary" aria-label="LinkedIn">
						<Linkedin size={22} />
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hero-social p-3 card-surface text-muted rounded-lg hover:scale-110 transition-all duration-200 border border-default hover:border-primary" aria-label="Twitter">
						<Twitter size={22} />
					</a>
					<a href="mailto:medicinfinite@gmail.com" class="hero-social p-3 card-surface text-muted rounded-lg hover:scale-110 transition-all duration-200 border border-default hover:border-primary" aria-label="Email">
						<Mail size={22} />
					</a>
				</div>
			</div>

			<!-- Right side - Avatar -->
			<div class="flex justify-center lg:justify-end">
				<div class="avatar-container relative">
					<!-- Glowing background effect -->
					<div class="avatar-glow absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-40"></div>
					
					<!-- Avatar circle -->
					<div class="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 shadow-2xl bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 backdrop-blur-sm" style="border-color: var(--color-complement)">
						<!-- Avatar content with animated gradient -->
						<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary via-accent to-secondary animate-gradient">
							<div class="text-8xl sm:text-9xl text-white font-bold drop-shadow-2xl">I</div>
						</div>
					</div>

					<!-- Decorative elements with more colors -->
					<div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-accent via-primary to-secondary rounded-full opacity-90 animate-pulse"></div>
					<div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary via-accent to-primary rounded-full opacity-90 animate-pulse" style="animation-delay: 1s;"></div>
					<div class="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full opacity-80 animate-pulse" style="animation-delay: 0.5s;"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.gradient-text {
		background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.from-primary {
		--tw-gradient-from: var(--color-primary);
	}

	.to-secondary {
		--tw-gradient-to: var(--color-secondary);
	}

	.from-secondary {
		--tw-gradient-from: var(--color-secondary);
	}

	.to-accent {
		--tw-gradient-to: var(--color-accent);
	}

	.from-accent {
		--tw-gradient-from: var(--color-accent);
	}

	.to-primary {
		--tw-gradient-to: var(--color-primary);
	}

	.via-secondary {
		--tw-gradient-via: var(--color-secondary);
	}

	.via-accent {
		--tw-gradient-via: var(--color-accent);
	}

	/* Styles moved to global app.css for reusability */
</style>


