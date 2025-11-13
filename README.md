# Personal Portfolio & Resume

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-0055FF?style=for-the-badge&logo=framer&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![WCAG](https://img.shields.io/badge/WCAG-AA%2FAAA-4CAF50?style=for-the-badge&logo=accessibility&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-Optimized-FF6B6B?style=for-the-badge)

A modern, responsive, and fully accessible portfolio website built with Next.js 16 and Tailwind CSS v4.1. Features a custom JSON-based CMS, scroll animations, and WCAG AA/AAA compliant typography.

## ✨ Features

- **Modern Stack**: Next.js 16, React 18, TypeScript, Tailwind CSS v4.1
- **Fully Responsive**: Mobile-first design with breakpoint optimizations
- **Accessibility**: WCAG AA/AAA compliant with proper contrast ratios and semantic HTML
- **Custom CMS**: JSON-based content management system for tools section
- **Smooth Animations**: Framer Motion scroll reveal animations
- **Performance Optimized**: Font optimization, image optimization, and code splitting
- **SEO Optimized**: Complete SEO setup with Open Graph, Twitter Cards, Structured Data (JSON-LD), sitemap, and robots.txt
- **Production Ready**: All critical issues resolved, comprehensive error handling, and security best practices

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4.1](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Ubuntu (sans-serif), Geist Mono (monospace)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/MagnusMagi/Personal-Portfolio-for-Resume.git
cd Personal-Portfolio-for-Resume
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional, for CMS):
```bash
# Copy the example file
cp .env.local.example .env.local

# Generate a secure API key (choose one method):
# Option 1: OpenSSL
openssl rand -hex 32

# Option 2: Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Then edit .env.local and replace the API key with your generated key
```

Or manually create `.env.local`:
```env
CMS_API_KEY=your-generated-api-key-here
```

**See [docs/CMS_INTEGRATION.md](docs/CMS_INTEGRATION.md) for detailed API key generation instructions.**

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── tools/
│   │       └── route.ts          # Tools API endpoints (CRUD)
│   ├── admin/
│   │   └── tools/
│   │       └── page.tsx          # Admin panel for tools management
│   ├── globals.css               # Global styles & WCAG typography
│   ├── layout.tsx                # Root layout with fonts & SEO
│   ├── page.tsx                  # Home page
│   └── sitemap.ts                # Dynamic sitemap generation
├── components/
│   ├── Header.tsx                # Header with location & time
│   ├── Intro.tsx                 # Profile introduction
│   ├── About.tsx                 # About section
│   ├── Experience.tsx            # Work experience
│   ├── Certifications.tsx        # Certifications
│   ├── Tools.tsx                 # Tools & technologies (dynamic)
│   ├── Skills.tsx                # Skills section
│   ├── Languages.tsx             # Languages
│   ├── Contact.tsx               # Contact information
│   ├── Footer.tsx                # Footer
│   ├── ScrollReveal.tsx         # Reusable scroll animation component
│   └── StructuredData.tsx        # JSON-LD structured data for SEO
├── data/
│   └── tools.json                # Tools data (JSON-based CMS)
├── public/
│   └── robots.txt                # Robots.txt for search engines
├── types/
│   └── tools.ts                  # TypeScript type definitions
├── docs/
│   ├── CMS_INTEGRATION.md       # CMS documentation
│   └── STYLE_IMPROVEMENTS.md    # Style system documentation
└── package.json
```

## 🎨 Custom CMS

The project includes a custom JSON-based CMS for managing the Tools section without a database.

### Admin Panel

Access the admin panel at: `http://localhost:3000/admin/tools`

### API Endpoints

- **GET** `/api/tools` - Fetch all tools (public)
- **POST** `/api/tools` - Create a new tool (requires authentication)
- **PUT** `/api/tools` - Update a tool (requires authentication)
- **DELETE** `/api/tools?id={index}` - Delete a tool (requires authentication)

### Authentication

#### Generate an API Key

Generate a secure API key using one of these methods:

**Option 1: OpenSSL (Recommended)**
```bash
openssl rand -hex 32
```

