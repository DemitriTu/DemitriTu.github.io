// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Nav shadow on scroll
const nav = document.getElementById('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Fade-in on scroll
const fadeElements = document.querySelectorAll(
  '.section-title, .about-grid, .timeline-item, .skill-category, .project-card, .contact-content, .project-page-header, .project-section'
);

fadeElements.forEach((el) => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

fadeElements.forEach((el) => observer.observe(el));

// Active nav link highlighting (homepage only)
const sections = document.querySelectorAll('section[id]');

if (sections.length && navLinks) {
  const highlightNav = () => {
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.querySelectorAll('a').forEach((link) => {
          link.style.color =
            link.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
}
