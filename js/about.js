/* ============================================================
   ABOUT SECTION — Animations & Interactivity
   GSAP Scroll Triggers · Counters · Reveal Effects
   ============================================================ */

(function () {
  'use strict';

  function initAboutAnimations() {
    if (typeof gsap === 'undefined') return;

    // === Scroll Reveal for data-reveal attributes ===
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach((el) => revealObserver.observe(el));

    // === Premium Profile Photo Entrance ===
    var profileTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-profile-card',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    profileTl
      .from('.profile-photo-wrapper', { scale: 0.6, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' })
      .from('.profile-glass-ring', { scale: 0.3, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .from('.profile-glow-ring', { scale: 0.3, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .from('.profile-shape', { scale: 0, opacity: 0, duration: 0.4, stagger: 0.12, ease: 'back.out(2)' }, '-=0.2')
      .from('.profile-role-badge', { y: 20, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }, '-=0.1')
      .from('.profile-name', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      .from('.profile-title', { y: 15, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.15')
      .from('.profile-badges', { y: 15, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1')
      .from('.profile-social', { y: 15, opacity: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1');

    // === Mouse Tilt Effect on Profile Photo ===
    var tiltContainer = document.getElementById('profilePhoto');
    if (tiltContainer) {
      tiltContainer.addEventListener('mousemove', function (e) {
        var rect = tiltContainer.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = ((y - centerY) / centerY) * -8;
        var rotateY = ((x - centerX) / centerX) * 8;
        gsap.to(tiltContainer, { rotateX: rotateX, rotateY: rotateY, duration: 0.4, ease: 'power2.out' });
      });
      tiltContainer.addEventListener('mouseleave', function () {
        gsap.to(tiltContainer, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
      });
    }

    // === Headline Entrance ===
    gsap.from('.about-headline h2', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-headline',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from('.headline-intro', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-headline',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // === Headline Stats Counter ===
    gsap.utils.toArray('.h-num').forEach((num) => {
      gsap.from(num, {
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.headline-stats',
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Statistics Bar Counters ===
    gsap.utils.toArray('.stat-item .counter').forEach((counter) => {
      gsap.from(counter, {
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counter.closest('.stat-item'),
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Stat Items Entrance ===
    gsap.utils.toArray('.stat-item').forEach((item, i) => {
      gsap.from(item, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-stats-bar',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Story Cards Stagger ===
    gsap.utils.toArray('.story-card').forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.story-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Skill Group Entrance ===
    gsap.utils.toArray('.skill-group').forEach((group, i) => {
      gsap.from(group, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Skill Bars Animate ===
    gsap.utils.toArray('.skill-group .skill-fill').forEach((fill) => {
      gsap.to(fill, {
        width: fill.dataset.width + '%',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: fill.closest('.skill-bar'),
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === AI Tools Stagger ===
    gsap.utils.toArray('.ai-tool-card').forEach((card, i) => {
      gsap.from(card, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        delay: i * 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ai-tools-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Tech Items Stagger ===
    gsap.utils.toArray('.tech-item').forEach((item, i) => {
      gsap.from(item, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        delay: i * 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.tech-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Process Steps Stagger ===
    gsap.utils.toArray('.process-step').forEach((step, i) => {
      gsap.from(step, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.process-steps',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Why Cards Stagger ===
    gsap.utils.toArray('.why-card').forEach((card, i) => {
      gsap.from(card, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.why-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Value Items Stagger ===
    gsap.utils.toArray('.value-item').forEach((item, i) => {
      gsap.from(item, {
        x: -20,
        opacity: 0,
        duration: 0.4,
        delay: i * 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === Vision Card Entrance ===
    gsap.from('.about-vision', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-vision',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // === Cert Cards Stagger ===
    gsap.utils.toArray('.cert-card').forEach((card, i) => {
      gsap.from(card, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.certs-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // === CTA Entrance ===
    gsap.from('.cta-content', {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-cta',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  // === Init on DOM ready ===
  document.addEventListener('DOMContentLoaded', initAboutAnimations);
})();