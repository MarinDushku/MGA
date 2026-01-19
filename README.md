# Math Geek Albania Website

A modern, professional single-page React website for Math Geek Albania, a mathematics tutoring service offering American-style education for international exam preparation.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + Three.js (loading screen)
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── LoadingScreen.jsx   # Three.js math animation
│   ├── Header.jsx          # Fixed navigation with active section highlighting
│   ├── Hero.jsx            # Landing section
│   ├── Services.jsx        # Exam programs & subject expertise
│   ├── About.jsx           # About/credentials section
│   ├── Testimonials.jsx    # Student testimonials
│   ├── Contact.jsx         # Contact form & WhatsApp button
│   └── Footer.jsx          # Footer with links
├── App.jsx                 # Main application
└── index.css               # Global styles & Tailwind imports
```

## Features

- **Three.js Loading Screen:** Math-themed animation with floating geometric shapes
- **Smooth Scroll Navigation:** Auto-highlighting active section in navbar
- **Responsive Design:** Mobile-first approach, works on all devices
- **Contact Integration:** WhatsApp button, phone links, email
- **Scroll Animations:** Sections animate in as they enter viewport
- **Accessibility:** Proper focus states, semantic HTML, ARIA labels

## Customization

### Images (Placeholders)

The following images should be replaced with actual content:

1. **About Section:** Teacher/classroom image
2. **Testimonials:** Student photos (currently showing initials)
3. **Open Graph Image:** `/public/og-image.png` for social sharing

### Colors

Color scheme is defined in `src/index.css`:

```css
:root {
  --color-primary: #1a5f7a;
  --color-secondary: #c4a962;
  --color-background: #ffffff;
  --color-text: #2d3436;
}
```

### Contact Information

Update contact details in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Environment Variables

No environment variables required for basic functionality.

## Performance

- Lazy loading for Three.js loading screen
- Optimized bundle with code splitting
- Font preloading with Google Fonts
- Target load time: < 3 seconds

## Contact

- **Phone (Albania):** +355 69 288 8941
- **WhatsApp (US):** +1 646 262 4081
- **Email:** mezini_ny@yahoo.com
- **Instagram:** [@math_geek_al](https://www.instagram.com/math_geek_al/)

## License

© 2023 Math Geek Albania. All rights reserved.
