# Deployment Guide

This guide covers deployment options for the Personal Portfolio & Resume project.

## 🚀 Quick Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MagnusMagi/Personal-Portfolio-for-Resume)

### Steps:

1. Click the button above or visit [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Add environment variable:
   - `CMS_API_KEY`: Your secret API key for the CMS
4. Click "Deploy"

Vercel will automatically:
- Detect Next.js
- Install dependencies
- Build the project
- Deploy to production

## 📦 Manual Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Environment Variables

Create a `.env.local` file or set environment variables in your hosting platform:

```env
CMS_API_KEY=your-secret-key-change-in-production
```

## 🌐 Other Deployment Options

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variable: `CMS_API_KEY`

### Railway

1. Connect your GitHub repository
2. Railway will auto-detect Next.js
3. Add environment variable: `CMS_API_KEY`
4. Deploy

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🔒 Security Checklist

Before deploying to production:

- [ ] Change `CMS_API_KEY` to a strong, random value
- [ ] Review and update `next.config.js` image domains
- [ ] Test all functionality in production environment
- [ ] Verify environment variables are set correctly
- [ ] Check that sensitive files are in `.gitignore`

## 📊 Performance Optimization

- Images are automatically optimized by Next.js
- Fonts are optimized with `display: swap`
- Code is automatically split by Next.js
- Static assets are cached appropriately

## 🔍 Post-Deployment

After deployment, verify:

1. Site loads correctly
2. All images display properly
3. API endpoints work (if using CMS)
4. Animations work smoothly
5. Responsive design works on mobile
6. Accessibility features function correctly
7. SEO metadata is correct (check with [Open Graph Debugger](https://www.opengraph.xyz/))
8. Sitemap is accessible at `/sitemap.xml`
9. robots.txt is accessible at `/robots.txt`
10. Structured Data is valid (test with [Google Rich Results Test](https://search.google.com/test/rich-results))

## 🔍 SEO Post-Deployment Checklist

### Google Search Console Setup

1. **Add Property**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your domain: `https://aydingundeger.com`

2. **Submit Sitemap**
   - Navigate to Sitemaps section
   - Submit: `https://aydingundeger.com/sitemap.xml`

3. **Verify robots.txt**
   - Check that robots.txt is accessible
   - Verify it allows indexing of main pages
   - Confirm admin panel is disallowed

4. **Test Structured Data**
   - Use [Rich Results Test](https://search.google.com/test/rich-results)
   - Enter your URL
   - Verify Person and WebSite schemas are detected

5. **Create Open Graph Image**
   - Create a 1200x630px image
   - Save as `public/og-image.jpg`
   - Image should include: Name, Title, and branding

### Social Media Preview

Test your Open Graph tags:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Performance Testing

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

