/* ═══════════════════════════════════════════════
   SAMAD KODON — script.js
   Theme Dark/Light · Switch FR/EN · Curseur · Animations
═══════════════════════════════════════════════ */

/* ── TRADUCTIONS FR / EN ── */
const i18n = {
  fr: {
    nav_about:      'À propos',
    nav_skills:     'Compétences',
    nav_exp:        'Expérience',
    nav_projects:   'Projets',
    nav_apps:       'Apps',
    nav_contact:    'Me contacter',
    hero_tag:       'Disponible pour CDI · Remote OK · Mobile France',
    hero_subtitle:  'Data Analyst & Data Scientist',
    hero_desc:      'Je transforme des données brutes en <strong>décisions stratégiques</strong>. Spécialisé en analyse de performance, modélisation prédictive et automatisation, avec des expériences concrètes chez <strong>Canal+</strong> et dans la tech africaine.',
    badge_major:    '⭐ Major de promo — Montpellier',
    badge_canal:    'Ex-Canal+ International',
    badge_dataiku:  'Dataiku Advanced Designer',
    badge_exp:      '4 ans d\'expérience',
    btn_projects:   '📂 Voir mes projets',
    btn_contact:    '📬 Me contacter',
    btn_cv:         '📄 Mon CV',
    stat_exp:       'Ans d\'expérience',
    stat_projects:  'Projets data',
    stat_apps:      'Apps déployées',
    stat_certs:     'Certifications',
    about_tag:      '// 01 — À propos',
    about_title:    'Un profil rare :<br>data + économie',
    exp_tag:        '// 03 — Expérience',
    exp_title:      'Parcours',
    exp_sub:        'Des expériences concrètes dans des environnements exigeants, en France et en Afrique.',
    skills_tag:     '// 02 — Compétences',
    skills_title:   'Stack technique',
    skills_sub:     'Des outils maîtrisés dans des contextes professionnels réels — pas seulement académiques.',
    projects_tag:   '// 04 — Projets',
    projects_title: 'Projets data',
    projects_sub:   'Des projets concrets couvrant la data science, le machine learning et l\'analyse sectorielle.',
    apps_tag:       '// 05 — Applications live',
    apps_title:     'Apps déployées',
    apps_sub:       'Des applications interactives conçues et déployées pour des besoins métiers concrets.',
    reco_tag:       '// 06 — Recommandations',
    reco_title:     'Ce qu\'ils disent',
    reco_sub:       'Des personnes qui ont travaillé directement avec moi.',
    contact_tag:    '// 07 — Contact',
    contact_title:  'Travaillons ensemble',
    contact_desc:   'Disponible immédiatement pour un <strong>CDI Data Analyst</strong> — priorité absolue. Ouvert aussi aux CDD et missions freelance. Mobile toute France, remote OK.',
    contact_loc:    '📍 Strasbourg · Mobile toute France · Remote',
    footer_left:    '© 2025 Samad KODON — Data Analyst',
    footer_right:   'Strasbourg · Mobile France · Remote OK',
    voir:           'Voir →',
    ouvrir:         'Ouvrir l\'app →',
  },
  en: {
    nav_about:      'About',
    nav_skills:     'Skills',
    nav_exp:        'Experience',
    nav_projects:   'Projects',
    nav_apps:       'Apps',
    nav_contact:    'Contact me',
    hero_tag:       'Available for permanent role · Remote OK · France-wide',
    hero_subtitle:  'Data Analyst & Data Scientist',
    hero_desc:      'I turn raw data into <strong>strategic decisions</strong>. Specialized in performance analysis, predictive modelling and automation — with hands-on experience at <strong>Canal+</strong> and in African tech.',
    badge_major:    '⭐ Top of class — Montpellier',
    badge_canal:    'Ex-Canal+ International',
    badge_dataiku:  'Dataiku Advanced Designer',
    badge_exp:      '4 years of experience',
    btn_projects:   '📂 View my projects',
    btn_contact:    '📬 Contact me',
    btn_cv:         '📄 My CV',
    stat_exp:       'Years of experience',
    stat_projects:  'Data projects',
    stat_apps:      'Deployed apps',
    stat_certs:     'Certifications',
    about_tag:      '// 01 — About',
    about_title:    'A rare profile:<br>data + economics',
    exp_tag:        '// 03 — Experience',
    exp_title:      'Career path',
    exp_sub:        'Concrete experience in demanding environments, in France and Africa.',
    skills_tag:     '// 02 — Skills',
    skills_title:   'Tech stack',
    skills_sub:     'Tools mastered in real professional contexts — not just academic ones.',
    projects_tag:   '// 04 — Projects',
    projects_title: 'Data projects',
    projects_sub:   'Concrete projects covering data science, machine learning and sector analysis.',
    apps_tag:       '// 05 — Live apps',
    apps_title:     'Deployed apps',
    apps_sub:       'Interactive applications designed and deployed for real business needs.',
    reco_tag:       '// 06 — Recommendations',
    reco_title:     'What they say',
    reco_sub:       'People who have worked directly with me.',
    contact_tag:    '// 07 — Contact',
    contact_title:  'Let\'s work together',
    contact_desc:   'Immediately available for a <strong>permanent Data Analyst role</strong> — top priority. Also open to fixed-term and freelance missions. France-wide mobility, remote OK.',
    contact_loc:    '📍 Strasbourg · France-wide · Remote',
    footer_left:    '© 2025 Samad KODON — Data Analyst',
    footer_right:   'Strasbourg · France · Remote OK',
    voir:           'View →',
    ouvrir:         'Open app →',
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // ── PRELOADER ──────────────────────────────────
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1700);
  }

  // ── THÈME DARK / LIGHT ─────────────────────────
  const html = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('sk-theme') || 'dark';
  if (savedTheme === 'light') html.setAttribute('data-theme', 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') !== 'light';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem('sk-theme', isDark ? 'light' : 'dark');
    });
  }

  // ── SWITCH LANGUE FR / EN ──────────────────────
  let currentLang = localStorage.getItem('sk-lang') || 'fr';
  applyLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('sk-lang', currentLang);
      applyLang(currentLang);
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
    });
  });

  function applyLang(lang) {
    const t = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  }

  // ── CURSEUR ────────────────────────────────────
  const ring = document.querySelector('.cursor-ring');
  const dot  = document.querySelector('.cursor-dot');

  if (ring && dot) {
    let rx = 0, ry = 0, mx = 0, my = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    });

    (function animRing() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    })();

    document.querySelectorAll('a, button, .project-card, .app-card, .highlight-card, .badge, .tool-tag').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.classList.add('hover'); dot.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { ring.classList.remove('hover'); dot.classList.remove('hover'); });
    });
  }

  // ── SCROLL PROGRESS ────────────────────────────
  const bar = document.querySelector('.scroll-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  // ── NAV SCROLL ─────────────────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ── NAV ACTIVE LINKS ───────────────────────────
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  const obsNav = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obsNav.observe(s));

  // ── SMOOTH SCROLL ──────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ── REVEAL ON SCROLL ───────────────────────────
  const obsReveal = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obsReveal.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obsReveal.observe(el));

  // ── EXP ITEMS ──────────────────────────────────
  const obsExp = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 150);
        obsExp.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.exp-item').forEach(el => obsExp.observe(el));

  // ── SKILL BARS ─────────────────────────────────
  const skillsSection = document.querySelector('#skills');
  if (skillsSection) {
    const obsSkills = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
        obsSkills.unobserve(skillsSection);
      }
    }, { threshold: 0.2 });
    obsSkills.observe(skillsSection);
  }

  // ── PROJECT CARDS STAGGER ──────────────────────
  const firstCard = document.querySelector('.project-card');
  if (firstCard) {
    const obsCards = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.project-card').forEach((c, i) => {
          setTimeout(() => c.classList.add('visible'), i * 100);
        });
        obsCards.disconnect();
      }
    }, { threshold: 0.1 });
    obsCards.observe(firstCard);
  }

  // ── STAT COUNTERS ──────────────────────────────
  const obsStats = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const dur = 1600;
        const start = performance.now();

        (function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (Number.isInteger(target) ? Math.floor(eased * target) : (eased * target).toFixed(1)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(start);

        obsStats.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-target]').forEach(el => obsStats.observe(el));

  // ── PARALLAX ORBS ─────────────────────────────
  const orbs = document.querySelectorAll('.hero-orb');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    orbs.forEach((o, i) => { o.style.transform = `translateY(${y * (i + 1) * 0.07}px)`; });
  }, { passive: true });

  // ── MOUSE PARALLAX HERO ───────────────────────
  const heroSection = document.querySelector('#home');
  if (heroSection && orbs.length) {
    heroSection.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach((o, i) => {
        o.style.transform = `translate(${x * (i + 1) * 10}px, ${y * (i + 1) * 10}px)`;
      });
    });
  }

  console.log('%c Samad KODON', 'color:#3b82f6;font-size:20px;font-weight:bold;font-family:monospace');
  console.log('%c Data Analyst · Python | SQL | Power BI | Dataiku', 'color:#06b6d4;font-size:12px;font-family:monospace');
});
