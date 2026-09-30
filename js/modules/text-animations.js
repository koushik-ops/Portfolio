/**
 * Typography Animations Module
 * Handles line reveals, 3D rolling perspective text, and randomized letter scatter.
 */

export function initTextAnimations() {
  if (typeof gsap === 'undefined' || typeof SplitText === 'undefined') {
    return;
  }

  // 1. Masked Line Reveal [data-split-lines]
  const lineElements = document.querySelectorAll('[data-split-lines]');
  lineElements.forEach((el) => {
    if (el.hasAttribute('data-split-lines-initialized')) return;
    el.setAttribute('data-split-lines-initialized', '');

    SplitText.create(el, {
      type: 'lines',
      autoSplit: true,
      mask: 'lines',
      onSplit: (instance) => {
        gsap.set(instance.lines, { yPercent: 110 });
        gsap.to(instance.lines, {
          yPercent: 0,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      }
    });
  });

  // 2. 3D Rolling Perspective Characters [data-split-rolling]
  const rollingElements = document.querySelectorAll('[data-split-rolling]');
  rollingElements.forEach((el) => {
    if (el.hasAttribute('data-split-rolling-initialized')) return;
    el.setAttribute('data-split-rolling-initialized', '');

    SplitText.create(el, {
      type: 'chars, lines',
      autoSplit: true,
      mask: 'lines',
      onSplit(instance) {
        const fontSize = 0.6 * parseFloat(window.getComputedStyle(el).fontSize);
        gsap.set(instance.lines, { perspective: 500 });
        gsap.set(instance.chars, {
          rotationX: -110,
          z: -fontSize,
          y: fontSize,
          opacity: 0,
          transformOrigin: `50% 50% -${fontSize}px`
        });
        gsap.to(instance.chars, {
          rotationX: 0,
          z: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.03,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      }
    });
  });

  // 3. Random Scattered Characters [data-split-random]
  const randomElements = document.querySelectorAll('[data-split-random]');
  randomElements.forEach((el) => {
    const fontSize = 3 * parseFloat(getComputedStyle(el).fontSize);
    const viewportOffset = 0.2 * Math.min(window.innerWidth, window.innerHeight);
    const radius = Math.min(fontSize, viewportOffset);

    SplitText.create(el, {
      type: 'chars',
      charsClass: 'split-char',
      onSplit: (instance) => {
        gsap.set(instance.chars, {
          x: () => gsap.utils.random(-radius, radius),
          y: () => gsap.utils.random(-radius, radius),
          rotation: () => gsap.utils.random(-90, 90),
          scale: () => gsap.utils.random(0.5, 1.4),
          filter: 'blur(8px)'
        });
        gsap.to(instance.chars, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          filter: 'blur(0px)',
          stagger: {
            each: 0.03,
            from: 'random'
          },
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'top 15%',
            scrub: true
          }
        });
      }
    });
  });
}
