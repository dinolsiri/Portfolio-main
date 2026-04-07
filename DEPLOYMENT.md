# Portfolio Deployment Guide

Your portfolio has been successfully built and is production-ready. Follow these steps to deploy to GitHub Pages.

## Prerequisites
- GitHub account
- Git installed locally
- The `/out/` directory (already generated from `npm run build`)

## Deployment Options

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a GitHub repository** (if you don't have one):
   - Go to https://github.com/new
   - Name it `Portfolio` or any preferred name
   - Make it public
   - Click "Create repository"

2. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Under "Build and deployment"
   - Set Source to "Deploy from a branch"
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"
   - **Alternative**: Use GitHub Actions (see below)

4. **GitHub Actions Setup** (Automatic Deployment):
   - Create `.github/workflows/deploy.yml` with the provided configuration
   - Push to trigger automatic builds and deployments
   - Your site will be live at `https://YOUR_USERNAME.github.io/Portfolio`

### Option 2: Deploy to Vercel (Easiest)

1. Go to https://vercel.com/import
2. Connect your GitHub account
3. Select this repository
4. Click "Deploy"
5. Your site will be live instantly at a Vercel URL

### Option 3: Deploy to Netlify

1. Go to https://app.netlify.com/start
2. Connect your GitHub account
3. Select this repository
4. Set Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Click "Deploy site"

## GitHub Actions Workflow (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write

    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      
      - uses: actions/upload-pages-artifact@v3
        with:
          path: 'out'
      
      - uses: actions/deploy-pages@v4
```

## After Deployment

### Custom Domain (Optional)
1. Purchase a domain from Namecheap, GoDaddy, etc.
2. In GitHub Pages settings, add your custom domain
3. Configure DNS records as instructed by GitHub
4. Enable HTTPS

### Monitor Performance
- Use Google Analytics to track visitors
- Monitor Core Web Vitals in Google Search Console
- Check mobile responsiveness via Google Mobile-Friendly Test

## Troubleshooting

**Routes not working?**
- Ensure `trailingSlash: true` is set in next.config.ts ✅

**Images not loading?**
- Check that `images.unoptimized: true` is set ✅

**Assets not loading?**
- Ensure basePath is configured correctly for your repo ✅

## Project Details

- **Framework**: Next.js 15.1.6
- **Styling**: Tailwind CSS
- **Build Output**: Static HTML (fully prerendered)
- **Deployment**: Ready for any static host

---

**Your portfolio is production-ready! Deploy now and start showcasing your work.** 🚀
