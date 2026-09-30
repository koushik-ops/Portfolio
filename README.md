# 🚀 Koushik Deb — Portfolio

A high-performance, animated portfolio website built with a modular HTML architecture, GSAP animations, Lenis smooth scrolling, and a custom 3D Orbit Carousel.

![Software Engineer · Java Developer](OG.png)

---

## ✨ Features

- **🎨 Immersive Animations** — Powered by GSAP with ScrollTrigger, DrawSVGPlugin, and SplitText for cinematic scroll-driven reveals.
- **🌀 3D Orbit Carousel** — A GPU-accelerated, interactive project showcase with smooth rotation and depth effects.
- **🧈 Smooth Scrolling** — Lenis-powered buttery-smooth scroll experience across all sections.
- **📱 Fully Responsive** — Optimized layouts for desktop, tablet, and mobile viewports.
- **⚡ Performance Optimized** — WebP images, hardware-accelerated CSS transforms, and minimal render-blocking resources.
- **🧩 Modular Architecture** — Section-based HTML with a custom Node.js build system for easy content management.

---

## 🛠️ Tech Stack

| Layer        | Technology                                      |
| ------------ | ----------------------------------------------- |
| **Markup**   | HTML5, Semantic Elements                        |
| **Styling**  | CSS3, Custom Properties, Glassmorphism          |
| **Scripts**  | Vanilla JavaScript (ES6+)                       |
| **Animation**| GSAP 3 (ScrollTrigger, DrawSVG, SplitText)      |
| **Scrolling**| Lenis Smooth Scroll                             |
| **Build**    | Node.js (Custom `build.js`)                     |
| **Server**   | Node.js (Express-based `server.js`)             |
| **Deploy**   | Vercel (Zero-config)                            |

---

## 📁 Project Structure

```
Portfolio/
├── css/                    # Stylesheets
│   └── alejandroha.css     # Main stylesheet with design tokens
├── js/
│   ├── custom-min.js       # Core animation & interaction logic
│   └── modules/
│       └── lenis-scroll.js # Smooth scroll configuration
├── sections/               # Modular HTML sections
│   ├── header.html         # Navigation bar
│   ├── hero.html           # Hero banner
│   ├── about.html          # About me section
│   ├── services.html       # Projects/services showcase
│   ├── portfolio.html      # 3D Orbit Carousel
│   ├── certification.html  # Education & credentials
│   ├── contact.html        # Contact form
│   └── footer.html         # Footer with social links
├── images/                 # Optimized image assets
├── fonts/                  # Custom web fonts
├── template.html           # Base HTML template
├── build.js                # Build script (assembles sections → index.html)
├── server.js               # Local development server
├── vercel.json             # Vercel deployment configuration
├── package.json            # Project metadata & scripts
└── index.html              # Generated output (do not edit manually)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/koushik-ops/Portfolio.git
cd Portfolio

# Install dependencies (if any)
npm install
```

### Development

```bash
# Build the index.html from sections
npm run build

# Start the local development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### How the Build Works

The project uses a custom build system (`build.js`) that:

1. Reads `template.html` as the base layout.
2. Scans for `<!-- INCLUDE:sections/filename.html -->` tokens.
3. Replaces each token with the corresponding section file content.
4. Outputs the final `index.html`.

> **⚠️ Important:** Never edit `index.html` directly — your changes will be overwritten on the next build. Always edit files in the `sections/` directory.

---

## 🌐 Deployment (Vercel)

This project is pre-configured for one-click Vercel deployment.

### Deploy via CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel
```

### Deploy via GitHub

1. Push to `main` branch on [GitHub](https://github.com/koushik-ops/Portfolio).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects the config from `vercel.json` — no setup needed.

### Custom Domain

After deployment, add a custom domain in **Vercel Dashboard → Settings → Domains** and update your DNS records:

| Type  | Name | Value                        |
| ----- | ---- | ---------------------------- |
| A     | @    | `76.76.21.21`                |
| CNAME | www  | `cname.vercel-dns.com`       |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

- **Email:** [koushik.deb.kd@gmail.com](mailto:koushik.deb.kd@gmail.com)
- **GitHub:** [@koushik-ops](https://github.com/koushik-ops)
- **Location:** Bengaluru, India

---

<p align="center">Built with ❤️ by Koushik Deb</p>
