/**
 * Main Application Orchestrator
 * Imports and coordinates all modular features
 */

import { initLenis } from './modules/lenis-scroll.js';
import { initBracketHeading } from './modules/bracket-heading.js';
import { initTextAnimations } from './modules/text-animations.js';
import { initPortfolioOrbit } from './modules/portfolio-orbit.js';
import { initImageTrail } from './modules/image-trail.js';
import { initContactSection } from './modules/contact-section.js';
import { initFooterParallax, initDynamicCurrentYear } from './modules/footer-parallax.js';
import { initUIInteractions } from './modules/ui-interactions.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '%c Portfolio Initialized | Modular Architecture Active',
    'background: #111; color: #58a6ff; font-weight: bold; padding: 6px 12px; border-radius: 4px;'
  );

  // 1. Initialize Smooth Scrolling
  const lenis = initLenis();

  // 2. Initialize UI Interactions & Anchor Links
  initUIInteractions(lenis);

  // 3. Initialize Headings & Typography
  initBracketHeading();
  initTextAnimations();

  // 4. Initialize Interactive Portfolio Carousel
  initPortfolioOrbit();

  // 5. Initialize Mouse Image Trail (Desktop)
  initImageTrail();

  // 6. Initialize 3D Contact Section
  initContactSection();

  // 7. Initialize Footer Parallax & Current Year
  initFooterParallax();
  initDynamicCurrentYear();
});
