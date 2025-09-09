<script lang="ts">
	import { Star, ExternalLink } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const projects = [
		{
			title: 'Project',
			description: 'A modern web application built with cutting-edge technologies and innovative design patterns.',
			image: '👨‍💻',
			rating: 4,
			tech: ['React', 'Node.js', 'MongoDB']
		},
		{
			title: 'Reacty',
			description: 'Interactive dashboard with real-time data visualization and advanced analytics capabilities.',
			image: '📊',
			rating: 5,
			tech: ['React', 'TypeScript', 'D3.js']
		},
		{
			title: 'Cloirts',
			description: 'E-commerce platform with seamless payment integration and inventory management.',
			image: '🛒',
			rating: 4,
			tech: ['Vue', 'Express', 'PostgreSQL']
		},
		{
			title: 'Stalne',
			description: 'Social media application with real-time messaging and content sharing features.',
			image: '💬',
			rating: 5,
			tech: ['Svelte', 'Socket.io', 'Redis']
		},
		{
			title: 'DevTools',
			description: 'Developer productivity suite with code analysis and performance monitoring tools.',
			image: '🔧',
			rating: 4,
			tech: ['Electron', 'Node.js', 'WebAssembly']
		},
		{
			title: 'CloudSync',
			description: 'Cross-platform file synchronization service with end-to-end encryption.',
			image: '☁️',
			rating: 5,
			tech: ['React Native', 'AWS', 'DynamoDB']
		}
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Set initial states
		gsap.set('.projects-title', { y: 40, opacity: 0 });
		gsap.set('.projects-description', { y: 30, opacity: 0 });
		gsap.set('.project-card', { y: 40, opacity: 0 });

		// Animate section title
		gsap.to('.projects-title', {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.projects-title',
				start: 'top 85%'
			}
		});

		// Animate description
		gsap.to('.projects-description', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.projects-description',
				start: 'top 85%'
			}
		});

		// Animate project cards with stagger
		gsap.to('.project-card', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out',
			stagger: 0.1,
			scrollTrigger: {
				trigger: '.projects-grid',
				start: 'top 80%'
			}
		});

		// Add hover animations to project cards
		document.querySelectorAll('.project-card').forEach((card) => {
			card.addEventListener('mouseenter', () => {
				gsap.to(card, {
					scale: 1.03,
					y: -5,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
			
			card.addEventListener('mouseleave', () => {
				gsap.to(card, {
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
	<div class="container mx-auto max-w-6xl">
		<!-- Section Heading -->
		<div class="mb-16">
			<h2 class="projects-title text-4xl font-bold text-white mb-4">
				Projects
			</h2>
			<p class="projects-description text-gray-300 text-lg max-w-2xl">
				Showcase of my recent work and contributions to various projects
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project}
				<div class="project-card group bg-gray-700 rounded-xl overflow-hidden hover:bg-gray-600 transition-all duration-300 cursor-pointer">
					<!-- Project Image -->
					<div class="project-image h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
						{project.image}
					</div>
					
					<!-- Project Content -->
					<div class="p-6">
						<div class="flex items-start justify-between mb-3">
							<h3 class="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
								{project.title}
							</h3>
							<ExternalLink size={20} class="text-gray-400 group-hover:text-blue-400 transition-colors" />
						</div>
						
						<p class="text-gray-300 text-sm mb-4 leading-relaxed">
							{project.description}
						</p>
						
						<!-- Tech Stack -->
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tech as tech}
								<span class="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">
									{tech}
								</span>
							{/each}
						</div>
						
						<!-- Rating -->
						<div class="flex items-center space-x-1">
							{#each Array(5) as _, i}
								<Star 
									size={16} 
									class="transition-colors {i < project.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}" 
								/>
							{/each}
							<span class="text-gray-400 text-sm ml-2">
								{project.rating}/5
							</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
