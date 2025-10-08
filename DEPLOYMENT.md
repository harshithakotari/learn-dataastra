# Deployment Guide - Learn DataAstra

## GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed locally

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `learn-dataastra`
2. Do **NOT** initialize with README, .gitignore, or license (we already have these)

### Step 2: Push Your Code

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/learn-dataastra.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy your site

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, your site will be live at:

```
https://YOUR_USERNAME.github.io/learn-dataastra/
```

### Alternative: Manual Deployment with gh-pages

If you prefer manual deployment:

```bash
# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build the production version
2. Create a `gh-pages` branch
3. Push the built files to that branch
4. GitHub will automatically serve from the `gh-pages` branch

Then enable GitHub Pages:
1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: gh-pages / (root)

## Adding Roadmap Images

To display roadmap images instead of placeholders:

1. Create PNG files for each role
2. Place them in `/public/assets/roadmaps/` with these exact names:
   - `bi-analyst.png`
   - `data-analyst.png`
   - `data-engineer.png`
   - `data-scientist.png`
   - `ml-engineer.png`
   - `ai-engineer.png`
   - `ui-ux-designer.png`
   - `backend-engineer.png`

3. Commit and push:
```bash
git add public/assets/roadmaps/
git commit -m "Add roadmap images"
git push
```

The GitHub Actions workflow will automatically redeploy.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain:
```
www.yourdomain.com
```

2. Update the `base` in `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // Change from '/learn-dataastra/' to '/'
  // ... rest of config
})
```

3. Configure your domain's DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

4. In GitHub Settings → Pages, add your custom domain

## Troubleshooting

### 404 on Page Refresh

If you get 404 errors when refreshing on routes other than home, create a `404.html` in the `public/` directory that redirects to `index.html`. This is already handled by the Vite build.

### Assets Not Loading

Make sure the `base` in `vite.config.ts` matches your deployment path:
- GitHub Pages (project): `/learn-dataastra/`
- GitHub Pages (user/org): `/`
- Custom domain: `/`

### Build Fails

Common issues:
- TypeScript errors: Run `npm run typecheck` to find issues
- Linting errors: Run `npm run lint` to find issues
- Missing dependencies: Run `npm install` to ensure all deps are installed

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Lint
npm run lint
```

## Support

For issues or questions, please refer to:
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

