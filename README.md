# Infinite - Personal Portfolio

A modern, responsive personal portfolio website built with SvelteJS and Tailwind CSS, featuring smooth animations and interactive elements.

## 🚀 Features

- **Modern Design**: Clean, minimal design following 2025 trends
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: GSAP-powered animations and transitions
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modular Components**: Built with reusable Svelte components
- **Fast Performance**: Optimized for speed and smooth UX

## 🛠️ Tech Stack

- **Framework**: SvelteJS 5
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Lucide Svelte
- **Build Tool**: Vite
- **Language**: TypeScript

## 📋 Sections

1. **Hero Section** - Animated tagline, profile photo, and quick navigation
2. **About Me** - Bio and skills overview with interactive elements
3. **Tech Stack** - Interactive showcase of technologies (MERN, MEVN, Svelte)
4. **Projects** - Portfolio of work with animated project cards
5. **Experience** - Professional timeline with company details
6. **Contact** - Clean contact form with animated submit interaction
7. **Footer** - Social links and theme toggle

## 🎨 Design Features

- Dark theme with blue accents
- Glass morphism effects
- Smooth scroll animations
- Interactive hover states
- Responsive grid layouts
- Custom scrollbar styling
- Gradient backgrounds and glowing effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── Header.svelte
│   │       ├── Hero.svelte
│   │       ├── About.svelte
│   │       ├── TechStack.svelte
│   │       ├── Projects.svelte
│   │       ├── Experience.svelte
│   │       ├── Contact.svelte
│   │       └── Footer.svelte
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   └── app.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎯 Customization

### Colors

Update the color scheme in `tailwind.config.js` under the `theme.extend.colors` section.

### Content

Modify the content in each component file to match your personal information:

- Update personal details in `Hero.svelte` (currently set to "Infinite")
- Modify about points in `About.svelte`
- Add your projects in `Projects.svelte`
- Update work experience in `Experience.svelte`
- Change contact information in `Contact.svelte`

### Animations

Customize GSAP animations in each component's `onMount` function.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Performance Optimizations

- Lazy loading of components
- Optimized images and assets
- Efficient CSS with Tailwind
- Smooth animations with GSAP
- Minimal JavaScript bundle

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out through the contact form on the website.

---

Built with ❤️ using SvelteJS and Tailwind CSS
