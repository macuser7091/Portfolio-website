# DevOps Portfolio Website

## Overview

This is a single-page portfolio website designed for a DevOps and Cloud Engineer. The website features an Ancient/Classical design theme that evokes the aesthetic of old scrolls, stone tablets, and classical architecture. Built entirely with vanilla HTML, CSS, and JavaScript (no frameworks), it presents a professional and elegant showcase of skills, projects, and experience.

The site is designed to be fully responsive across desktop, tablet, and mobile devices, with careful attention to accessibility including support for users who prefer reduced motion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5 for semantic structure
- Vanilla CSS3 for styling and layout
- Vanilla JavaScript for interactivity
- No external frameworks or libraries (except Google Fonts)

**Design System:**
The application uses a CSS custom properties (variables) system for consistent theming:
- Color palette defined in `:root` for easy maintenance
- Typography using Google Fonts ('Cinzel' for headings, 'Lora' for body text)
- Ancient/Classical aesthetic with papyrus-like backgrounds and stone textures

**Layout Strategy:**
- Flexbox and CSS Grid for responsive layouts
- Single-page application with smooth scrolling navigation
- Section-based architecture: Hero, About, Skills, Projects, Experience, Contact
- Sticky navigation bar for easy access

**Responsive Design:**
- Mobile-first approach using CSS media queries
- Flexible grid systems for skill cards and project displays
- Fluid typography and spacing

### JavaScript Functionality

**Core Features:**
1. **Smooth Scrolling Navigation:** Click handlers on nav links with `scrollIntoView` API
2. **Scroll-based Animations:** Intersection Observer API for fade-in effects on sections
3. **Accessibility Support:** Respects `prefers-reduced-motion` media query to disable animations for users who need it

**Event Handling:**
- DOM Content Loaded event for initialization
- Click events for navigation
- Intersection Observer for scroll-triggered animations

### Styling Architecture

**CSS Organization:**
- Reset and base styles
- CSS custom properties for theming
- Component-specific styles (navbar, hero, cards, etc.)
- Responsive breakpoints for different screen sizes
- Accessibility-first approach with reduced motion support

**Visual Effects:**
- SVG-based texture overlay on body background
- Subtle animations and transitions (when not disabled)
- Card-based UI elements with stone backgrounds and gold accents
- Border radius for softer, classical appearance

## External Dependencies

### Third-party Services

**Google Fonts API:**
- Used for typography: 'Cinzel' (headings) and 'Lora' (body text)
- Loaded via CSS `@import` from Google Fonts CDN
- Provides the classical, elegant typography essential to the design theme

### Assets

**Background Textures:**
- SVG-based fractal noise texture embedded inline in CSS
- No external image dependencies currently implemented
- Placeholder references in requirements for parchment texture (to be added)

**Images:**
- Placeholder divs for profile images and project screenshots
- No external image hosting currently configured
- Future implementation may require image optimization service or local asset management

### Browser APIs

**Web Platform Features:**
- Intersection Observer API for scroll animations
- matchMedia API for reduced motion detection
- scrollIntoView API for smooth navigation
- Standard DOM manipulation APIs

**No Build Tools:**
- No bundlers (Webpack, Vite, etc.)
- No preprocessors (Sass, Less, etc.)
- No transpilation required
- Direct browser consumption of source files