# SMART BATTLE - Esports Tournament APK Website

> **"PLAY HARDLY WIN SMARTLY"**

Official responsive APK distribution and tournament platform landing website for **SMART BATTLE**, built for competitive squad and solo mobile gamers on Android.

---

## 🎯 Features

- **Authentic Brand Identity**: Original SMART BATTLE esports crest, exact tagline, and esports visual hierarchy with dark navy, white, and electric blue accents.
- **Genuine Esports Focus**: Tournament bracket schedules, automated match room & slot dispatch, strict fair-play anti-cheat standards, and squad roster management.
- **Android Sideload Walkthrough**: Step-by-step guidance for Android users explaining unknown source security prompts and verification.
- **Configurable APK Download Center**:
  - Clear **"APK Coming Soon"** state while the release is in final QA.
  - Ready-to-hook `apkDownloadUrl` setting in `src/config/appConfig.ts`.
  - Notification pre-registration for interested players.
- **Referral Parameter Support**: Automatically parses, preserves, and displays `?ref=` and `?referral=` query codes, with an integrated link generator.
- **Editable Legal Placeholders**: Privacy Policy, Terms of Service, Fair Play Rules, and Support modals ready for production customization.
- **Responsive & Accessible**: Optimized for mobile Android viewports, high contrast, and keyboard navigation.

---

## 🚀 How to Sync & Push to GitHub (`smart-battle-download`)

To push this project to your GitHub repository named **`smart-battle-download`**, run the following in your terminal:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage and commit all files
git add .
git commit -m "Fix Vite and esbuild dependency conflict for Cloudflare Pages"

# 3. Rename branch to main
git branch -M main

# 4. Link your remote repository
git remote add origin https://github.com/SMRT-bit123/SMART-BATTLE-DOWNLOAD.git

# 5. Push to GitHub
git push -u origin main
```

---

## 🔗 Direct APK Download URL

The website is connected directly to your official Android APK file:

```typescript
export const APP_CONFIG: AppConfig = {
  appName: 'SMART BATTLE',
  tagline: 'PLAY HARDLY WIN SMARTLY',
  version: '1.0.0',
  status: 'ready',
  apkDownloadUrl: 'https://github.com/SMRT-bit123/Smart-battle-website/raw/refs/heads/main/smart_battle.apk',
  ...
};
```

All visible **"Download APK"** buttons on the site immediately trigger the direct download of `smart_battle.apk` for Android devices.

---

## 🌐 Free Static Hosting Options

This project is built with Vite and React SPA. You can host it for free on:

### 1. Cloudflare Pages (Recommended)
- Connect repository `smart-battle-download`.
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

### 2. Vercel
- Import repository from GitHub.
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

### 3. GitHub Pages
- Go to repository **Settings** > **Pages**.
- Source: **GitHub Actions** with the standard Vite / Static HTML workflow.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Test build
npm run build
```
