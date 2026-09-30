/**
 * Cursor Image Trail Module
 * Creates elastic bouncing image previews along the mouse cursor path on desktop.
 */

export function initImageTrail() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const trailWrappers = document.querySelectorAll('[data-image-trail="wrap"]');
  trailWrappers.forEach((wrapper) => {
    const collection = wrapper.querySelector('[data-image-trail="collection"]');
    if (!collection) return;

    const items = Array.from(collection.querySelectorAll('[data-image-trail="item"]'));
    if (!items.length) return;

    let distanceTraveled = 0;
    let lastX = 0;
    let lastY = 0;
    let itemIndex = 0;
    let hasMoved = false;
    let activeImagesCount = 0;
    let isCooldown = false;
    const threshold = window.innerWidth / 6;

    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (!hasMoved) {
        lastX = e.clientX;
        lastY = e.clientY;
        hasMoved = true;
        return;
      }

      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;

      if (!isCooldown) {
        distanceTraveled += Math.abs(deltaX) + Math.abs(deltaY);
        if (distanceTraveled > threshold) {
          distanceTraveled = 0;
          spawnTrailImage(mouseX, mouseY, deltaX, deltaY);
        }
      }

      lastX = e.clientX;
      lastY = e.clientY;
    });

    function spawnTrailImage(x, y, vx, vy) {
      if (isCooldown) return;

      const clone = items[itemIndex].cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.left = '0';
      clone.style.top = '0';
      clone.style.zIndex = '5';
      wrapper.appendChild(clone);
      activeImagesCount++;

      const tl = gsap.timeline({
        onComplete: () => {
          clone.remove();
          activeImagesCount--;
          tl.kill();
          if (isCooldown && activeImagesCount === 0) {
            isCooldown = false;
            itemIndex = 0;
            distanceTraveled = 0;
          }
        }
      });

      tl.fromTo(
        clone,
        {
          xPercent: 80 * (Math.random() - 0.5) - 50,
          yPercent: 10 * (Math.random() - 0.5) - 50,
          scaleX: 1.3,
          scaleY: 1.3
        },
        {
          scaleX: 1,
          scaleY: 1,
          ease: 'elastic.out(2, 0.6)',
          duration: 0.6
        }
      );

      tl.fromTo(
        clone,
        {
          x: x,
          y: y,
          rotation: 20 * (Math.random() - 0.5)
        },
        {
          x: '+=' + 4 * vx,
          y: '+=' + 4 * vy,
          rotation: 20 * (Math.random() - 0.5),
          ease: 'power4.out',
          duration: 1.5
        },
        '<'
      );

      tl.to(clone, {
        duration: 0.3,
        scale: 0.5,
        delay: 0.1,
        ease: 'back.in(1.5)'
      });

      itemIndex++;
      if (itemIndex >= items.length) {
        isCooldown = true;
      }
    }
  });
}
