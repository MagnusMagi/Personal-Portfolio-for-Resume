# Personal Portfolio & Resume

A modern, responsive, and fully accessible portfolio website built with Next.js 16 and Tailwind CSS v4.1. Features a custom JSON-based CMS, scroll animations, and WCAG AA/AAA compliant typography.

## ✨ Features

- **Modern Stack**: Next.js 16, React 18, TypeScript, Tailwind CSS v4.1
- **Fully Responsive**: Mobile-first design with breakpoint optimizations
- **Accessibility**: WCAG AA/AAA compliant with proper contrast ratios and semantic HTML
- **Custom CMS**: JSON-based content management system for tools section
- **Smooth Animations**: Framer Motion scroll reveal animations
- **Performance Optimized**: Font optimization, image optimization, and code splitting
- **SEO Ready**: Proper meta tags and semantic structure

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
```env
CMS_API_KEY=your-secret-key-change-in-production
```

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
│   ├── layout.tsx                # Root layout with fonts
│   └── page.tsx                  # Home page
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
│   └── ScrollReveal.tsx         # Reusable scroll animation component
├── data/
│   └── tools.json                # Tools data (JSON-based CMS)
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

Set the `CMS_API_KEY` environment variable in `.env.local`:

```env
CMS_API_KEY=your-secret-key-change-in-production
```

**Important**: Use a strong API key in production!

For detailed documentation, see [docs/CMS_INTEGRATION.md](docs/CMS_INTEGRATION.md)

## ♿ Accessibility

This project is built with accessibility in mind:

- **WCAG AA/AAA Compliant**: All text meets contrast ratio requirements
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Semantic structure and proper alt texts
- **Text Resize**: Supports up to 200% text zoom
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Focus States**: Visible focus indicators for all interactive elements

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

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

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
