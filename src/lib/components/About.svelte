<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const aboutPoints = [
		{
			icon: 'C',
			text: 'Cenunma Bailit',
			description: 'Passionate about creating innovative web solutions'
		},
		{
			icon: 'B',
			text: 'Biershare Dimitle',
			description: 'Experienced in modern development frameworks'
		},
		{
			icon: 'A',
			text: 'Asamıms Belis',
			description: 'Focused on user experience and performance'
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Set initial states
		gsap.set('.about-title', { y: 40, opacity: 0 });
		gsap.set('.about-description', { y: 30, opacity: 0 });
		gsap.set('.about-point', { y: 40, opacity: 0 });

		// Animate section title
		gsap.to('.about-title', {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.about-title',
				start: 'top 85%'
			}
		});

		// Animate about description
		gsap.to('.about-description', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.about-description',
				start: 'top 85%'
			}
		});

		// Animate about points with stagger
		gsap.to('.about-point', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out',
			stagger: 0.1,
			scrollTrigger: {
				trigger: '.about-points',
				start: 'top 80%'
			}
		});

		// Add hover animations to about points
		document.querySelectorAll('.about-point').forEach((point) => {
			point.addEventListener('mouseenter', () => {
				gsap.to(point, {
					scale: 1.02,
					y: -5,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
			
			point.addEventListener('mouseleave', () => {
				gsap.to(point, {
					scale: 1,
					y: 0,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
		});
	});
</script>

<section class="py-20 px-4 bg-gray-800/50">
	<div class="container mx-auto max-w-4xl">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- About Me Heading -->
			<div class="lg:col-span-1">
				<h2 class="about-title text-4xl font-bold text-white mb-6">
					About Me
				</h2>
				<p class="about-description text-gray-300 text-lg leading-relaxed">
					I'm a dedicated full-stack web developer with a passion for turning complex ideas into intuitive, high-performing web applications. My expertise spans the entire development lifecycle, from back-end architecture to front-end design, allowing me to build robust and scalable solutions from the ground up. I'm committed to leveraging modern technologies to craft exceptional user experiences and deliver clean, efficient, and innovative web solutions.
				</p>
			</div>

			<!-- About Points -->
			<div class="about-points lg:col-span-2 space-y-6">
				{#each aboutPoints as point, index}
					<div class="about-point flex items-start space-x-4 p-6 bg-gray-700/50 rounded-lg hover:bg-gray-700/70 transition-all duration-300 group">
						<!-- Icon -->
						<div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
							{point.icon}
						</div>
						
						<!-- Content -->
						<div class="flex-1">
							<h3 class="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
								{point.text}
							</h3>
							<p class="text-gray-300 text-sm">
								{point.description}
							</p>
						</div>
						
						<!-- Arrow -->
						<div class="flex-shrink-0 text-gray-400 group-hover:text-blue-400 transition-colors">
							<ArrowRight size={20} />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
