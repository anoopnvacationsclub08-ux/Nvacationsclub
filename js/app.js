/* ============================================================
   NVacations — App Initializer
   app.js
   Boots the application: renders components, wires up
   interactions, initializes observers and carousels.
   ============================================================ */

'use strict';

const NVacApp = {

  /* ─── Init ──────────────────────────────────────────────── */
  init() {
    this.renderNavbar();
    this.renderMobileBottomBar();
    this.initNavbar();
    this.initHamburger();
    this.initSmoothScroll();
    this.initRevealAnimations();
    this.initLazyImages();
    this.initCarousels();
    this.initWishlist();
    this.initSearch();
    this.initStyleCards();
    console.log('%c✈ NVacations loaded', 'color:#FFB800;font-weight:bold;font-size:14px;');
  },

  /* ─── Render Navbar ─────────────────────────────────────── */
  renderNavbar() {
    const slot = document.getElementById('navbar-slot');
    if (!slot) return;
    slot.innerHTML = NVacComponents.navbar(NVacData);
  },

  /* ─── Render Mobile Bottom Bar ──────────────────────────── */
  renderMobileBottomBar() {
    const slot = document.getElementById('mobile-bar-slot');
    if (!slot) return;
    slot.innerHTML = NVacComponents.mobileBottomBar(NVacData);
  },

  /* ─── Navbar Scroll Behavior ────────────────────────────── */
  initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const onScroll = NVacUtils.throttle(() => {
      if (window.scrollY > 60) {
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
      }
    }, 80);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  },

  /* ─── Hamburger / Mobile Nav ────────────────────────────── */
  initHamburger() {
    const hamburger = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay   = document.getElementById('nav-overlay');
    const closeBtn  = document.getElementById('mobile-nav-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!hamburger || !mobileNav) return;

    const open = () => {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileNav.classList.add('open');
      overlay?.classList.add('active');
      overlay?.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Focus first link
      mobileNav.querySelector('.mobile-nav-link')?.focus();
    };

    const close = () => {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      overlay?.classList.remove('active');
      overlay?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      hamburger.focus();
    };

    hamburger.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    overlay?.addEventListener('click', close);

    // Close on link click
    mobileLinks.forEach(link => link.addEventListener('click', close));

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) close();
    });
  },

  /* ─── Smooth Scroll ─────────────────────────────────────── */
  initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const target = link.getAttribute('href');
      if (target === '#') return;
      const el = document.querySelector(target);
      if (!el) return;
      e.preventDefault();
      NVacUtils.scrollTo(el, NVacUtils.isMobile() ? 64 : 76);
    });
  },

  /* ─── Reveal Animations ─────────────────────────────────── */
  initRevealAnimations() {
    NVacUtils.initReveal();
  },

  /* ─── Lazy Images ───────────────────────────────────────── */
  initLazyImages() {
    NVacUtils.initLazyImages();

    // Also handle dynamically injected images
    const observer = new MutationObserver(() => {
      NVacUtils.initLazyImages();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  },

  /* ─── Carousels ─────────────────────────────────────────── */
  initCarousels() {
    // Destinations carousel
    this._makeCarousel('destinations-track', 'destinations-dots',
                       'dest-prev', 'dest-next');

    // Diaries carousel
    this._makeCarousel('diaries-track', 'diaries-dots',
                       'diaries-prev', 'diaries-next');

    // Offers carousel
    this._makeCarousel('offers-track', 'offers-dots',
                       'offers-prev', 'offers-next');

    // Testimonials carousel
    this._makeCarousel('testimonials-track', 'testimonials-dots',
                       'testimonials-prev', 'testimonials-next');
  },

  _makeCarousel(trackId, dotsId, prevId, nextId) {
    const track = document.getElementById(trackId);
    const dots  = document.getElementById(dotsId);
    const prev  = document.getElementById(prevId);
    const next  = document.getElementById(nextId);
    if (!track) return;
    return new NVacUtils.Carousel(track, { dots, prev, next });
  },

  /* ─── Wishlist ──────────────────────────────────────────── */
  initWishlist() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-wishlist-id]');
      if (!btn) return;

      const id = btn.dataset.wishlistId;
      const added = NVacUtils.Wishlist.toggle(id);

      // Update button state
      btn.classList.toggle('active', added);
      btn.setAttribute('aria-pressed', added);
      btn.setAttribute('aria-label', `${added ? 'Remove from' : 'Add to'} wishlist`);

      // Update heart icon
      const icon = NVacComponents.icon.heart(16, added);
      btn.innerHTML = icon;

      // Micro-feedback
      btn.style.transform = 'scale(1.3)';
      setTimeout(() => { btn.style.transform = ''; }, 250);
    });

    // Restore wishlist state on load
    const wishlisted = NVacUtils.Wishlist.get();
    wishlisted.forEach(id => {
      const btn = document.querySelector(`[data-wishlist-id="${id}"]`);
      if (btn) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        btn.innerHTML = NVacComponents.icon.heart(16, true);
      }
    });
  },

  /* ─── Search ────────────────────────────────────────────── */
  initSearch() {
    const searchInput = document.getElementById('hero-search');
    const searchBtn   = document.getElementById('hero-search-btn');
    const mobileSearchInput = document.getElementById('mobile-search');
    const searchToggle = document.getElementById('navbar-search-toggle');
    const searchModal  = document.getElementById('search-modal');
    const searchModalClose = document.getElementById('search-modal-close');
    const modalInput = document.getElementById('mobile-search-modal-input');
    const searchTags = document.querySelectorAll('.search-tag');

    const openModal = () => {
      searchModal?.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => modalInput?.focus(), 150);
    };

    const closeModal = () => {
      searchModal?.classList.remove('active');
      document.body.style.overflow = '';
    };

    searchToggle?.addEventListener('click', openModal);
    searchModalClose?.addEventListener('click', closeModal);

    searchModal?.addEventListener('click', (e) => {
      if (e.target === searchModal) closeModal();
    });

    const doSearch = (query) => {
      if (!query.trim()) return;
      closeModal();
      const dest = NVacData.destinations.find(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.country.toLowerCase().includes(query.toLowerCase())
      );
      if (dest) {
        NVacUtils.scrollTo('#destinations', 80);
      } else {
        // WhatsApp fallback
        const url = NVacUtils.getLeadWhatsApp(query);
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    };

    const mainSearchInput = document.getElementById('main-search-input');
    const mainSearchSubmit = document.getElementById('main-search-submit');

    mainSearchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doSearch(mainSearchInput.value);
    });

    mainSearchSubmit?.addEventListener('click', () => {
      doSearch(mainSearchInput?.value ?? '');
    });

    mobileSearchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doSearch(mobileSearchInput.value);
    });

    modalInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doSearch(modalInput.value);
    });

    searchTags.forEach(tag => {
      tag.addEventListener('click', () => {
        doSearch(tag.dataset.query || tag.innerText);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal?.classList.contains('active')) {
        closeModal();
      }
    });
  },

  /* ─── Travel Style Cards ────────────────────────────────── */
  initStyleCards() {
    document.addEventListener('click', (e) => {
      const card = e.target.closest('[data-style]');
      if (!card) return;

      const styleId = card.dataset.style;
      const style = NVacData.travelStyles.find(s => s.id === styleId);
      if (!style) return;

      // Build WhatsApp query
      const label = style.label.replace('\n', ' ');
      const url = NVacUtils.getLeadWhatsApp(label);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  },
};

/* ─── Boot on DOM Ready ─────────────────────────────────── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => NVacApp.init());
} else {
  NVacApp.init();
}
