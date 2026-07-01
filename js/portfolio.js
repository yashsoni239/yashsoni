/* ============================================================
   PORTFOLIO SECTION — Click-to-Open & GSAP Animations
   GSAP Scroll Triggers · Click to Open
   ============================================================ */

(function () {
  'use strict';

  var gsapInitialized = false;

  function initInteractive() {
    var pfCards = document.querySelectorAll('.pf-card');

    pfCards.forEach(function (card) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function (e) {
        var url = card.getAttribute('data-url');
        if (url && !e.target.closest('a, button')) {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      });
    });
  }

  function initGsapAnimations() {
    if (typeof gsap === 'undefined') return;
    if (gsapInitialized) return;
    gsapInitialized = true;

    // Section header entrance
    gsap.from('.pf-section .section-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.pf-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Cards stagger entrance
    gsap.utils.toArray('.pf-card').forEach(function (card, i) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });

      tl.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
      .from(card.querySelector('.pf-preview'), {
        x: i === 0 ? -40 : 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')
      .from(card.querySelectorAll('.pf-info > *'), {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: 'power2.out',
      }, '-=0.4');
    });
  }

  function initPortfolio() {
    initInteractive();
    initGsapAnimations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
  } else {
    initPortfolio();
  }

  if (typeof gsap === 'undefined') {
    var gsapCheck = setInterval(function () {
      if (typeof gsap !== 'undefined') {
        clearInterval(gsapCheck);
        initGsapAnimations();
      }
    }, 200);
    setTimeout(function () { clearInterval(gsapCheck); }, 5000);
  }
})();
