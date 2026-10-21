import { CONFIG } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppCtas();
  initMobileNavigation();
  initStickyHeader();
  initScrollSpy();
  initYear();
  initFaqAccordion();
});

/**
 * Configure all WhatsApp Call-To-Action buttons across the site
 * using the central CONFIG.WHATSAPP_CHANNEL_URL.
 */
function initWhatsAppCtas() {
  const ctaButtons = document.querySelectorAll('.whatsapp-cta, [data-whatsapp-cta]');
  const channelUrl = CONFIG.WHATSAPP_CHANNEL_URL || 'YOUR_WHATSAPP_CHANNEL_URL';

  ctaButtons.forEach((btn) => {
    // If it's an anchor tag, assign href
    if (btn.tagName.toLowerCase() === 'a') {
      btn.setAttribute('href', channelUrl);
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
    }

    btn.addEventListener('click', (e) => {
      // Check if URL is still the placeholder
      if (channelUrl === 'YOUR_WHATSAPP_CHANNEL_URL' || !channelUrl.startsWith('http')) {
        e.preventDefault();
        showToast(
          'WhatsApp channel URL is currently set to placeholder ("YOUR_WHATSAPP_CHANNEL_URL"). Please configure it in js/config.js.',
          'info'
        );
      }
    });
  });
}

/**
 * Responsive Mobile Navigation Menu
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link, #mobile-menu .whatsapp-cta');

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
      rootMargin: '-20% 0px -70% 0px',
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

/**
 * Toast Notification Utility
 */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast-message toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span>${escapeHtml(message)}</span>
    </div>
    <button type="button" class="toast-close" aria-label="Close notification">&times;</button>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('is-visible');
  });

  const closeBtn = toast.querySelector('.toast-close');
  const dismiss = () => {
    toast.classList.remove('is-visible');
    setTimeout(() => toast.remove(), 300);
  };

  closeBtn.addEventListener('click', dismiss);
  setTimeout(dismiss, 5000);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
