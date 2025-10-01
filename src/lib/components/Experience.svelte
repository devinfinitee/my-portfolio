<script lang="ts">
	const experiences = [
		{
			company: 'Eaosc Relky Maw',
			role: 'Senior Full-Stack Developer',
			duration: '2023 - Present',
			location: 'San Francisco, CA',
			description: 'Leading development of enterprise-scale web applications'
		},
		{
			company: 'Company Oad Fieelk',
			role: 'Frontend Developer',
			duration: '2021 - 2023',
			location: 'New York, NY',
			description: 'Built responsive user interfaces and interactive components'
		},
		{
			company: 'Tech Solutions Inc',
			role: 'Backend Developer',
			duration: '2019 - 2021',
			location: 'Austin, TX',
			description: 'Developed RESTful APIs and database architectures'
		},
		{
			company: 'Startup Ventures',
			role: 'Full-Stack Developer',
			duration: '2017 - 2019',
			location: 'Seattle, WA',
			description: 'Built MVP products and scalable web applications'
		},
		{
			company: 'Digital Agency',
			role: 'Junior Developer',
			duration: '2015 - 2017',
			location: 'Los Angeles, CA',
			description: 'Collaborated on client projects and learned modern frameworks'
		}
	];
</script>

<section id="experience" class="py-16 sm:py-20 lg:py-24 px-4 bg-gray-800/50">
	<div class="container mx-auto max-w-6xl px-4">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
			<!-- Experience Heading -->
			<div class="lg:col-span-1">
				<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
					Work Experience
				</h2>
				<p class="text-gray-300 text-base sm:text-lg leading-relaxed">
					My professional journey and contributions to various organizations
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
