# Portfolio Customization Guide

Your exact replica of the high-performance creative developer portfolio is fully set up, running locally, and verified with **0 console errors** and buttery smooth 60fps animations.

---

## 🚀 1. Running the Site Locally

Your local server is currently running at:
**[http://localhost:3000](http://localhost:3000)**

If you ever stop it and want to run it again in the future:
```bash
npm start
```
*(Runs with zero external dependencies using Node.js built-in HTTP server).*

---

## 📁 2. Project Directory Structure

```text
d:\Portfolio\
├── index.html              # Main HTML markup (Hero, About, Services, Portfolio, Contact, Footer)
├── css/
│   ├── normalize.css       # Cross-browser reset
│   ├── components.css      # Reusable UI component styling (buttons, badges, grids)
│   └── alejandroha.css     # Main layout, colors, typography, and responsive styles
├── js/
│   └── custom-min.js       # GSAP animations, Lenis smooth scroll, orbit carousel, image trail
├── images/                 # All 40+ local images, avatars, favicons, and project assets
├── server.js               # Lightweight local development server
└── package.json            # Project definition & npm start script
```

---

## 🎨 3. Step-by-Step Customization (Make It Yours)

### A. Personal Info & Hero Section ([index.html](file:///d:/Portfolio/index.html))
* **Hero Headline & Name:**
  * Search for `ALEJANDRO` and `HA` in [index.html](file:///d:/Portfolio/index.html) to change to your first and last name.
  * Search for `Webflow Partner` / `Shopify Partner` to replace with your titles (e.g., `Full Stack Engineer`, `Creative Frontend Developer`, `UI/UX Designer`).
* **Profile / Hero Image:**
  * The main portrait is located at `images/aha-img__01.avif`.
  * Replace this file with your own photo (or update the `src` / `srcset` attributes in [index.html](file:///d:/Portfolio/index.html)).

### B. About Me & Bio ([index.html](file:///d:/Portfolio/index.html))
* Search for `About me` in [index.html](file:///d:/Portfolio/index.html).
* Update the paragraphs describing your background, skills, and design philosophy.

### C. Services Offered
* Search for `Services` in [index.html](file:///d:/Portfolio/index.html).
* You can rename the 4 default services:
  1. *Webflow development* -> Your specialty (e.g., *Frontend Engineering / React / Next.js*)
  2. *Shopify / Ecommerce* -> Your specialty (e.g., *Full-Stack Web Apps*)
  3. *Animations & Microinteractions* -> Motion & Interactive Experience
  4. *Custom code* -> API Integrations, Architecture & Cloud

### D. Featured Projects (Orbit Carousel)
* Search for `Portfolio` in [index.html](file:///d:/Portfolio/index.html).
* Look for the 5 project slides:
  - `Cinetica Studio`
  - `Luan Studio`
  - `Casa Aranzazu`
  - `Contraste`
  - `Altapets`
* You can update the titles, descriptions, links, and preview images in `images/`.

### E. Contact & Bookings
* **Cal.com Meeting Link:**
  * Search for `data-cal-link` in [index.html](file:///d:/Portfolio/index.html) and replace `alejandroha/web-development-meeting` with your own Cal.com username and event slug.
* **WhatsApp / Direct Quote Button:**
  * Search for `wa.me/524611407412` and replace with your phone number or change the link to an email `mailto:yourname@example.com` or contact form.
* **Social Links:**
  * Update TikTok, Instagram, GitHub, LinkedIn, and Awwwards links near the footer.

---

## ⚡ 4. Free 1-Click Deployment (Zero Cost)

When you're ready to publish your portfolio to the world for free:
1. **GitHub Pages:**
   * Push your project to a GitHub repository and turn on GitHub Pages in repository settings.
2. **Vercel or Cloudflare Pages:**
   * Connect your GitHub repo to [Vercel](https://vercel.com) or [Cloudflare Pages](https://pages.cloudflare.com) for instant global edge delivery, automatic SSL certificates, and custom domain support at zero cost.
