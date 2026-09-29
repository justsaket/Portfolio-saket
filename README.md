# Saket Dandekar — Portfolio

Premium personal portfolio website for Saket Dandekar, Digital Marketing & Growth Analyst.

A production-grade, interactive digital experience featuring advanced animations, real-time contact form with email delivery, responsive design, and modular content architecture.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email:** Resend API
- **Fonts:** Space Grotesk (Display), Inter (Body)
- **Deployment:** Vercel

## Features

- ✨ **Premium Interactive UI** - Sophisticated animations, micro-interactions, and smooth transitions
- 🎨 **Advanced Motion Design** - Framer Motion animations with staggered reveals and spring physics
- 📧 **Production-Ready Contact Form** - Real email delivery via Resend API with spam protection
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized** - Fast page loads, lazy loading, and optimized images
- 🎯 **SEO Ready** - Comprehensive metadata, Open Graph tags, and semantic HTML
- 🌙 **Dark Theme** - Professional dark color system with accent gradients
- 🔄 **Smooth Navigation** - Scroll-based navigation with command palette (⌘K)
- 💼 **Project Showcase** - Detailed project cards with case studies
- 🎨 **Creative Gallery** - Portfolio gallery with category filtering and lightbox
- 📊 **Skills & Capabilities** - Interactive skill cards organized by domain
- 🏆 **Certifications** - Professional certifications and credentials showcase
- 📈 **Analytics & Marketing Suites** - Visual capability demonstrations
- 🤖 **AI Automation** - Automation workflow visualizations
- 🙏 **Cultural Touch** - Elegant "Namaste" intro loader
- ♿ **Accessible** - Keyboard navigation, ARIA labels, reduced motion support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/justsaket/Portfolio-saket.git
cd Portfolio-saket
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Add your assets to the \`public\` folder:
   - \`saket-photo.jpg\` - Your professional photograph
   - \`Resume.pdf\` - Your resume file

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel project settings:
   - `RESEND_API_KEY` - Your Resend API key for contact form emails
4. Deploy automatically
5. Test the contact form to ensure emails are delivered

### Environment Variables Setup

**Required for production:**
- `RESEND_API_KEY` - Get this from [resend.com](https://resend.com)

Add these in Vercel Dashboard → Settings → Environment Variables

## Customization

### Colors

Edit color variables in \`app/globals.css\`:

\`\`\`css
:root {
  --c-accent: #ff6b35;
  --c-accent-light: #ff8f5f;
  --c-accent2: #ff9f1c;
  /* ... */
}
\`\`\`

### Content

Update your information in:
- \`components/Hero.tsx\` - Hero section content
- \`components/About.tsx\` - About section details
- \`components/Projects.tsx\` - Project listings
- \`components/Experience.tsx\` - Work experience and education
- \`components/Skills.tsx\` - Skills and expertise
- \`components/Contact.tsx\` - Contact information

### Metadata

Update SEO metadata in \`app/layout.tsx\`

## Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Responsive navigation
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills showcase
│   ├── Experience.tsx       # Experience & education
│   ├── Projects.tsx         # Projects portfolio
│   └── Contact.tsx          # Contact & footer
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## Key Features Implementation

### Contact Form with Email Delivery
The contact form uses Resend API for reliable email delivery. Each submission:
- Validates all inputs server-side
- Includes honeypot spam protection
- Sends formatted email to b4u.iamsaket@gmail.com
- Provides user-friendly success/error states
- Includes enquiry metadata and timestamp

### Command Palette
Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) to open the quick navigation command palette.

### Intro Loader
First-time visitors see an elegant "Namaste" intro sequence. It's cached in session storage and won't repeat on subsequent page visits.

### Modular Content System
All content is centralized in `/data/*.ts` files for easy updates without touching component code.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Lighthouse Score: 95+ Performance
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Reduced motion support for accessibility

## License

© 2026 Saket Dandekar. All rights reserved.

## Contact

- **Email:** b4u.iamsaket@gmail.com
- **Phone:** +91 7999733626
- **Location:** Bhilai, Chhattisgarh, India
- **LinkedIn:** [linkedin.com/in/visitsaket](https://www.linkedin.com/in/visitsaket)
- **GitHub:** [github.com/justsaket](https://github.com/justsaket)
- **Portfolio:** [digitalsaket.vercel.app](https://digitalsaket.vercel.app)
