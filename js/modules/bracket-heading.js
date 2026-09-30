/**
 * Bracket Heading Module
 * Slides the decorative [ and ] brackets inward as the user scrolls into view.
 */

export function initBracketHeading() {
  const headings = document.querySelectorAll('[data-bracket-heading]');
  if (!headings.length || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  headings.forEach((heading) => {
    const bracketLeft = heading.querySelector('[data-bracket-left]');
    const bracketRight = heading.querySelector('[data-bracket-right]');

    if (bracketLeft && bracketRight) {
      gsap.fromTo(
        bracketLeft,
        { xPercent: -160 },
        {
          xPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heading,
            start: 'top bottom',
            end: 'top 40%',
            scrub: true
          }
        }
      );

      gsap.fromTo(
        bracketRight,
        { xPercent: 160 },
        {
          xPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heading,
            start: 'top bottom',
            end: 'top 40%',
            scrub: true
          }
        }
      );
    }
  });
}