**Option 2: Node.js**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Option 3: Online Generator**
Visit [randomkeygen.com](https://randomkeygen.com/) and use a 256-bit key.

#### Set Up API Key

1. Create `.env.local` file in the project root:
```bash
touch .env.local
```

2. Add your generated API key:
```env
CMS_API_KEY=your-generated-api-key-here
```

3. Restart the development server:
```bash
npm run dev
```

**Important**: 
- ✅ Never commit `.env.local` to Git (already in `.gitignore`)
- ✅ Use a strong, random API key (at least 32 characters)
- ✅ Use different keys for development and production
- ✅ Keep your API key secret

For detailed documentation:
- **CMS Integration**: [docs/CMS_INTEGRATION.md](docs/CMS_INTEGRATION.md)
- **API Key Guide**: [docs/API_KEY_GUIDE.md](docs/API_KEY_GUIDE.md)

## 🔍 SEO

This project includes comprehensive SEO optimization:

- **Meta Tags**: Complete title, description, keywords, and author information
- **Open Graph**: Full OG tags with image support for social media sharing
- **Twitter Cards**: Optimized Twitter card metadata
- **Structured Data**: JSON-LD schema for Person and WebSite
- **Sitemap**: Dynamic sitemap generation (`/sitemap.xml`)
- **Robots.txt**: Properly configured robots.txt file
- **Canonical URL**: Prevents duplicate content issues
- **Image Optimization**: Priority loading for above-the-fold images
- **Semantic HTML**: Proper heading hierarchy and semantic structure

### SEO Features

- **Structured Data (JSON-LD)**: Person and WebSite schemas for rich snippets
- **Social Media Ready**: Open Graph and Twitter Cards configured
- **Search Engine Friendly**: robots.txt and sitemap.xml included
- **Performance Optimized**: Image priority and lazy loading

## ♿ Accessibility

This project is built with accessibility in mind:

- **WCAG AA/AAA Compliant**: All text meets contrast ratio requirements
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Semantic structure and proper alt texts
- **Text Resize**: Supports up to 200% text zoom
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Focus States**: Visible focus indicators for all interactive elements
- **ARIA Labels**: Comprehensive aria-label and aria-hidden attributes

### Color Contrast Ratios

- Primary text (#121212): 16.6:1 (AAA)
- Secondary text (#6b6b6b): 4.5:1 (AA)
- Muted text (#5a5a5a): 7:1 (AAA on white), 4.5:1 (AAA on light bg)

## 🎯 Typography

The project uses a custom typography system with responsive font sizes:

- **Section Titles**: 12-14px (Geist Mono, uppercase)
- **Heading 1**: 22-28px (Ubuntu, 600 weight)
- **Heading 2**: 17-20px (Ubuntu, 400 weight)
- **Body**: 14-16px (Ubuntu, 400 weight)
- **Body Small**: 14-15px (Ubuntu, 400 weight)
- **Mono Small**: 12px (Geist Mono, 400 weight)

All font sizes use `rem` units for proper text scaling.

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MagnusMagi/Personal-Portfolio-for-Resume)

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
CMS_API_KEY=your-secret-key-change-in-production
```

### Tailwind CSS

Tailwind CSS v4.1 is configured with custom fonts and color system. See `tailwind.config.ts` for configuration.

### Next.js

Image optimization is configured for external domains. See `next.config.js` for allowed image sources.

## 📊 Project Status

**Status**: ✅ Production Ready

- ✅ All critical issues resolved
- ✅ SEO optimized (90/100 score)
- ✅ WCAG AA/AAA compliant
- ✅ Performance optimized
- ✅ Security best practices implemented
- ✅ Comprehensive documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MagnusMagi/Personal-Portfolio-for-Resume/issues).

## 👤 Author

**Aydin Gundeger**

- Portfolio: [aydingundeger.com](https://aydingundeger.com)
- LinkedIn: [in/aydin-gundeger](https://www.linkedin.com/in/aydin-gundeger)
- Email: hello@aydingundeger.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Simple Icons](https://simpleicons.org/)

---

⭐ If you find this project helpful, please consider giving it a star!
