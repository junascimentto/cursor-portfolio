# Portfolio Website Implementation Plan

## Overview

Portfolio website for Julia Nascimento built with Next.js 16, Tailwind CSS v4, and Fluent UI React v9. The design matches Figma specifications with a monochrome, enterprise aesthetic featuring sharp corners and structured layouts.

## Core Design System (From Figma)

### Color Palette
- **Primary Text**: `#262626` (Foreground/Default)
- **Secondary Text**: `#6D6A7D`, `#6B6B6B` (Text/Foreground Alt)
- **Disabled Text**: `#A2A2A2` (Foreground/Disabled)
- **Accent Color**: `#E75C3B` (Section headers, highlights)
- **Backgrounds**: `#FFFFFF` (Primary), `#F5F5F5` (Alt sections)
- **Accent Colors**: 
  - Orange: `#FB7759`
  - Green: `#549082`
  - Blue: `#1D47CD`
- **Project Backgrounds**: 
  - Background 1: `#DAEFFF` (Light Blue)
  - Background 2: `#F2DCFF` (Light Purple)
  - Background 3: `#FFFFF1` (Light Yellow/Cream)
  - Background 4: `#ECE2D7` (Beige/Tan)
  - Background 5: `#ECD7E8` (Light Lavender)

### Typography System
- **Font Families**:
  - Avenir (Primary - weights: 900, 800, 300)
  - Avenir Next (Secondary - weights: 700, 400)
  - Inter (Support - weights: 400)
  - Work Sans (UI - weights: 700, 500, 400)

- **Microsoft Fluent UI Typography Scale** (Applied):
  
  **Display Styles:**
  - Display Large: 80px, weight 800, line-height 109px (Avenir) - Used for hero titles
  - Display Medium: 68px, weight 900, line-height 130% (Avenir) - Used for section titles
  
  **Title Styles:**
  - Title 1: 42px, weight 700, line-height 140% (Work Sans) - Major headings
  - Title 2: 32px, weight 500, line-height 140% (Work Sans) - Section labels, subheadings
  - Title 3: 28px, weight 600, line-height 140% (Avenir Next) - Card titles
  
  **Subtitle:**
  - Subtitle 1: 20px, weight 400, line-height 140% (Inter) - Supporting text
  
  **Body Styles:**
  - Body 1: 32px, weight 300, line-height 137.5% (Avenir) - Large body text
  - Body 2: 18px, weight 400, line-height 120% (Avenir Next) - Standard body text
  - Body 3: 16px, weight 400, line-height 125% (Inter) - Smaller body text
  - Body 4: 14px, weight 400, line-height 140% (Inter) - Compact text
  
  **Caption:**
  - Caption: 12px, weight 400, line-height 133% (Inter) - Fine print, labels
  
  **Note:** Current Figma implementation uses custom sizes that align with Fluent UI principles but match exact design specs.

### Spacing System
- **Section Gaps**: 120px (main sections), 99px (sub-sections)
- **Large Gaps**: 74px, 64px (between major elements)
- **Medium Gaps**: 48px (project grid), 40px, 34px, 24px
- **Small Gaps**: 16px, 12px (list items), 10px, 8px, 7px
- **Padding**: 64px (section padding), 32px (container padding), 8px

### Border Radius
- **All corners**: Sharp (0px) - design system requirement
- **Circular elements**: Only for avatars and icons using `rounded-full` (9999px)
- **Design tokens**: `--radius-sharp: 0px`, all Tailwind radius utilities set to 0

### Layout Specifications
- **Max Container Width**: 1728px (centered)
- **Responsive Breakpoints**: Standard Tailwind breakpoints
- **Section Backgrounds**: Alternating white and `#F5F5F5`
- **Content Alignment**: Left-aligned text, centered containers

## Implementation Changes

### 1. Design Tokens (`app/globals.css`)
✅ **Completed**
- Added all Figma color tokens as CSS custom properties
- Added custom spacing utilities (gap-120, gap-99, gap-74)
- Configured border radius tokens: all set to 0px (sharp corners)
- Kept `rounded-full` exception for circular elements only

### 2. Font Configuration (`app/layout.tsx`)
✅ **Completed**
- Added Inter and Work Sans from Google Fonts
- Configured Avenir and Avenir Next with local font fallbacks
- Set up font variables for use throughout the app
- Updated body font stack to prioritize Avenir

