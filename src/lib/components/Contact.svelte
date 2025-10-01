<script lang="ts">
	import { Mail, Send, MapPin, Phone } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let name = '';
	let email = '';
	let message = '';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Set initial states
		gsap.set('.contact-title', { y: 50, opacity: 0 });
		gsap.set('.contact-description', { y: 30, opacity: 0 });
		gsap.set('.contact-form', { y: 60, opacity: 0, scale: 0.95 });
		gsap.set('.contact-info', { x: -50, opacity: 0 });
		gsap.set('.form-input', { y: 20, opacity: 0 });

		// Animate section title
		gsap.to('.contact-title', {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.contact-title',
				start: 'top 85%'
			}
		});

		// Animate description
		gsap.to('.contact-description', {
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.contact-description',
				start: 'top 85%'
			}
		});

		// Animate contact form
		gsap.to('.contact-form', {
			y: 0,
			opacity: 1,
			scale: 1,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.contact-form',
				start: 'top 80%'
			}
		});

		// Animate contact info
		gsap.to('.contact-info', {
			x: 0,
			opacity: 1,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.contact-info',
				start: 'top 80%'
			}
		});

		// Animate form inputs with stagger
		gsap.to('.form-input', {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out',
			stagger: 0.1,
			scrollTrigger: {
				trigger: '.form-input',
				start: 'top 80%'
			}
		});

		// Add focus animations to form inputs
		document.querySelectorAll('input, textarea').forEach((input) => {
			input.addEventListener('focus', () => {
				gsap.to(input, {
					scale: 1.02,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
			
			input.addEventListener('blur', () => {
				gsap.to(input, {
					scale: 1,
					duration: 0.2,
					ease: 'power2.out'
				});
			});
		});
	});

	function handleSubmit() {
		// Animate submit button
		const submitBtn = document.querySelector('.submit-btn');
		gsap.to(submitBtn, {
			scale: 0.95,
			duration: 0.1,
			yoyo: true,
			repeat: 1,
			ease: 'power2.inOut'
		});

		// Add ripple effect
		gsap.to(submitBtn, {
			boxShadow: '0 0 0 20px rgba(59, 130, 246, 0.3)',
			duration: 0.3,
			ease: 'power2.out',
			yoyo: true,
			repeat: 1
		});

		// Handle form submission here
		console.log('Form submitted:', { name, email, message });
	}
</script>

<section id="contact" class="py-16 sm:py-20 lg:py-24 px-4">
	<div class="container mx-auto max-w-6xl px-4">
		<!-- Section Heading -->
		<div class="text-center mb-8 sm:mb-12 lg:mb-16">
			<h2 class="contact-title text-3xl sm:text-4xl font-bold text-white mb-4">
				Get In Touch
				</h2>
			<p class="contact-description text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
				Ready to work together? Let's discuss your next project and bring your ideas to life.
				</p>
			</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
			<!-- Contact Form -->
			<div class="contact-form w-full">
				<form on:submit|preventDefault={handleSubmit} class="space-y-4 sm:space-y-6 w-full">
					<div class="form-input">
						<label for="name" class="block text-sm font-medium text-muted mb-2">
							Full Name
						</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							class="w-full px-4 py-3 card-surface border border-default rounded-lg placeholder-gray-400 focus:outline-none focus-primary transition-all duration-300"
							style="color: var(--text);"
							placeholder="Your full name"
							required
						/>
					</div>

					<div class="form-input">
						<label for="email" class="block text-sm font-medium text-muted mb-2">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							class="w-full px-4 py-3 card-surface border border-default rounded-lg placeholder-gray-400 focus:outline-none focus-primary transition-all duration-300"
							style="color: var(--text);"
							placeholder="your.email@example.com"
							required
						/>
					</div>

					<div class="form-input">
						<label for="message" class="block text-sm font-medium text-muted mb-2">
							Message
						</label>
						<textarea
							id="message"
							bind:value={message}
							class="w-full px-4 py-3 card-surface border border-default rounded-lg placeholder-gray-400 focus:outline-none focus-primary transition-all duration-300 resize-none"
							style="color: var(--text);"
							placeholder="Tell me about your project..."
							required
						></textarea>
					</div>

					<button
						type="submit"
						class="submit-btn w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
						style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));"
					>
						<Send size={20} />
						<span>Send Message</span>
					</button>
				</form>
			</div>

			<!-- Contact Information -->
			<div class="contact-info space-y-8">
				<div class="space-y-6">
					<h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
						Let's Connect
					</h3>
					
					<div class="flex items-start space-x-4 p-4 card-surface rounded-lg card-hover transition-all duration-300">
						<div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: var(--color-primary);">
							<Mail size={20} class="text-white" />
						</div>
						<div>
							<h4 class="font-semibold mb-1" style="color: var(--text);">Email</h4>
							<p class="text-muted text-sm">medicinfinite@gmail.com</p>
						</div>
					</div>

					<div class="flex items-start space-x-4 p-4 card-surface rounded-lg card-hover transition-all duration-300">
						<div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: var(--color-accent);">
							<Phone size={20} class="text-white" />
						</div>
						<div>
							<h4 class="font-semibold mb-1" style="color: var(--text);">Phone</h4>
							<p class="text-muted text-sm">+234 (810) 463-9067</p>
						</div>
					</div>

					<div class="flex items-start space-x-4 p-4 card-surface rounded-lg card-hover transition-all duration-300">
						<div class="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style="background-color: var(--color-secondary);">
							<MapPin size={20} class="text-white" />
						</div>
						<div>
							<h4 class="font-semibold mb-1" style="color: var(--text);">Location</h4>
							<p class="text-muted text-sm">Oyo, Nigeria</p>
						</div>
					</div>
				</div>

				<!-- Call to Action -->
				<div class="p-6 rounded-lg text-center" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));">
					<h4 class="text-white font-bold text-lg mb-2">
						Ready to Start?
					</h4>
					<p class="text-white/90 text-sm mb-4">
						I'm always excited to work on new projects and collaborate with amazing people.
					</p>
					<button class="bg-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105" style="color: var(--color-primary);">
						Schedule a Call
					</button>
				</div>
			</div>
		</div>
	</div>
</section>