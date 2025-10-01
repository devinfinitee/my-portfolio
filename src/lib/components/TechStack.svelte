<script lang="ts">
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    const technologies = [
        { 
            name: 'Svelte', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
            color: 'from-orange-400 to-red-500', 
            featured: true, 
            level: 95 
        },
        { 
            name: 'Node.js', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            color: 'from-green-400 to-green-600', 
            level: 90 
        },
        { 
            name: 'React', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: 'from-blue-400 to-cyan-500', 
            level: 88 
        },
        { 
            name: 'Vue', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
            color: 'from-green-400 to-emerald-500', 
            level: 82 
        },
        { 
            name: 'MongoDB', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            color: 'from-green-400 to-green-600', 
            level: 80 
        },
        { 
            name: 'Express', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            color: 'from-gray-400 to-gray-600', 
            level: 87 
        },
        { 
            name: 'TypeScript', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            color: 'from-blue-400 to-blue-600', 
            level: 92 
        },
        { 
            name: 'Docker', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            color: 'from-blue-400 to-cyan-500', 
            level: 75 
        },
        { 
            name: 'Git', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            color: 'from-orange-400 to-red-500', 
            level: 90 
        },
    ];

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Set initial states
        gsap.set('.tech-title', { y: 40, opacity: 0 });
        gsap.set('.tech-description', { y: 30, opacity: 0 });
        gsap.set('.tech-card', { y: 40, opacity: 0 });
        gsap.set('.progress-bar', { scaleX: 0 });

        // Animate section title
        gsap.to('.tech-title', {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.tech-title',
                start: 'top 85%'
            }
        });

        // Animate description
        gsap.to('.tech-description', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.tech-description',
                start: 'top 85%'
            }
        });

        // Animate tech cards with stagger
        gsap.to('.tech-card', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.tech-grid',
                start: 'top 80%'
            }
        });

        // Animate progress bars
        gsap.to('.progress-bar', {
            scaleX: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.05,
            scrollTrigger: {
                trigger: '.tech-grid',
                start: 'top 70%'
            }
        });

        // Add hover animations
        document.querySelectorAll('.tech-card').forEach((card) => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.03,
                    y: -3,
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

<section class="py-16 sm:py-20 lg:py-24 px-4 bg-gray-800/50">
    <div class="container mx-auto max-w-6xl px-4">
        <!-- Section Heading -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 class="tech-title text-3xl sm:text-4xl font-bold text-white mb-4">
                Tech Stack
            </h2>
            <p class="tech-description text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Technologies and tools I use to build modern, scalable web applications
            </p>
        </div>

        <!-- Tech Grid (3 x 3 on large screens) -->
        <div class="tech-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {#each technologies as tech}
                <div class="tech-card group relative">
                    <div class="relative p-4 sm:p-6 card-surface rounded-xl card-hover transition-all duration-300 cursor-pointer {tech.featured ? 'animate-glow' : ''}">
                        <!-- Background gradient for featured tech -->
                        {#if tech.featured}
                            <div class="absolute inset-0 bg-gradient-to-r {tech.color} opacity-10 rounded-xl"></div>
                        {/if}
                       
                        <!-- Tech content -->
                        <div class="relative z-10 text-center">
                            <div class="mb-2 sm:mb-3 flex justify-center {tech.featured ? 'animate-pulse' : ''}">
                                <img 
                                    src={tech.icon} 
                                    alt="{tech.name} icon" 
                                    class="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <h3 class="text-sm sm:text-base lg:text-lg font-medium transition-colors mb-2 sm:mb-3" style="color: var(--text);">
                                {tech.name}
                            </h3>
                           
                            <!-- Progress bar -->
                            <div class="w-full bg-border rounded-full h-1.5 sm:h-2 mb-1 sm:mb-2">
                                <div
                                    class="progress-bar h-1.5 sm:h-2 rounded-full bg-gradient-to-r {tech.color}"
                                    style="transform-origin: left; width: {tech.level}%"
                                ></div>
                            </div>
                            <span class="text-xs text-muted">{tech.level}%</span>
                        </div>

                        <!-- Hover effect -->
                        <div class="absolute inset-0 bg-gradient-to-r {tech.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        }
        50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1);
        }
    }

    .animate-glow {
        animation: glow 2s ease-in-out infinite;
    }

    /* Style for icons on dark backgrounds (like Express) */
    img[alt*="Express"] {
        filter: invert(1);
    }
</style>