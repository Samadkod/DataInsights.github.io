/* ═══════════════════════════════════════════════
   SAMAD KODON — Portfolio JS
   Interactions: Cursor · Scroll · Animations
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── PRELOADER ──────────────────────────────────
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }, 1600);
  }

  // ── CUSTOM CURSOR ──────────────────────────────
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');

  if (cursor && follower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top  = mouseY + 'px';
    });

    // Smooth follower animation
    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top  = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll(
      'a, button, .project-card, .app-card, .highlight-card, .reco-card, .badge'
    );

    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        follower.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        follower.classList.remove('hovering');
      });
    });
  }

  // ── SCROLL PROGRESS BAR ────────────────────────
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = (scrollTop / docHeight) * 100;
      progressBar.style.width = pct + '%';
    });
  }

  // ── NAV SCROLL EFFECT ──────────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ── ACTIVE NAV LINKS ───────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observerNav.observe(s));

  // ── SMOOTH SCROLL ──────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── REVEAL ON SCROLL ───────────────────────────
  const reveals = document.querySelectorAll('.reveal');

  const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observerReveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observerReveal.observe(el));

  // ── EXPERIENCE ITEMS ───────────────────────────
  const expItems = document.querySelectorAll('.exp-item');

  const observerExp = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 150);
        observerExp.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  expItems.forEach(el => observerExp.observe(el));

  // ── SKILL BARS ─────────────────────────────────
  const skillSection = document.querySelector('#skills');

  if (skillSection) {
    const observerSkills = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.skill-fill').forEach(bar => {
          const target = bar.dataset.width;
          setTimeout(() => {
            bar.style.width = target;
          }, 200);
        });
        observerSkills.unobserve(skillSection);
      }
    }, { threshold: 0.2 });

    observerSkills.observe(skillSection);
  }

  // ── PROJECT CARDS STAGGER ──────────────────────
  const projectCards = document.querySelectorAll('.project-card');

  const observerProjects = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), i * 100);
        });
        observerProjects.disconnect();
      }
    });
  }, { threshold: 0.1 });

  if (projectCards.length > 0) {
    observerProjects.observe(projectCards[0]);
  }

  // ── STAT COUNTER ANIMATION ─────────────────────
  const statNums = document.querySelectorAll('.stat-num[data-target]');

  const observerStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();

        function updateCounter(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = eased * target;
          el.textContent = (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(updateCounter);
        }

        requestAnimationFrame(updateCounter);
        observerStats.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => observerStats.observe(el));

  // ── TYPING EFFECT (Hero subtitle) ─────────────
  const typingEl = document.querySelector('.hero-typing');
  if (typingEl) {
    const words = ['Data Analyst', 'Data Scientist', 'BI Developer', 'Storyteller'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        typingEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        typingEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(type, isDeleting ? 60 : 90);
    }

    setTimeout(type, 2000);
  }

  // ── PARALLAX ORBS ─────────────────────────────
  const orbs = document.querySelectorAll('.hero-orb');
  if (orbs.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 0.08;
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    });
  }

  // ── MOUSE PARALLAX (Hero) ─────────────────────
  const heroSection = document.querySelector('#home');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 12;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
  }

  // ── APP CARD WARNING ──────────────────────────
  document.querySelectorAll('.app-link').forEach(link => {
    link.addEventListener('click', (e) => {
      // No need to intercept — just let it open
      // App may need reactivation on Streamlit
    });
  });

  console.log('%c Samad KODON — Portfolio', 'color:#3b82f6;font-size:18px;font-weight:bold;font-family:monospace');
  console.log('%c Data Analyst · Python | SQL | Power BI', 'color:#06b6d4;font-size:12px;font-family:monospace');
  console.log('%c samad.kodon@gmail.com', 'color:#64748b;font-size:11px;font-family:monospace');

});
