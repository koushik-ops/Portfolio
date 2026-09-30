/**
 * 3D Contact Section Module
 * Animates multilingual "Contact" words floating through 3D Z-depth space on scroll.
 */

export function initContactSection() {
  const contactSections = document.querySelectorAll('[data-contact]');
  if (!contactSections.length || typeof gsap === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const words = [
    'CONTACTO', 'CONTACT', 'CONTACTEZ', 'CONTATTO', 'KONTAKT',
    'CONTATO', 'CONTACT', 'ΕΠΙΚΟΙΝΩΝΙΑ', '連絡', '연락', 'تواصل'
  ];

  const positions = [
    { x: -38, y: -38 }, { x: -14, y: -40 }, { x: 14, y: -40 }, { x: 38, y: -38 },
    { x: -42, y: -14 }, { x: -18, y: -18 }, { x: 18, y: -18 }, { x: 42, y: -14 },
    { x: -42, y: 14 },  { x: -18, y: 18 },  { x: 18, y: 18 },  { x: 42, y: 14 },
    { x: -38, y: 38 },  { x: -14, y: 40 },  { x: 14, y: 40 },  { x: 38, y: 38 }
  ];

  contactSections.forEach((section) => {
    if (section.hasAttribute('data-contact-initialized')) return;
    const content = section.querySelector('[data-contact-content]');
    const wordsContainer = section.querySelector('[data-contact-words]');
    if (!content || !wordsContainer) return;

    section.setAttribute('data-contact-initialized', '');

    gsap.set(content, {
      autoAlpha: 0,
      yPercent: 25,
      scale: 0.96,
      filter: 'blur(0.5rem)'
    });

    const contentTween = gsap.to(content, {
      autoAlpha: 1,
      yPercent: 0,
      scale: 1,
      filter: 'blur(0rem)',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'top 25%',
        scrub: true,
        invalidateOnRefresh: true
      }
    });

    if (prefersReducedMotion) {
      contentTween.progress(1);
      gsap.set(content, { autoAlpha: 1, yPercent: 0, scale: 1, filter: 'blur(0rem)' });
      return;
    }

    const spanElements = [];
    wordsContainer.innerHTML = '';

    for (let i = 0; i < 50; i++) {
      const span = document.createElement('span');
      span.setAttribute('data-contact-word', '');
      span.textContent = words[i % words.length];
      wordsContainer.appendChild(span);
      spanElements.push(span);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    spanElements.forEach((span, i) => {
      const pos = positions[i % positions.length];
      const staggerDelay = 0.12 * Math.floor(i / positions.length);
      const startTime = gsap.utils.random(0, 0.52) + staggerDelay;
      const durationIn = gsap.utils.random(0.12, 0.18);
      const durationOut = gsap.utils.random(0.12, 0.18);
      const startX = pos.x * gsap.utils.random(0.08, 0.22);
      const startY = pos.y * gsap.utils.random(0.08, 0.22);
      const midX = pos.x + gsap.utils.random(-4, 4);
      const midY = pos.y + gsap.utils.random(-4, 4);
      const endX = midX + gsap.utils.random(-3, 3);
      const endY = midY + gsap.utils.random(-3, 3);
      const scaleMultiplier = gsap.utils.random(0.7, 1.3);
      const alphaPeak = gsap.utils.random(0.25, 0.62);

      gsap.set(span, {
        xPercent: -50,
        yPercent: -50,
        x: `${startX}vw`,
        y: `${startY}vh`,
        z: gsap.utils.random(-1600, -1100),
        scale: 0.35 * scaleMultiplier,
        autoAlpha: 0,
        filter: 'blur(0.65rem)'
      });

      tl.to(
        span,
        {
          x: `${midX}vw`,
          y: `${midY}vh`,
          z: 0,
          scale: scaleMultiplier,
          autoAlpha: alphaPeak,
          filter: 'blur(0rem)',
          duration: durationIn,
          ease: 'power1.inOut'
        },
        startTime
      );

      tl.to(
        span,
        {
          x: `${endX}vw`,
          y: `${endY}vh`,
          z: gsap.utils.random(800, 1200),
          scale: scaleMultiplier * gsap.utils.random(1.3, 1.65),
          autoAlpha: 0,
          filter: 'blur(0.5rem)',
          duration: durationOut,
          ease: 'power1.in'
        },
        startTime + durationIn
      );
    });
  });
}
