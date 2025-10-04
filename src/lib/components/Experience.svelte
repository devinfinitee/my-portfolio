<script lang="ts">
	const experiences = [
		{
			company: 'Frontend Development Foundation',
			role: 'Frontend Development Foundation',
			duration: '2021',
			location: 'Osun State, Nigeria',
			description: 'Mastered the core web technologies (HTML5, CSS3, JavaScript) and went ahead to learn several frameworks like Bootstrap, TailwindCSS, jQuery, React, Svelte, Vue. Developed several responsive interfaces focused on accessibility and clean design.'
		},
		{
			company: 'Backend and Full Stack Transition',
			role: 'Backend and Full Stack Transition',
			duration: '2022',
			location: 'Osun State, Nigeria',
			description: 'Acquired proficiency in Node.js/Python and utilized Express and Node.js with other frameworks to design and implement robust, secure RESTful APIs and focused on database integration using MongoDB and data modelling.'
		},
		{
			company: 'Capstone Projects and Portfolio Building',
			role: 'Capstone Projects and Portfolio Building',
			duration: '2024 - Present',
			location: 'Ogbomosho, Oyo State',
			description: 'Building live production-ready web applications, leveraging a full MERN/MEVN stack and demonstrating the ability to architect and deploy scalable solutions from the initial concept to final deployment.'
		}
	];
</script>

<section id="experience" class="py-16 sm:py-20 lg:py-24 px-4 bg-gray-800/50">
	<div class="container mx-auto max-w-6xl px-4">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
			<!-- Experience Heading -->
			<div class="lg:col-span-1">
				<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
					Development Milestones & skill acquisition
				</h2>
				<p class="text-gray-300 text-base sm:text-lg leading-relaxed">
					My professional journey and growth
				</p>
			</div>

			<div class="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
				{#each experiences as experience, index}
					<div class="flex items-start space-x-3 sm:space-x-4 group">
						<!-- Timeline dot -->
						<div class="flex-shrink-0 mt-2">
							<div class="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-colors" style="background-color: var(--color-primary); border-color: var(--color-accent);"></div>
						</div>
						
						<!-- Content -->
						<div class="flex-1 card-surface rounded-lg p-4 sm:p-6 card-hover transition-all duration-300">
							<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
								<h3 class="text-lg sm:text-xl font-semibold transition-colors" style="color: var(--text);">
									{experience.company}
								</h3>
								<div class="text-sm text-muted mt-1 sm:mt-0">
									{experience.duration}
								</div>
							</div>
							
							<div class="text-lg font-medium mb-2" style="color: var(--color-primary);">
								{experience.role}
							</div>
							
							<div class="text-sm text-muted mb-3">
								📍 {experience.location}
							</div>
							
							<p class="text-muted text-sm leading-relaxed">
								{experience.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
