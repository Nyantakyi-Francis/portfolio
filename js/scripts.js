/* ================================================
   NYANTAKYI FRANCIS — PORTFOLIO SCRIPTS
   Stack: GSAP + ScrollTrigger + Lucide Icons
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Lucide icons ─────────────────────────────── */
  if (typeof lucide !== 'undefined') lucide.createIcons();

  /* ── Footer year ──────────────────────────────── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── GSAP init ────────────────────────────────── */
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    // Fallback: just show everything if GSAP fails to load
    document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => {
      el.style.opacity = 1;
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ── Hero entrance (staggered on load) ────────── */
  const heroEls = document.querySelectorAll('.hero .reveal-up');
  gsap.fromTo(heroEls,
    { y: 30, opacity: 0 },
    {
      y: 0, opacity: 1,
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

  /* ── Scroll reveals (all sections) ───────────── */
  document.querySelectorAll('.section .reveal-up').forEach(el => {
    const delay = parseFloat(el.style.getPropertyValue('--delay') || '0');
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1,
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

  document.querySelectorAll('.section .reveal-right').forEach(el => {
    const delay = parseFloat(el.style.getPropertyValue('--delay') || '0');
    gsap.fromTo(el,
      { x: 30, opacity: 0 },
      {
        x: 0, opacity: 1,
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

  /* ── Stat counter animation ───────────────────── */
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
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

  /* ── Project items stagger ────────────────────── */
  gsap.fromTo('.project-item',
    { y: 30, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.projects-list',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  /* ── Skills cards stagger ─────────────────────── */
  gsap.fromTo('.skill-card',
    { y: 30, opacity: 0 },
    {
      y: 0, opacity: 1,
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

  /* ── Nav: scroll state ────────────────────────── */
  const nav = document.getElementById('nav');
  const navScrollThreshold = 40;

  /* ── Back to top button ───────────────────────── */
  const backTop = document.getElementById('back-top');

  /* ── Active nav link on scroll ────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  /* Single scroll handler — all scroll logic merged */
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Nav appearance
        nav.classList.toggle('scrolled', scrollY > navScrollThreshold);

        // Back to top
        if (backTop) {
          backTop.classList.toggle('visible', scrollY > 400);
        }

        // Active section highlight
        let current = '';
        sections.forEach(section => {
          if (scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${current}`);
        });

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── Back to top click ────────────────────────── */
  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Mobile menu ──────────────────────────────── */
  const burger = document.getElementById('nav-burger');
  const navLinks2 = document.getElementById('nav-links');

  if (burger && navLinks2) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks2.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks2.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks2.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav.contains(e.target) && navLinks2.classList.contains('open')) {
        navLinks2.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Orb parallax (subtle) ────────────────────── */
  const orbs = document.querySelectorAll('.orb');
  if (orbs.length) {
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.3;
        gsap.to(orb, {
          x: x * factor,
          y: y * factor,
          duration: 1.5,
          ease: 'power1.out'
        });
      });
    }, { passive: true });
  }

});