# GradoHire

> **A Fresher's Job Portal. Without the 2-Year Experience Paradox.**  
> *"Why should a job require 2 years of experience in a technology that has existed for just 1 year? GradoHire connects freshers with opportunities that value potential, skills, and ambition."*

GradoHire is a modern, lightweight, and professional static job portal designed specifically for fresh university graduates, entry-level candidates, and early-career professionals.

---

## 🚀 Quick Start

### 1. Run Locally with Vite
```bash
# Install dependencies (only required once)
npm install

# Start local development server
npm run dev
```

The website will be live at `http://localhost:3000` (or the port indicated in your terminal).

### 2. Static / Zero-Dependency Serving
Because this is a pure static frontend (HTML5, Vanilla CSS3, ES Modules), you can serve it with any static web server:
```bash
# Using npx serve
npx serve .

# Or using Python's built-in web server
python -m http.server 8000
```

---

## 🎨 Brand Identity & Design System

- **Brand Name:** GradoHire
- **Tagline:** A Fresher's Job Portal. Without the 2-Year Experience Paradox.
- **Positioning:** A job portal built for freshers.
- **Primary Logo:** `gradohire-logo.png` & `Gradohire G logo.png` — modern forward-leaning "G" emblem mark in royal cornflower/periwinkle blue (`#4f75e2` / `#5b7ce2` / `#6383e8`).
- **Typography:**
  - Headings: `Outfit` (Modern, geometric, bold)
  - Body & UI: `Plus Jakarta Sans` (Clean, highly legible)
- **Color Palette:**
  - Primary Blue: `#4f75e2`
  - Periwinkle Blue: `#5b7ce2` / `#6383e8`
  - Deep Navy Typography: `#0a1128`
  - Background Neutral: `#ffffff`
  - Surface Neutral: `#f8fafc`
  - Border Accents: `#e2e8f0`

---

## 🌐 Central Configuration

Manage company channels and brand settings centrally in:

👉 **[`js/config.js`](./js/config.js)**

```javascript
export const CONFIG = {
  BRAND_NAME: "GradoHire",
  HEADLINE: "A Fresher's Job Portal. Without the 2-Year Experience Paradox.",
  SUPPORTING_MESSAGE:
    "Why should a job require 2 years of experience in a technology that has existed for just 1 year? GradoHire connects freshers with opportunities that value potential, skills, and ambition.",
  TAGLINE: "A job portal built for freshers.",

  SOCIAL_LINKS: {
    whatsapp: "https://whatsapp.com/channel/0029VbE8fquCBtxAqXgIpf38",
    linkedin: "https://www.linkedin.com/company/gradojobs",
    instagram: "",
    x: "",
  },
};
```

All CTA buttons and community badges automatically sync to this configuration. Optional platforms with empty strings (`""`) remain gracefully hidden.

---

## 📁 Project Structure

```
gradohire/
├── Gradohire G logo.png        # Original 4000x4000 brand logo asset
├── gradohire-logo.png          # High-resolution transparent logo mark
├── favicon.ico                 # Multi-resolution favicon
├── favicon-16x16.png           # 16x16 browser favicon
├── favicon-32x32.png           # 32x32 browser favicon
├── apple-touch-icon.png        # Apple touch icon
├── android-chrome-192x192.png  # PWA / Android 192 icon
├── android-chrome-512x512.png  # PWA / Android 512 icon
├── site.webmanifest            # Web app manifest
├── index.html                  # Main semantic HTML5 webpage
├── css/
│   └── style.css               # GradoHire design system & responsive styling
├── js/
│   ├── app.js                  # Navigation, sticky header, mobile drawer, scrollspy
│   └── config.js               # Central brand & channel configuration
└── package.json                # Project scripts & dependencies
```

---

## ⚡ Production Build

To produce an optimized production bundle:

```bash
npm run build
```

Assets will be output to the `dist/` directory, ready to deploy to GitHub Pages, Cloudflare Pages, Vercel, or Netlify.

---

## 📄 License
 HEAD
&copy; 2026 GradoJobs. All rights reserved.

#gradohire refinement from gradojobs

&copy; 2026 GradoHire. All rights reserved.
f6e3355 (repositioning into gradohire)
