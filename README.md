# Saket Dandekar — Portfolio

Premium personal portfolio website for Saket Dandekar, Digital Marketing & Growth Analyst.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Space Grotesk (Display), Inter (Body)

## Features

- ✨ Premium, experimental, highly interactive UI
- 🎨 Sophisticated animations and micro-interactions
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎯 SEO-ready with proper metadata
- 🌙 Dark theme with custom color system
- 🔄 Smooth scroll navigation
- 💼 Professional project showcase
- 📊 Skills categorization system
- 📫 Contact section with social links

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

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

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

## License

© 2026 Saket Dandekar. All rights reserved.

## Contact

- **Email:** b4u.iamsaket@gmail.com
- **Phone:** +91 7999733626
- **LinkedIn:** [linkedin.com/in/visitsaket](https://www.linkedin.com/in/visitsaket)
- **GitHub:** [github.com/justsaket](https://github.com/justsaket)
