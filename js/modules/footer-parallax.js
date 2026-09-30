/**
 * Footer Parallax & Current Year Module
 * Reveals the footer with fixed parallax depth and auto-updates copyright year.
 */

export function initFooterParallax() {
  const footerWrap = document.querySelector('[data-footer]');
  const footerInner = document.querySelector('[data-footer-inner]');

  if (footerWrap && footerInner && typeof gsap !== 'undefined') {
    gsap.matchMedia().add('(min-width: 768px)', () => {
      gsap.from(footerInner, {
        yPercent: -100,
        ease: 'linear',
        scrollTrigger: {
          trigger: footerWrap,
          start: 'clamp(top bottom)',
          end: 'clamp(top top)',
          scrub: true
        }
      });
    });
  }
}

export function initDynamicCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = currentYear;
  });
}
