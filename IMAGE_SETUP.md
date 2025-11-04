# Image Setup Checklist

All image placeholders have been replaced with Next.js Image components. Just add your files to the folders below!

## 📁 Folder Structure Created

```
public/
├── projects/          ✅ Created
├── logos/            ✅ Created
├── avatar/           ✅ Created
└── videos/           ✅ Created
```

---

## ✅ Images Ready to Add

### 1. **Company Logos** (Designed For Section)
**Location:** `public/logos/`

**Files needed:**
- `logo-1.svg` (or `.png`) - Recommended size: 300x97px
- `logo-2.svg` - Recommended size: 231x63px
- `logo-3.svg` - Recommended size: 358x91px
- `logo-4.svg` - Recommended size: 251x39px
- `logo-5.svg` - Recommended size: 124x73px

**Note:** Logos can be SVG or PNG. SVG is preferred for scalability. If using PNG, use transparent backgrounds.

---

### 2. **About Me Image** (Homepage)
**Location:** `public/`

**File needed:**
- `about-me.jpg` (or `.png`, `.webp`)

**Recommended dimensions:** 800-1200px wide, 600-900px tall

**Already configured in:** `app/page.tsx` line 238

---

### 3. **Avatar Image** (About Page)
**Location:** `public/avatar/`

**File needed:**
- `julia-avatar.jpg` (or `.png`)

**Recommended dimensions:** Square, 400x400px or larger (will be cropped to circle)

**Already configured in:** `app/about/page.tsx` line 28

---

### 4. **Project Images**

**Location:** `public/projects/`

#### For each project, add 2 images:

**Thumbnail** (for project cards):
- `{project-slug}.jpg`

**Hero** (for project detail pages):
- `{project-slug}-hero.jpg`

#### Project Slugs (from `data/projects.ts`):

| Slug | Thumbnail | Hero Image |
|------|-----------|------------|
| `openai-widget` | `openai-widget.jpg` | `openai-widget-hero.jpg` |
| `white-label-ai-builder` | `ai-builder.jpg` | `ai-builder-hero.jpg` |
| `invoices` | `invoices.jpg` | `invoices-hero.jpg` |
| `user-journey` | `user-journey.jpg` | `user-journey-hero.jpg` |
| `developers-tool` | `developers-tool.jpg` | `developers-tool-hero.jpg` |
| `design-system` | `design-system.jpg` | `design-system-hero.jpg` |
| `salesforce-features` | `salesforce.jpg` | `salesforce-hero.jpg` |
| `payments` | `payments.jpg` | `payments-hero.jpg` |
| `vision-activation` | `vision.jpg` | `vision-hero.jpg` |
| `product-library` | `product-library.jpg` | `product-library-hero.jpg` |
| `a11y-training` | `a11y.jpg` | `a11y-hero.jpg` |
| `partnership-awareness` | `partnership.jpg` | `partnership-hero.jpg` |
| `insurance-discovery` | `insurance.jpg` | `insurance-hero.jpg` |
| `campaign-tool` | `campaign.jpg` | `campaign-hero.jpg` |

**Total:** 28 project images (14 thumbnails + 14 hero images)

**Already configured in:** Project images are handled by `ProjectCard` component and project detail pages.

---

### 5. **Open Graph Image** (SEO)
**Location:** `public/`

**File needed:**
- `og-image.jpg`

**Required dimensions:** 1200x630px (exact)

**Already configured in:** `app/layout.tsx` line 60

---

### 6. **Video Files** (Optional)
**Location:** `public/videos/`

**File needed:**
- `hero-video.mp4` (for hero section)

**Note:** Video component not yet implemented. When ready, add to `app/page.tsx` line 18.

---

## 🎯 Quick Start

1. **Add company logos** → `public/logos/logo-1.svg` through `logo-5.svg`
2. **Add about image** → `public/about-me.jpg`
3. **Add avatar** → `public/avatar/julia-avatar.jpg`
4. **Add OG image** → `public/og-image.jpg` (1200x630px)
5. **Add project images** → `public/projects/{slug}.jpg` and `{slug}-hero.jpg`

---

## 📝 Notes

- All images use Next.js `Image` component for optimization
- Images are lazy-loaded (except hero images)
- SVG logos use `object-contain` to preserve aspect ratio
- Project images use `object-cover` for consistent sizing
- Avatar uses `object-cover` with circular crop

---

## ✅ Status

- ✅ Code updated to use Image components
- ✅ Folder structure created
- ✅ All paths configured correctly
- ⏳ Waiting for image files to be added

---

**Once you add the images, they'll automatically appear on the site!**

