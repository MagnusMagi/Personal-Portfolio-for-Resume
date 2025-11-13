# Style System Documentation

This document outlines the style improvements and design system implemented in the project.

## 🎨 Design System

### Color System

All colors are defined as CSS variables for consistency and easy theming:

```css
:root {
  --color-primary: #121212;      /* AAA: 16.6:1 on white */
  --color-secondary: #6b6b6b;    /* AA: 4.5:1 on white */
  --color-accent: #0099ff;        /* AA: 4.5:1 on white */
  --color-border: #e8e8e8;
  --color-bg-light: #f5f5f5;
  --color-text-muted: #5a5a5a;    /* AAA: 7:1 on white */
  --color-white: #ffffff;
}
```

### Typography System

The project uses a comprehensive typography system with utility classes:

#### Font Families
- **Sans-serif**: Ubuntu (primary font)
- **Monospace**: Geist Mono (for section titles and small technical text)

#### Typography Classes

- `.text-section-title` - Section headings (uppercase, monospace)
- `.text-heading-1` - Main headings (h1)
- `.text-heading-2` - Secondary headings (h2)
- `.text-body` - Body text
- `.text-body-small` - Small body text
- `.text-mono-small` - Small monospace text (header info)

All typography classes are responsive with three breakpoints:
- Mobile (default)
- Tablet (640px+)
- Desktop (1024px+)

### Spacing System

Consistent spacing using Tailwind's spacing scale:
- Responsive padding: `px-4 sm:px-6 lg:px-8`
- Responsive margins: `mt-12 sm:mt-16 lg:mt-20`
- Responsive gaps: `gap-3 sm:gap-4`

## ♿ Accessibility Features

### WCAG Compliance

- **Contrast Ratios**: All text meets WCAG AA/AAA requirements
- **Font Sizes**: Minimum 14px for normal text, 16px recommended
- **Line Height**: Minimum 1.5 for all text
- **Text Resize**: Supports up to 200% zoom using rem units
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

### Focus States

All interactive elements have visible focus indicators:

```css
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 4px;
}
```

## 🎭 Animations

### Scroll Reveal

Framer Motion is used for scroll-triggered animations:
- Fade-in effects
- Slide-up animations
- Staggered delays for list items
- Viewport-based triggering

### Hover Effects

- Links: Smooth color transitions
- Tools cards: Scale effect on hover
- Skills badges: Background color change
- Certifications: Arrow rotation on hover

## 📱 Responsive Design

### Breakpoints

- **Mobile**: Default (< 640px)
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

### Responsive Patterns

- Font sizes scale up on larger screens
- Spacing increases on larger screens
- Layout adapts (e.g., flex-col → flex-row)
- Grid columns adjust (2 → 3 → 5 for tools)

## 🎯 Best Practices

### CSS Organization

1. CSS Variables for colors and design tokens
2. Utility classes for typography
3. Component-specific styles in component files
4. Global styles in `globals.css`

### Performance

- Font optimization with `display: swap`
- Image optimization with Next.js Image component
- Code splitting with Next.js
- Lazy loading for animations
- Image priority for above-the-fold content
- Lazy loading for below-the-fold images

### Maintainability

- Consistent naming conventions
- Reusable components
- TypeScript for type safety
- Clear documentation

## 🔍 SEO Integration

The style system is designed with SEO in mind:

- **Semantic HTML**: All components use proper semantic tags
- **Alt Texts**: All images have descriptive alt attributes
- **ARIA Labels**: Interactive elements have proper aria-label attributes
- **Heading Hierarchy**: Proper h1, h2, h3 structure
- **Meta Tags**: Comprehensive meta tags in layout.tsx
- **Structured Data**: JSON-LD schemas for rich snippets
