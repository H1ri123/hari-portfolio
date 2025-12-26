# Deployment Guide

## Option 1: Vercel (Recommended)
1.  **Push to GitHub**:
    *   Initialize git, commit, and push your code to a new repository.
2.  **Connect to Vercel**:
    *   Go to [vercel.com](https://vercel.com) and sign up/login.
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository.
3.  **Deploy**:
    *   Vercel will detect `Vite` automatically.
    *   Click "Deploy".
    *   Your site will be live in ~1 minute.

## Option 2: GitHub Pages
1.  **Install `gh-pages`**:
    *   Run `npm install gh-pages --save-dev`.
2.  **Update `package.json`**:
    *   Add `"homepage": "https://<your-username>.github.io/<repo-name>"`
    *   Add scripts:
        ```json
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
        ```
3.  **Update `vite.config.js`**:
    *   Set base URL: `base: '/<repo-name>/'`
4.  **Deploy**:
    *   Run `npm run deploy`.

## Local Development
- Run `npm run dev` to start the local server.
- Run `npm run build` to create a production build in `dist/`.
- Run `npm run preview` to test the production build locally.
