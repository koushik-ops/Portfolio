/**
 * UI Interactions Module
 * Handles magnetic button hover effects, Cal.com embed triggers, and smooth anchor scrolling.
 */

export function initUIInteractions(lenisInstance) {
  // 1. Smooth Scroll to Anchor Links [data-anchor-target]
  document.querySelectorAll('[data-anchor-target]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSelector = btn.getAttribute('data-anchor-target');
      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        if (lenisInstance) {
          lenisInstance.scrollTo(targetEl, { offset: 0, duration: 1.2 });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 2. Interactive Buttons (Button-007)
  const buttons = document.querySelectorAll('.button-007');
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('is--active');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('is--active');
    });
  });

  // 3. Cal.com meeting booking popup trigger
  document.querySelectorAll('[data-cal-link]').forEach((calBtn) => {
    calBtn.addEventListener('click', (e) => {
      const calLink = calBtn.getAttribute('data-cal-link');
      if (typeof Cal !== 'undefined') {
        Cal('open', { link: calLink });
      } else {
        window.open(`https://cal.com/${calLink}`, '_blank');
      }
    });
  });
}
