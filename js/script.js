(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const testimonialTrack = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carouselDots = document.getElementById('carouselDots');
  const contactForm = document.getElementById('contactForm');
  const allNavAnchors = document.querySelectorAll('.nav-links a');

  // === Three.js Particles Background ===
  function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;';
    document.body.prepend(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
      colors[i] = Math.random() * 0.5 + 0.3;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0003;
      particlesMesh.rotation.x += 0.0001;
      particlesMesh.rotation.x += (mouseY * 0.05 - particlesMesh.rotation.x) * 0.01;
      particlesMesh.rotation.y += (mouseX * 0.05 - particlesMesh.rotation.y) * 0.01;
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // === GSAP Animations ===
  function initGSAP() {
    if (typeof gsap === 'undefined') return;

    // Hero entrance stagger
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.badge', { y: 40, opacity: 0, duration: 0.8 })
      .from('.hero-text h1', { y: 50, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.hero-text p', { y: 40, opacity: 0, duration: 0.8 }, '-=0.5')
      .from('.hero-buttons', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-social a', { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.3')
      .from('.hero-image-wrapper', { scale: 0.8, opacity: 0, duration: 1 }, '-=0.8')
      .from('.float-item', { y: 30, opacity: 0, stagger: 0.15, duration: 0.6 }, '-=0.6');

    // Stats cards entrance
    gsap.utils.toArray('.stat-card').forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Animate skill bars (now handled by about.js for the about section)
    gsap.utils.toArray('.services .skill-fill').forEach((fill) => {
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

    // Service cards stagger
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Portfolio cards stagger
    gsap.utils.toArray('.portfolio-card').forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Feature cards stagger
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Tool cards stagger
    gsap.utils.toArray('.tool-card').forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.06,
        scrollTrigger: {
          trigger: '.tools-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Contact cards
    gsap.utils.toArray('.contact-card').forEach((card, i) => {
      gsap.from(card, {
        x: -40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Parallax effect on hero
    gsap.to('.hero-visual', {
      y: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Featured project section entrance
    gsap.utils.toArray('.featured-grid .featured-card').forEach(function (card) {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    });
        delay: i * 0.06,
        scrollTrigger: {
          trigger: '.featured-card',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.from('.btn-gold', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      scrollTrigger: {
        trigger: '.featured-card',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    });

    // Service project preview
    gsap.from('.service-project-preview', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.service-project-preview',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    // Parallax on about image
    gsap.to('.about-image', {
      y: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // === Navbar ===
  function initNavbar() {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Active link tracking
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      allNavAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
          a.classList.add('active');
        }
      });
    });

    allNavAnchors.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // === Counter Animation (fallback) ===
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.target);
          const step = Math.max(1, Math.floor(target / 60));
          let current = 0;

          const updateCounter = () => {
            current += step;
            if (current >= target) {
              counter.textContent = target;
              return;
            }
            counter.textContent = current;
            requestAnimationFrame(updateCounter);
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  // === Testimonial Carousel ===
  function initCarousel() {
    const cards = testimonialTrack.querySelectorAll('.testimonial-card');
    if (!cards.length) return;
    const total = cards.length;
    let current = 0;
    let autoSlide;

    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => goToSlide(i));
      carouselDots.appendChild(dot);
    }

    const dots = carouselDots.querySelectorAll('.carousel-dot');

    function goToSlide(index) {
      current = index;
      testimonialTrack.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      resetAutoSlide();
    }

    function nextSlide() {
      goToSlide((current + 1) % total);
    }

    function prevSlide() {
      goToSlide((current - 1 + total) % total);
    }

    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 5000);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    autoSlide = setInterval(nextSlide, 5000);
  }

  // === Contact Form (WhatsApp) ===
  function initContactForm() {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      const text = '*New Inquiry from Portfolio Website*%0A%0A*Name:* ' + encodeURIComponent(name) + '%0A*Email:* ' + encodeURIComponent(email) + '%0A*Phone:* ' + encodeURIComponent(phone || 'N/A') + '%0A*Message:* ' + encodeURIComponent(message);

      window.open('https://wa.me/918107838454?text=' + text, '_blank');
    });
  }

  // === Init All ===
  document.addEventListener('DOMContentLoaded', () => {
    if (typeof THREE !== 'undefined') initParticles();
    initNavbar();
    initCounters();
    initCarousel();
    initContactForm();
    initGSAP();

    // Fallback scroll reveal for browsers without GSAP ScrollTrigger
    if (typeof gsap === 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal-left, .reveal-right, .reveal-bottom').forEach(el => observer.observe(el));
    }
  });

})();