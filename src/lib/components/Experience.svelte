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

<section class="py-20 px-4">
	<div class="container mx-auto max-w-4xl">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<!-- Experience Heading -->
			<div class="lg:col-span-1">
				<h2 class="text-4xl font-bold text-white mb-6">
					Work Experience
				</h2>
				<p class="text-gray-300 text-lg leading-relaxed">
					My professional journey and contributions to various organizations
				</p>
			</div>

			<!-- Timeline -->
			<div class="lg:col-span-2 space-y-8">
				{#each experiences as experience, index}
					<div class="flex items-start space-x-4 group">
						<!-- Timeline dot -->
						<div class="flex-shrink-0 mt-2">
							<div class="w-4 h-4 bg-blue-600 rounded-full border-2 border-blue-400 group-hover:bg-blue-500 transition-colors"></div>
						</div>
						
						<!-- Content -->
						<div class="flex-1 bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300">
							<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
								<h3 class="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
									{experience.company}
								</h3>
								<div class="text-sm text-gray-400 mt-1 sm:mt-0">
									{experience.duration}
								</div>
							</div>
							
							<div class="text-lg text-blue-400 font-medium mb-2">
								{experience.role}
							</div>
							
							<div class="text-sm text-gray-400 mb-3">
								📍 {experience.location}
							</div>
							
							<p class="text-gray-300 text-sm leading-relaxed">
								{experience.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
