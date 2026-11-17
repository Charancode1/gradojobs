import { CONFIG } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  initCommunityLinks();
  initMobileNavigation();
  initStickyHeader();
  initScrollSpy();
  initYear();
  initFaqAccordion();
});

/**
 * Configure all community and social platform links across the site
 * using the central CONFIG settings.
 */
function initCommunityLinks() {
  const whatsappUrl = CONFIG.SOCIAL_LINKS?.whatsapp || CONFIG.WHATSAPP_CHANNEL_URL;
  const linkedinUrl = CONFIG.SOCIAL_LINKS?.linkedin || CONFIG.LINKEDIN_URL;

  // WhatsApp CTAs
  const whatsappButtons = document.querySelectorAll('.whatsapp-cta, [data-whatsapp-cta], [data-social="whatsapp"]');
  whatsappButtons.forEach((btn) => {
    if (btn.tagName.toLowerCase() === 'a' && whatsappUrl) {
      btn.setAttribute('href', whatsappUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // LinkedIn CTAs
  const linkedinButtons = document.querySelectorAll('.linkedin-cta, [data-social="linkedin"]');
  linkedinButtons.forEach((btn) => {
    if (btn.tagName.toLowerCase() === 'a' && linkedinUrl) {
      btn.setAttribute('href', linkedinUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Automatically hide any optional social links that do not have an active URL configured
  const optionalSocials = document.querySelectorAll('[data-social-platform]');
  optionalSocials.forEach((el) => {
    const platform = el.getAttribute('data-social-platform');
    const url = CONFIG.SOCIAL_LINKS?.[platform];
    if (!url || url.trim() === '') {
      el.style.display = 'none';
    }
  });
}

/**
 * Responsive Mobile Navigation Menu
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link, #mobile-menu .btn');

  if (!toggleBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.classList.add('is-active');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/**
 * Sticky Header elevation on scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Active navigation link indicator on scroll
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !desktopLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          desktopLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('is-active');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('is-active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0px -60% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Dynamic Footer Year
 */
function initYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
}

/**
 * Interactive FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-question');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other accordion items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
          const otherTrigger = other.querySelector('.faq-question');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isExpanded) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
