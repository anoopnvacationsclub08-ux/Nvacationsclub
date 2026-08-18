/* ============================================================
   NVacations — Core Utilities & Helpers
   utils.js
   ============================================================ */

'use strict';

const NVacUtils = {

  /* ─── DOM Helpers ───────────────────────────────────────── */

  /** Select single element */
  qs: (selector, scope = document) => scope.querySelector(selector),

  /** Select all elements */
  qsa: (selector, scope = document) => [...scope.querySelectorAll(selector)],

  /** Create element with optional class and content */
  el: (tag, classes = '', content = '') => {
    const e = document.createElement(tag);
    if (classes) e.className = classes;
    if (content) e.innerHTML = content;
    return e;
  },

  /** Add event listener with optional delegation */
  on: (element, event, handler, options = false) => {
    if (!element) return;
    element.addEventListener(event, handler, options);
  },

  /** Remove event listener */
  off: (element, event, handler) => {
    if (!element) return;
    element.removeEventListener(event, handler);
  },

  /** Delegate event listener */
  delegate: (parent, selector, event, handler) => {
    if (!parent) return;
    parent.addEventListener(event, (e) => {
      const target = e.target.closest(selector);
      if (target && parent.contains(target)) {
        handler.call(target, e, target);
      }
    });
  },

  /** Toggle class on element */
  toggleClass: (el, cls) => el?.classList.toggle(cls),

  /** Add class to element(s) */
  addClass: (els, cls) => {
    if (!els) return;
    const list = Array.isArray(els) ? els : [els];
    list.forEach(e => e?.classList.add(cls));
  },

  /** Remove class from element(s) */
  removeClass: (els, cls) => {
    if (!els) return;
    const list = Array.isArray(els) ? els : [els];
    list.forEach(e => e?.classList.remove(cls));
  },

  /** Check if element has class */
  hasClass: (el, cls) => el?.classList.contains(cls) ?? false,

  /** Set element display */
  show: (el) => el && (el.style.display = ''),
  hide: (el) => el && (el.style.display = 'none'),

  /* ─── Scroll Helpers ────────────────────────────────────── */

  /** Smooth scroll to target */
  scrollTo: (target, offset = 80) => {
    const el = typeof target === 'string'
      ? document.querySelector(target)
      : target;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  },

  /** Get scroll percentage of page */
  scrollPercent: () => {
    const h = document.documentElement;
    return (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
  },

  /** Throttle scroll/resize events */
  throttle: (fn, limit = 100) => {
    let lastCall = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn(...args);
      }
    };
  },

  /** Debounce input/resize events */
  debounce: (fn, delay = 250) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  },

  /* ─── String Helpers ────────────────────────────────────── */

  /** Format price number to INR */
  formatINR: (amount) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount),

  /** Clamp number between min and max */
  clamp: (value, min, max) => Math.min(Math.max(value, min), max),

  /** Generate star HTML */
  stars: (rating, max = 5) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = max - full - half;
    return (
      '★'.repeat(full) +
      (half ? '½' : '') +
      '☆'.repeat(empty)
    );
  },

  /** Generate SVG star icons */
  svgStars: (rating, max = 5) => {
    let html = '';
    for (let i = 1; i <= max; i++) {
      const filled = i <= rating;
      html += `<svg width="14" height="14" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>`;
    }
    return html;
  },

  /* ─── Intersection Observer Helpers ─────────────────────── */

  /** Observe element for reveal animations */
  observe: (elements, callback, options = {}) => {
    const defaults = {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target, observer);
        }
      });
    }, { ...defaults, ...options });

    const els = Array.isArray(elements) ? elements : [elements];
    els.forEach(el => el && observer.observe(el));

    return observer;
  },

  /** Auto-reveal elements with .reveal class */
  initReveal: () => {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    reveals.forEach(el => observer.observe(el));
    return observer;
  },

  /* ─── Lazy Image Loading ────────────────────────────────── */

  /** Initialize lazy image loading */
  initLazyImages: () => {
    const images = document.querySelectorAll('img[loading="lazy"], .img-lazy');
    if (!images.length) return;

    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded');
        } else {
          img.onload = () => img.classList.add('loaded');
          if (img.complete) img.classList.add('loaded');
        }
      });
    } else {
      // Polyfill with IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            img.onload = () => img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '200px' });

      images.forEach(img => observer.observe(img));
    }
  },

  /* ─── Carousel Helper ───────────────────────────────────── */

  /**
   * Create a simple scroll-snap carousel controller.
   * @param {HTMLElement} track - The scrollable container
   * @param {Object} opts       - { dots, prev, next, activeClass }
   */
  Carousel: class {
    constructor(track, opts = {}) {
      this.track      = track;
      this.dots       = opts.dots       ?? null;
      this.prevBtn    = opts.prev       ?? null;
      this.nextBtn    = opts.next       ?? null;
      this.activeClass= opts.activeClass ?? 'active';
      this.index      = 0;
      this._init();
    }

    _init() {
      if (!this.track) return;

      // Scroll → update dots
      this.track.addEventListener('scroll', NVacUtils.throttle(() => {
        this._updateIndex();
      }, 80), { passive: true });

      // Button nav
      this.prevBtn?.addEventListener('click', () => this.prev());
      this.nextBtn?.addEventListener('click', () => this.next());

      // Dot nav
      if (this.dots) {
        NVacUtils.qsa('.carousel-dot', this.dots).forEach((dot, i) => {
          dot.addEventListener('click', () => this.goTo(i));
        });
      }
    }

    _items() {
      return [...this.track.children];
    }

    _updateIndex() {
      const items = this._items();
      if (!items.length) return;
      const scrollLeft = this.track.scrollLeft;
      const itemW = items[0].offsetWidth + parseInt(getComputedStyle(this.track).gap || 0);
      this.index = NVacUtils.clamp(Math.round(scrollLeft / itemW), 0, items.length - 1);
      this._updateDots();
    }

    _updateDots() {
      if (!this.dots) return;
      NVacUtils.qsa('.carousel-dot', this.dots).forEach((dot, i) => {
        dot.classList.toggle(this.activeClass, i === this.index);
      });
    }

    goTo(index) {
      const items = this._items();
      if (!items[index]) return;
      this.index = index;
      items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      this._updateDots();
    }

    next() {
      this.goTo(Math.min(this.index + 1, this._items().length - 1));
    }

    prev() {
      this.goTo(Math.max(this.index - 1, 0));
    }
  },

  /* ─── Wishlist Manager ──────────────────────────────────── */
  Wishlist: {
    key: 'nvac_wishlist',

    get() {
      try {
        return JSON.parse(localStorage.getItem(this.key) || '[]');
      } catch { return []; }
    },

    toggle(id) {
      const list = this.get();
      const idx = list.indexOf(id);
      if (idx === -1) {
        list.push(id);
      } else {
        list.splice(idx, 1);
      }
      localStorage.setItem(this.key, JSON.stringify(list));
      return idx === -1; // returns true if added
    },

    has(id) {
      return this.get().includes(id);
    },

    count() {
      return this.get().length;
    },
  },

  /* ─── Form Helpers ──────────────────────────────────────── */

  /** Simple WhatsApp message builder */
  buildWhatsAppUrl: (phone, message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
  },

  /** Get WhatsApp URL for lead capture */
  getLeadWhatsApp: (destination = '') => {
    const msg = destination
      ? `Hi NVacations! I'm interested in a trip to ${destination}. Please share more details.`
      : `Hi NVacations! I'd like to plan a trip. Please share your best deals.`;
    return NVacUtils.buildWhatsAppUrl('918178180063', msg);
  },

  /* ─── Device Detection ──────────────────────────────────── */
  isMobile: () => window.innerWidth < 768,
  isTablet: () => window.innerWidth >= 768 && window.innerWidth < 1200,
  isDesktop: () => window.innerWidth >= 1200,

  /* ─── RAF Utility ───────────────────────────────────────── */
  raf: (fn) => requestAnimationFrame(fn),

  /* ─── Cookie / Storage ──────────────────────────────────── */
  storage: {
    get: (key) => {
      try { return JSON.parse(localStorage.getItem(key)); }
      catch { return null; }
    },
    set: (key, value) => {
      try { localStorage.setItem(key, JSON.stringify(value)); }
      catch { /* quota exceeded */ }
    },
    remove: (key) => localStorage.removeItem(key),
  },
};

/* ─── Named Exports (for ES modules) ──────────────────────── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NVacUtils;
}
