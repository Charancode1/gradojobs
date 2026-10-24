# GradoJobs

> **“Your Career. Your Next Move.”**  
> Opportunities, internships, and career resources to help freshers and early-career graduates take their next step with confidence.

A clean, modern, and professional website for **GradoJobs**, a dedicated career-opportunities platform for freshers, final-year college students, and early-career professionals across India.

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
Because this is a pure static frontend (HTML5, Vanilla CSS3, ES Modules), you can also serve it with any static server or open it directly:
```bash
# Using npx serve
npx serve .

# Or using Python's built-in web server
python -m http.server 8000
```

---

## 🌐 Managing Distribution & Community Channels

All platform links and brand settings are managed centrally in:

👉 **[`js/config.js`](./js/config.js)**

```javascript
export const CONFIG = {
  BRAND_NAME: "GradoJobs",
  MOTTO: "Your Career. Your Next Move.",
  TAGLINE: "Your Career. Your Next Move.",
  SUPPORTING_MESSAGE:
    "Opportunities, internships, and career resources to help freshers and early-career graduates take their next step with confidence.",

  // Official Distribution & Community Channels
  SOCIAL_LINKS: {
    whatsapp: "https://whatsapp.com/channel/0029VbE8fquCBtxAqXgIpf38",
    linkedin: "https://www.linkedin.com/company/gradojobs",
    instagram: "", // Leave empty until official handle is launched
    x: "",         // Leave empty until official handle is launched
  },
};
```

All CTA buttons, channel badges, and community links across the website automatically bind to this central configuration. If an optional platform URL is empty, it is automatically hidden to avoid dead or broken links.

---

## 🎨 Brand Identity & Assets

- **Website Brand Logos:** `only logo.jpg` (clean, icon-only top-left navbar) and `full logo.jpg` (hero showcase card, about section, and footer).
- **Brand Typography:** Text logo styled with the exact gradient (`gradojobs`: navy, blue, orange, and purple gradient).
- **Browser Favicon:** `only logo.jpg` & cropped multi-resolution web assets (`favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`).
- **Color Palette:**
  - Navy: `#0a1128`
  - Azure Blue: `#0088ff`
  - Indigo/Purple: `#5b46e8` / `#9333ea`
  - Vibrant Coral/Orange: `#ff5b14`
  - WhatsApp Accent: `#25d366`

---

## 🌐 Free Static Deployment

This site can be deployed instantly to any free static hosting provider:

### GitHub Pages
1. Go to repository **Settings** &rarr; **Pages**.
2. Under **Build and deployment**, select source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. Click **Save**.

### Cloudflare Pages / Vercel / Netlify
- **Build command:** `npm run build` (or leave empty for direct static deploy)
- **Output directory:** `dist` (if using Vite build) or `.` (root directory)

---

## 📄 License
&copy; 2026 GradoJobs. All rights reserved.
