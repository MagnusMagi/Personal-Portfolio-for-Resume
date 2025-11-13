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

