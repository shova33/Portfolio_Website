# Deployment Instructions

Your portfolio has been built and configured for deployment! Follow these easy steps to host it live for free on **Vercel** or **GitHub Pages**.

## 1. Initialize Git Repository

First, you need to turn your project folder into a Git repository and commit your code. Run the following commands in this current directory (`c:\Users\shova\OneDrive\Desktop\Portfolio`):

```bash
git init
git add .
git commit -m "Initial commit: Portfolio setup"
```

Next, create a new repository on [GitHub](https://github.com/new). Once created, copy the repository URL and link it to your local project:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## 2. Deploy to Vercel (Recommended, Easiest)

Vercel is the creator of Next.js and has top-tier support for Vite React apps.

### Option A: Deploy via Vercel Dashboard
1. Go to [Vercel](https://vercel.com/) and sign up/log in with your GitHub account.
2. Click **"Add New..." -> "Project"**.
3. Import your newly created GitHub repository (`YOUR_REPO_NAME`).
4. Vercel will auto-detect that it is a **Vite** project.
5. Click **"Deploy"**. Within seconds, your site will be live!

### Option B: Deploy via Vercel CLI (Directly from Terminal)
If you want to deploy directly from your VS Code terminal:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run the Vercel command in your project directory:
   ```bash
   vercel
   ```
3. Follow the prompts (log in if asked, link to existing project: No, etc).
4. Run `vercel --prod` to deploy to production.

---

## Alternative: Deploy to GitHub Pages

If you prefer to keep everything on GitHub, you can use GitHub Pages.

1. Install `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Open your `package.json` file and add a `homepage` field at the top level:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
   ```

3. In the same `package.json` file, update your `scripts` to include these two:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Since you are using Vite, you also need to update `vite.config.js` to set the base path to your repository name:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     base: '/YOUR_REPO_NAME/'
   })
   ```

5. Deploy by running:
   ```bash
   npm run deploy
   ```
6. Your portfolio will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`!
