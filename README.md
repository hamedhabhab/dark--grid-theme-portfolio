# Pixelforge Studio - Advertising Agency Website

A modern, single-page Next.js website for an advertising agency specializing in design and application development. Features a beautiful dark grid theme with three main sections.

## Features

- 🎨 Modern dark grid theme design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 16 and React 19
- 🎯 Three main sections: Hero, Services, Portfolio
- 💅 Styled with Tailwind CSS
- ✨ Smooth animations and transitions
- 🚀 Optimized for performance

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hamedhabhab/dark--grid-theme-portfolio.git
cd dark--grid-theme-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Sections

### Hero Section
- Eye-catching headline with gradient text
- Agency introduction and value proposition
- Call-to-action buttons
- Statistics showcase (500+ projects, 98% satisfaction, etc.)
- Animated background with grid pattern

### Services Section
- Six main service offerings:
  - Brand Identity Design
  - Web Development
  - Mobile App Development
  - Digital Marketing
  - UI/UX Design
  - Performance Optimization
- Detailed service descriptions
- Feature lists for each service
- Call-to-action for consultations

### Portfolio Section
- Four featured projects with case studies
- Project categories and tags
- Client testimonials
- Final call-to-action
- Contact information

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts` and `app/globals.css`

### Content
All content can be modified in `app/page.tsx`

### Styling
Global styles are in `app/globals.css`, component styles use Tailwind utility classes

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then connect your repository to Vercel for automatic deployments.

### Other Platforms

Build the project:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## License

MIT

## Contact

For inquiries: hello@pixelforge.agency