### 3. Homepage Structure (`app/page.tsx`)
✅ **Completed**
- **Video Header Section**: Full-width background `#EBEBEB`, 665px height
- **About Section**: 
  - Hero title "Julia Nascimento" (80px Avenir 800)
  - Avatar (57.47px circular)
  - Bio text with icon list (location, experience, domains)
  - Role information (Booking.com, teams)
  - "DESIGNED FOR" section with logo placeholders
  - About Me content with image placeholder
- **Work Section**: 
  - Background `#F5F5F5`
  - "WORK" label and "Projects overview" title
  - Grid of 15 project cards with colored backgrounds
  - NDA disclaimer text
- **Community Section**: Design community projects
- **Personal Projects Section**: Personal work showcase
- **Social Links**: LinkedIn, Medium, Email

### 4. Projects Page (`app/projects/page.tsx`)
✅ **Completed**
- Updated to match Figma project card design
- Same grid layout as homepage work section
- Sharp corners on all project cards
- Typography matches Figma specifications

### 5. About Page (`app/about/page.tsx`)
✅ **Completed**
- Rebuilt with Figma content structure
- Includes bio, icon list, and role information
- Matches homepage about section styling

### 6. Contact Page (`app/contact/page.tsx`)
✅ **Completed**
- Updated styling to match design system
- Uses correct fonts (Work Sans, Avenir, Inter)
- Colors match Figma specifications

### 7. Navigation (`components/Navbar.tsx`)
✅ **Completed**
- Sticky positioning maintained
- Updated colors: `#262626` primary, `#6D6A7D` hover
- Typography: Avenir for logo, Work Sans for nav items
- Sharp corners (removed rounded-md)
- Max-width: 1728px

### 8. Footer (`components/Footer.tsx`)
✅ **Completed**
- Minimal styling matching monochrome theme
- Text color: `#A2A2A2` (disabled color)
- Typography: Work Sans
- Max-width: 1728px

## Technical Details

### Dependencies
- Next.js 16.0.1
- Tailwind CSS v4
- Fluent UI React v9 (`@fluentui/react-components`)
- React 19.2.0
- TypeScript 5

### Key Features
- All corners are sharp (0px border-radius) except circular icons/avatars
- Font loading: Inter and Work Sans from Google Fonts, Avenir via local/CDN
- Server Components by default (client components only where needed)
- Static site generation for all routes
- Responsive design with mobile-first approach

### File Structure
```
app/
  layout.tsx (fonts, theme provider, navbar, footer)
  page.tsx (complete Figma homepage structure)
  projects/page.tsx (Figma project grid)
  about/page.tsx (Figma about content)
  contact/page.tsx (contact info)
  globals.css (design tokens, spacing, border radius)
components/
  Navbar.tsx (sticky nav, sharp corners)
  Footer.tsx (minimal footer)
  ThemeProvider.tsx (Fluent UI wrapper)
  monochromeTheme.ts (grayscale theme)
```

## Implementation Status

### ✅ Completed
- [x] Design tokens (colors, spacing, border radius)
- [x] Font configuration
- [x] Homepage complete structure
- [x] Projects page with Figma design
- [x] About page with Figma content
- [x] Contact page styling
- [x] Navbar styling updates
- [x] Footer styling updates
- [x] Sharp corners implementation
- [x] Build verification (no errors)

### 🔄 Pending
- [ ] Add actual images (avatar, project images, company logos, about image)
- [ ] Implement video header component
- [ ] Link social media URLs (LinkedIn, Medium)
- [ ] Ensure Avenir fonts are properly loaded (add font files if needed)
- [ ] Add hover states and transitions where appropriate
- [ ] Implement responsive breakpoints for mobile

## Design Principles Applied

1. **Sharp Corners**: All containers, cards, and UI elements use 0px border-radius
2. **Monochrome Palette**: Grayscale with accent color (#E75C3B) for labels
3. **Generous Whitespace**: Large gaps (120px, 64px) between sections
4. **Typography Hierarchy**: Clear size and weight differentiation
5. **Enterprise Aesthetic**: Professional, structured, minimal
6. **Max Width Consistency**: 1728px container width throughout

## Notes

- All border-radius removed except for circular elements (avatars, icons)
- Design tokens are centralized in `globals.css` for easy maintenance
- Typography uses inline styles where needed to match exact Figma specs
- Color values match Figma hex codes exactly
- Spacing values match Figma measurements (px values used directly)

