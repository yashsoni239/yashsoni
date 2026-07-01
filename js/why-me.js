/* ============================================================
   WHY ME — GSAP ScrollTrigger Entrance Animation
   Dark Luxury Theme · GSAP ScrollTrigger · Glassmorphism
   ============================================================ */

(function () {
  'use strict';

  function initAnimations() {
    if (typeof gsap === 'undefined') return;

    // Section header entrance
    gsap.from('.why-premium .section-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.why-premium',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Cards stagger entrance
    gsap.from('.wm-card', {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.wm-grid',
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }

  if (typeof gsap === 'undefined') {
    var checkGsap = setInterval(function () {
      if (typeof gsap !== 'undefined') {
        clearInterval(checkGsap);
        initAnimations();
      }
    }, 200);
  }
})();
