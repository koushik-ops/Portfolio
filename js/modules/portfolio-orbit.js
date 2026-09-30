/**
 * Portfolio Orbit Carousel Module
 * Handles circular 3D rotation of portfolio project cards,
 * card expansion, active descriptions, arrow navigation, and keyboard controls.
 */

export function initPortfolioOrbit() {
  const container = document.querySelector('[data-portfolio-orbit-init]');
  if (!container || typeof gsap === 'undefined') return;

  const cards = Array.from(container.querySelectorAll('[data-orbit-card]'));
  const totalCountEl = container.querySelector('[data-portfolio-count="total"]');
  const currentCountEl = container.querySelector('[data-portfolio-count="current"]');
  const descriptions = Array.from(container.querySelectorAll('[data-portfolio-content]'));
  const orbitList = container.querySelector('[data-orbit-tiles-list]');

  if (!cards.length) return;

  const total = cards.length;
  if (totalCountEl) totalCountEl.textContent = String(total).padStart(2, '0');

  let activeIndex = 0;
  let currentStep = 0;
  let isOrbitActive = false;
  let isAutoplayPaused = false;
  const rotationState = { step: 0 };
  const baseRotation = { rotation: 0 };

  function updateCounter(index) {
    if (currentCountEl) {
      currentCountEl.textContent = String(index + 1).padStart(2, '0');
    }
  }

  function setActiveDescription(index) {
    descriptions.forEach((desc, i) => {
      if (i === index) {
        gsap.to(desc, { autoAlpha: 1, duration: 0.4, overwrite: true });
      } else {
        gsap.to(desc, { autoAlpha: 0, duration: 0.4, overwrite: true });
      }
    });
  }

  function navigate(direction) {
    activeIndex = (activeIndex + direction + total) % total;
    currentStep += direction;
    updateCounter(activeIndex);
    setActiveDescription(activeIndex);

    gsap.to(rotationState, {
      step: currentStep,
      duration: 0.7,
      ease: 'power3.out'
    });
  }

  // Navigation button clicks
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-portfolio-button]');
    if (!btn || !container.contains(btn)) return;
    const action = btn.getAttribute('data-portfolio-button');
    if (action === 'prev') {
      e.preventDefault();
      navigate(-1);
    } else if (action === 'next') {
      e.preventDefault();
      navigate(1);
    }
  });

  // Arrow key controls
  window.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const isInput = activeEl?.matches('input, textarea, select, [contenteditable="true"]');
    if (isInput) return;

    if (e.key === 'ArrowRight') {
      navigate(1);
    } else if (e.key === 'ArrowLeft') {
      navigate(-1);
    }
  });

  // Initialize first card
  updateCounter(0);
  setActiveDescription(0);
}
