import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Color themes with primary, secondary, and accent colors
export const themes = {
	ocean: {
		name: 'Ocean Blue',
		primary: '#3b82f6',
		secondary: '#8b5cf6',
		accent: '#06b6d4',
		complement: '#f59e0b',
		gradient: 'from-blue-500 via-cyan-500 to-purple-600'
	},
	sunset: {
		name: 'Sunset',
		primary: '#f97316',
		secondary: '#ec4899',
		accent: '#f59e0b',
		complement: '#06b6d4',
		gradient: 'from-orange-500 via-pink-500 to-purple-600'
	},
	forest: {
		name: 'Forest Green',
		primary: '#10b981',
		secondary: '#14b8a6',
		accent: '#84cc16',
		complement: '#ef4444',
		gradient: 'from-green-500 via-teal-500 to-emerald-600'
	},
	midnight: {
		name: 'Midnight Purple',
		primary: '#8b5cf6',
		secondary: '#6366f1',
		accent: '#a855f7',
		complement: '#22d3ee',
		gradient: 'from-purple-500 via-indigo-500 to-violet-600'
	},
	crimson: {
		name: 'Crimson Red',
		primary: '#ef4444',
		secondary: '#f43f5e',
		accent: '#fb923c',
		complement: '#22c55e',
		gradient: 'from-red-500 via-rose-500 to-orange-600'
	}
};

// Get initial theme from localStorage or default to 'ocean'
const getInitialTheme = () => {
	if (browser) {
		const saved = localStorage.getItem('colorTheme');
		return saved && themes[saved] ? saved : 'ocean';
	}
	return 'ocean';
};

// Create writable store for current theme
export const currentTheme = writable(getInitialTheme());

// Subscribe to theme changes and apply to document
if (browser) {
	currentTheme.subscribe((themeName) => {
		const theme = themes[themeName];
		if (theme) {
			// Apply CSS variables
			document.documentElement.style.setProperty('--color-primary', theme.primary);
			document.documentElement.style.setProperty('--color-secondary', theme.secondary);
			document.documentElement.style.setProperty('--color-accent', theme.accent);
			document.documentElement.style.setProperty('--color-complement', theme.complement);
			
			// Save to localStorage
			localStorage.setItem('colorTheme', themeName);
		}
	});
}

