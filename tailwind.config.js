/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gray: {
					900: '#0f0f0f',
					800: '#1a1a1a',
					700: '#2d2d2d',
					600: '#404040',
					500: '#737373',
					400: '#a3a3a3',
					300: '#d4d4d4',
					200: '#e5e5e5',
					100: '#f5f5f5',
					50: '#fafafa'
				},
				blue: {
					600: '#2563eb',
					500: '#3b82f6',
					400: '#60a5fa'
				}
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				glow: 'glow 2s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }
				}
			},
			backdropBlur: {
				xs: '2px'
			}
		}
	},
	plugins: []
};




