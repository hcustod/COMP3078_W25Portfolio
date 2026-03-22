const initNav = () => {
  const toggle = document.querySelector<HTMLElement>('[data-nav-toggle]');
  const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]');
  if (!toggle || !drawer) return;

  const closeNav = () => {
    toggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (drawer.contains(target) || toggle.contains(target)) return;
    closeNav();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 980) closeNav();
  });
};

const initRotators = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const rotators = document.querySelectorAll<HTMLElement>('[data-rotator]');
  rotators.forEach((rotator) => {
    const words = JSON.parse(rotator.dataset.words ?? '[]') as string[];
    if (words.length < 2) return;

    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % words.length;
      rotator.classList.add('is-swapping');
      window.setTimeout(() => {
        rotator.textContent = words[index];
        rotator.classList.remove('is-swapping');
      }, 220);
    }, 2800);
  });
};

const initReveal = () => {
  const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!nodes.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    nodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
  );

  nodes.forEach((node) => observer.observe(node));
};

const initCurrentYear = () => {
  document.querySelectorAll<HTMLElement>('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
};

export const initSite = () => {
  initNav();
  initRotators();
  initReveal();
  initCurrentYear();
};
