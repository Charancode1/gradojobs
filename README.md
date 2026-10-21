# GradoJobs — Official Static Website

A clean, modern, and professional static website for **GradoJobs**, a WhatsApp-based job-sharing channel focused on freshers, final-year students, and early-career graduates in India.

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

## 📱 Updating the WhatsApp Channel URL

The WhatsApp Channel link is managed centrally in one file:

👉 **[`js/config.js`](./js/config.js)**

```javascript
export const CONFIG = {
  // Official WhatsApp Channel link
  WHATSAPP_CHANNEL_URL: "https://whatsapp.com/channel/0029VbE8fquCBtxAqXgIpf38",
  ...
};
```

All "Join WhatsApp Channel" buttons and CTAs across the entire website will automatically route to the updated URL in a new tab.

---

## 🎨 Brand Identity & Assets

- **Website Brand Logo:** `full logo.jpg` — Used natively across the header, hero showcase, about section, and footer.
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
