document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

  const nav = document.getElementById('nav');
  const backTop = document.getElementById('back-top');
  const hero = document.querySelector('.hero');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const burger = document.getElementById('nav-burger');
  const navMenu = document.getElementById('nav-links');
  const photoGallery = document.getElementById('photo-gallery');

  if (photoGallery) {
    const slides = Array.from(photoGallery.querySelectorAll('[data-photo-slide]'));
    const indicators = Array.from(photoGallery.querySelectorAll('[data-gallery-indicator]'));
    const previousButton = photoGallery.querySelector('[data-gallery-previous]');
    const nextButton = photoGallery.querySelector('[data-gallery-next]');
    const status = document.getElementById('photo-gallery-status');
    let activeIndex = 0;
    let autoplayId = null;
    let pointerPaused = false;
    let focusPaused = false;

    function showSlide(index, announce = false) {
      activeIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });

      indicators.forEach((indicator, indicatorIndex) => {
        const isActive = indicatorIndex === activeIndex;
        indicator.classList.toggle('is-active', isActive);
        indicator.setAttribute('aria-current', String(isActive));
      });

      if (status) {
        status.textContent = `Portrait ${activeIndex + 1} of ${slides.length}`;
        status.setAttribute('aria-live', announce ? 'polite' : 'off');
      }
    }

    function stopAutoplay() {
      if (autoplayId !== null) {
        window.clearInterval(autoplayId);
        autoplayId = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();
      if (!prefersReducedMotion && !pointerPaused && !focusPaused && !document.hidden) {
        autoplayId = window.setInterval(() => showSlide(activeIndex + 1), 5000);
      }
    }

    function selectSlide(index) {
      showSlide(index, true);
      startAutoplay();
    }

    previousButton?.addEventListener('click', () => selectSlide(activeIndex - 1));
    nextButton?.addEventListener('click', () => selectSlide(activeIndex + 1));

    indicators.forEach((indicator) => {
      indicator.addEventListener('click', () => {
        selectSlide(Number(indicator.dataset.galleryIndicator));
      });
    });

    photoGallery.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        selectSlide(activeIndex - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        selectSlide(activeIndex + 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        selectSlide(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        selectSlide(slides.length - 1);
      }
    });

    photoGallery.addEventListener('mouseenter', () => {
      pointerPaused = true;
      stopAutoplay();
    });

    photoGallery.addEventListener('mouseleave', () => {
      pointerPaused = false;
      startAutoplay();
    });

    photoGallery.addEventListener('focusin', () => {
      focusPaused = true;
      stopAutoplay();
    });

    photoGallery.addEventListener('focusout', (event) => {
      if (!photoGallery.contains(event.relatedTarget)) {
        focusPaused = false;
        startAutoplay();
      }
    });

    document.addEventListener('visibilitychange', startAutoplay);
    showSlide(0);
    startAutoplay();
  }

  if (!prefersReducedMotion && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const heroEls = document.querySelectorAll('.hero .reveal-up');
    gsap.fromTo(heroEls,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.2
      }
    );

    const heroRight = document.querySelector('.hero .reveal-right');
    if (heroRight) {
      gsap.fromTo(heroRight,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
      );
    }

    document.querySelectorAll('.section .reveal-up').forEach((el) => {
      const delay = parseFloat(el.style.getPropertyValue('--delay') || '0');
      gsap.fromTo(el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    document.querySelectorAll('.section .reveal-right').forEach((el) => {
      const delay = parseFloat(el.style.getPropertyValue('--delay') || '0');
      gsap.fromTo(el,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    document.querySelectorAll('.stat-num[data-target]').forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      gsap.fromTo(el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.4,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    gsap.fromTo('.project-item, .project-spotlight',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo('.skill-card',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      }
    );
  } else {
    document.querySelectorAll('.reveal-up, .reveal-right').forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }

  let ticking = false;
  function onScroll() {
    if (ticking) {
      return;
    }

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      if (nav) {
        nav.classList.toggle('scrolled', scrollY > 40);
      }

      if (backTop) {
        backTop.classList.toggle('visible', scrollY > 400);
      }

      let current = '';
      sections.forEach((section) => {
        if (scrollY >= section.offsetTop - 140) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });

      ticking = false;
    });

    ticking = true;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hero) {
    function onHeroScroll() {
      if (prefersReducedMotion) {
        return;
      }
      const progress = Math.min(1, Math.max(0, window.scrollY / 900));
      hero.style.setProperty('--hero-s', String(1 + progress * 0.03));
      hero.style.setProperty('--hero-y', `${progress * 8}px`);
    }

    window.addEventListener('scroll', onHeroScroll, { passive: true });
    onHeroScroll();
  }

  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (event) => {
      if (nav && !nav.contains(event.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  if (!prefersReducedMotion && hasFinePointer && typeof gsap !== 'undefined') {
    const orbs = document.querySelectorAll('.orb');
    if (orbs.length) {
      window.addEventListener('mousemove', (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;

        orbs.forEach((orb, index) => {
          const factor = (index + 1) * 0.22;
          gsap.to(orb, {
            x: x * factor,
            y: y * factor,
            duration: 1.4,
            ease: 'power1.out',
            overwrite: 'auto'
          });
        });
      }, { passive: true });
    }
  }

  if (hero && !prefersReducedMotion && hasFinePointer) {
    window.addEventListener('mousemove', (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      hero.style.setProperty('--hero-x', `${x}px`);
      hero.style.setProperty('--hero-y', `${y}px`);
    }, { passive: true });
  }
});
