# SEO & Open Graph Setup Guide

## What's Been Implemented

### ✅ SEO Metadata
- Enhanced metadata in `app/layout.tsx` with:
  - Open Graph tags for social media sharing
  - Twitter Card metadata
  - Structured keywords
  - Canonical URLs
  - Robot directives

### ✅ Dynamic Project Page Metadata
- Each project page (`/projects/[slug]`) now has:
  - Dynamic title and description
  - Project-specific Open Graph images
  - Twitter Card support
  - Canonical URLs

### ✅ Animations
- Framer Motion animations added to:
  - Hero section (name, avatar, bio, role info)
  - Project grids (staggered fade-in)
  - Community and personal projects
  - All animations use `viewport={{ once: true }}` for performance

## Required Actions

### 1. Create Open Graph Image
Create an Open Graph image at: `public/og-image.jpg`
- **Dimensions**: 1200x630px (recommended)
- **Format**: JPG or PNG
- **Content**: Your name, title, and a visual representation of your portfolio
- This will be used as the default OG image for all pages

### 2. Set Environment Variable (Optional)
Add to your `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

If not set, it defaults to `https://julianascimento.com`

### 3. Project Hero Images
For best SEO results, ensure each project in `data/projects.ts` has:
- `heroImage` field pointing to `/projects/{slug}-hero.jpg`
- These will be used as project-specific OG images

## Testing SEO

### Test Open Graph
- Use [Open Graph Debugger](https://developers.facebook.com/tools/debug/)
- Or [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Test Metadata
- View page source and check `<meta>` tags
- Use browser DevTools Network tab to verify image loading

## Performance Notes

- Animations use `viewport={{ once: true }}` to prevent re-animation on scroll
- All animations are subtle and performance-optimized
- Images are lazy-loaded where appropriate using Next.js Image component

