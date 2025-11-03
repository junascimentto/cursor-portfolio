# Deployment Guide

## Step 1: Push to GitHub

### Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `cursor-portfolio` (or your preferred name)
4. Description: "Portfolio website for Julia Nascimento"
5. Set to **Public** (or Private if you prefer)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Push Your Code

Run these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/cursor-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Import Project"**
4. Select your repository: `cursor-portfolio`
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: (leave default)
   - Install Command: `npm install`
6. Click **"Deploy"**
7. Wait for deployment to complete (usually 1-2 minutes)

## Step 3: Add Custom Domain

### In Vercel Dashboard:

1. Go to your project dashboard on Vercel
2. Click on **"Settings"** tab
3. Click **"Domains"** in the left sidebar
4. Enter your domain: `julianascimento.design`
5. Click **"Add"**

### Configure DNS Records

Vercel will show you DNS configuration instructions. You need to add these DNS records at your domain provider (where you bought `julianascimento.design`):

**For Root Domain (julianascimento.design):**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `76.76.21.21` (Vercel will provide this)

**Alternative - Use CNAME (recommended):**
- Type: `CNAME`
- Name: `@` (or leave blank)
- Value: `cname.vercel-dns.com` (Vercel will provide exact value)

**For WWW (www.julianascimento.design):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com` (Vercel will provide exact value)

### After DNS Configuration:

1. Wait for DNS propagation (can take up to 24-48 hours, usually much faster)
2. Vercel will automatically verify and configure SSL certificate
3. Your site will be live at `https://julianascimento.design`

## Step 4: Update Environment Variable (Optional)

After deployment, you can update the site URL in your code:

1. In Vercel Dashboard → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_SITE_URL` = `https://julianascimento.design`
3. Redeploy the project

This will update all Open Graph and SEO metadata to use your custom domain.

## Troubleshooting

### DNS Issues:
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- Verify records are correct at your domain registrar
- Wait 24-48 hours for full propagation

### Build Errors:
- Check Vercel build logs for errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel auto-detects)

### Custom Domain Not Working:
- Verify DNS records are correct
- Check SSL certificate status in Vercel dashboard
- Ensure domain is pointing to Vercel's servers

## Next Steps

After deployment:
1. Add your Open Graph image: `public/og-image.jpg` (1200x630px)
2. Add project images to `public/projects/`
3. Add avatar image: `public/avatar/julia-avatar.jpg`
4. Add company logos to `public/logos/`
5. Update project content in `data/projects.ts`
6. Test all pages and links

