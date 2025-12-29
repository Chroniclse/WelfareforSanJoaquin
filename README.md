# Welfare for San Joaquin

A modern, multi-page React website showcasing Welfare for San Joaquin's achievements and mission. The site features a blue/gray color scheme, animated UI components, scroll-triggered animations, and dynamic statistics displays.

## Features

- **Modern Design**: Blue and gray color scheme with smooth animations
- **Multi-page Navigation**: Home, About, Projects, and Contact pages
- **Animated Components**: Scroll-triggered animations using Framer Motion
- **Statistics Display**: Animated counters showcasing organization achievements
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **UI Components**: Inspired by uiverse.io and reactbits.dev

## Technology Stack

- React 19
- Vite
- React Router DOM
- Framer Motion
- CSS3 with custom animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── StatsCard.jsx
│   ├── AnimatedShape.jsx
│   └── ScrollAnimation.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── styles/          # CSS stylesheets
│   ├── globals.css
│   └── (component styles)
├── data/           # Data files
│   └── stats.js
├── App.jsx         # Main app component with routing
└── main.jsx        # Entry point
```

## Statistics

The website displays the following achievements:

- $8,000+ fundraised over two months
- 32,000+ community interactions
- 10 research papers authored
- 550+ tutoring hours
- 100+ professional shadowing hours
- 2,000 meals provided to those in need

## Color Palette

- **Primary Blue**: #2563eb
- **Primary Blue Dark**: #1e40af
- **Primary Gray**: #6b7280
- **Primary Gray Dark**: #374151
- **Primary Gray Darker**: #1f2937

## License

This project is private and proprietary.
