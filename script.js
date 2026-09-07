const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

reveals.forEach((el) => observer.observe(el));

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.global-nav');
const navClose = document.querySelector('.nav-close');

const closeMenu = () => {
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuButton.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'メニューを開く');
  document.body.style.overflow = '';
};

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.classList.toggle('is-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

if (navClose) {
  navClose.addEventListener('click', () => {
    closeMenu();
    menuButton.focus();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

/* Theme card: make tap behave like hover on touch devices
   - toggle .active on click, remove from siblings
   - support Enter/Space for keyboard access
*/
(() => {
  const themeCards = document.querySelectorAll('.theme-card');
  if (!themeCards || themeCards.length === 0) return;

  themeCards.forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');

    card.addEventListener('click', (e) => {
      const isActive = card.classList.toggle('active');
      themeCards.forEach((c) => { if (c !== card) c.classList.remove('active'); });
      card.setAttribute('aria-expanded', String(isActive));
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
})();
