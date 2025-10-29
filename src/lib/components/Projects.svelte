<script lang="ts">
	import { Star, ExternalLink } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// TODO: Replace with your actual projects
	const projects = [
		{
			title: 'E-Commerce Platform',
			description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.',
			image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
			rating: 5,
			tech: ['React', 'Tailwind', 'GSAP', 'Paystack'],
			link: 'https://ecocartai.netlify.app',
			github: 'https://github.com/devinfinitee'
		},
		{
			title: 'Jewish Learning Dashboard',
			description: 'A responsive dashboard for structured Torah learning with progress tracking, daily goals, and interactive study modules.',
			image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop',
			rating: 5,
			tech: ['React', 'TypeScript', 'GSAP', 'Tailwind'],
			link: '#',
			github: 'https://github.com/devinfinitee'
		},
		{
			title: 'Jetglide',
			description: 'A premium private jet booking platform built for a client, featuring real-time flight tracking, luxury aircraft selection, and seamless booking experience.',
			image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop',
			rating: 4,
			tech: ['React', 'Tailwind'],
			link: 'air-cambridge.vercel.app',
			github: 'https://github.com/devinfinitee'
		},
		{
			title: 'Finguard',
			description: 'A comprehensive fintech application for personal finance management, featuring expense tracking, budget planning, investment monitoring, and financial insights.',
			image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
			rating: 5,
			tech: ['React', 'Tailwind', 'Express', 'NodeJS', 'MongoDB'],
			link: 'finguard-three.vercel.app',
			github: 'https://github.com/devinfinitee'
		},
		{
			title: 'NewsStream Website',
			description: 'A modern news aggregation platform with real-time updates, category filtering, and responsive design.',
			image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
			rating: 4,
			tech: ['React', 'NEWSAPI', 'Tailwind', 'GSAP'],
			link: 'https://news-stream-zeta.vercel.app',
			github: 'https://github.com/devinfinitee'
		},
		{
			title: 'AI Health Platform',
			description: 'An innovative AI-powered healthcare platform developed for a hackathon exhibition, featuring symptom analysis, health recommendations, and telemedicine integration.',
			image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
			rating: 5,
			tech: ['React', 'Tailwind', 'Express', "MongoDB"],
			link: 'https://ai-companion-nine.vercel.app',
			github: 'https://github.com/devinfinitee'
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

<section id="projects" class="py-16 sm:py-20 lg:py-24 px-4">
	<div class="container mx-auto max-w-6xl px-4">
		<!-- Section Heading -->
		<div class="mb-8 sm:mb-12 lg:mb-16">
			<h2 class="projects-title text-3xl sm:text-4xl font-bold text-white mb-4">
				Projects
			</h2>
			<p class="projects-description text-gray-300 text-base sm:text-lg max-w-2xl">
				Showcase of my recent work and contributions to various projects
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
			{#each projects as project}
				<a href={project.link} target="_blank" rel="noopener noreferrer" class="project-card group card-surface rounded-xl overflow-hidden card-hover transition-all duration-300 cursor-pointer block">
					<!-- Project Image -->
					<div class="project-image h-48 overflow-hidden" style="background-color: var(--surface-2);">
						<img 
							src={project.image} 
							alt={project.title}
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
							loading="lazy"
						/>
					</div>
					
					<!-- Project Content -->
					<div class="p-4 sm:p-6">
						<div class="flex items-start justify-between mb-3">
							<h3 class="text-lg sm:text-xl font-semibold transition-colors" style="color: var(--text);">
								{project.title}
							</h3>
							<ExternalLink size={20} class="text-muted transition-colors" style="color: var(--color-primary);" />
						</div>
						
						<p class="text-muted text-sm mb-4 leading-relaxed">
							{project.description}
						</p>
						
						<!-- Tech Stack -->
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tech as tech}
								<span class="px-2 py-1 text-xs rounded-full" style="background-color: color-mix(in srgb, var(--color-primary) 20%, transparent); color: var(--color-primary);">
									{tech}
								</span>
							{/each}
						</div>
						
						<!-- Rating -->
						<div class="flex items-center space-x-1">
							{#each Array(5) as _, i}
								<Star 
									size={16} 
									class="transition-colors {i < project.rating ? 'fill-current' : 'text-gray-500'}" 
									style="{i < project.rating ? 'color: var(--color-accent);' : ''}"
								/>
							{/each}
							<span class="text-muted text-sm ml-2">
								{project.rating}/5
							</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
