/* ============================================================
   NVacations — Component Renderers
   components.js
   Pure JS functions that render each UI component to HTML.
   Components take data objects and return HTML strings.
   ============================================================ */

'use strict';

const NVacComponents = {

  /* ─── Logo ──────────────────────────────────────────────── */
  logo: (opts = {}) => {
    const { showTagline = true, dark = false } = opts;
    const textColor = dark ? 'style="color: var(--color-dark)"' : '';
    const subColor = dark ? 'style="color: var(--color-muted)"' : '';
    return `
      <a href="#home" class="nvac-logo" aria-label="NVacations Home">
        <img src="images/logo.png" alt="NVacations Club Logo" class="nvac-logo-img" width="46" height="46" />
        <div class="nvac-logo-text-wrap">
          <span class="nvac-logo-title" ${textColor}><span class="text-yellow">N</span>VACATIONS</span>
          ${showTagline ? `<span class="nvac-logo-sub" ${subColor}>Travel More. Worry Less.</span>` : ''}
        </div>
      </a>
    `;
  },

  /* ─── SVG Icons ─────────────────────────────────────────── */
  icon: {
    plane: (size = 20) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    `,
    whatsapp: (size = 20) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.536 5.854L0 24l6.335-1.512A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.019-1.374l-.36-.214-3.757.896.944-3.645-.235-.374A9.818 9.818 0 112 12c0-5.416 4.402-9.818 9.818-9.818 5.416 0 9.818 4.402 9.818 9.818S17.416 21.818 12 21.818z"/>
      </svg>
    `,
    phone: (size = 18) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    `,
    search: (size = 20) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    `,
    menu: (size = 20) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
        <line x1="3" y1="6"  x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    `,
    close: (size = 18) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    `,
    heart: (size = 16, filled = false) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    `,
    play: (size = 24) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z"/>
      </svg>
    `,
    star: (size = 14, filled = true) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
      </svg>
    `,
    arrowRight: (size = 16) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
      </svg>
    `,
    location: (size = 14) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    `,
    check: (size = 16) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
    `,
    chevronLeft: (size = 18) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="15,18 9,12 15,6"/>
      </svg>
    `,
    chevronRight: (size = 18) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="9,18 15,12 9,6"/>
      </svg>
    `,
    instagram: (size = 20) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    `,
    facebook: (size = 20) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    `,
    youtube: (size = 20) => `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    `,
  },

  /* ─── Navbar ────────────────────────────────────────────── */
  navbar: (data) => {
    const links = data.navLinks.map((link, i) =>
      `<li>
        <a href="${link.href}" class="nav-link${i === 0 ? ' active' : ''}"
           data-nav="${link.href.replace('#', '')}">${link.label}</a>
      </li>`
    ).join('');

    const mobileLinks = data.navLinks.map((link, i) =>
      `<li>
        <a href="${link.href}" class="mobile-nav-link${i === 0 ? ' active' : ''}"
           data-nav="${link.href.replace('#', '')}">
          <span>${link.label}</span>
          ${NVacComponents.icon.chevronRight(14)}
        </a>
      </li>`
    ).join('');

    return `
      <nav class="navbar transparent" id="navbar" role="navigation" aria-label="Main navigation">
        <div class="container navbar-inner">

          <!-- NVacations Logo -->
          <div class="navbar-logo">
            ${NVacComponents.logo()}
          </div>

          <!-- Desktop Nav Links -->
          <ul class="nav-links" role="list">
            ${links}
          </ul>

          <!-- Right Action Controls -->
          <div class="navbar-right">
            <!-- Phone CTA (Desktop/Tablet) -->
            <a href="tel:${data.meta.phone.replace(/\s/g, '')}"
               class="navbar-phone"
               aria-label="Call us at ${data.meta.phone}">
              <span class="navbar-phone-icon">${NVacComponents.icon.phone(14)}</span>
              <span>${data.meta.phone}</span>
            </a>

            <!-- Plan My Trip Button (Desktop) -->
            <a href="#contact" class="btn btn-primary btn-sm hide-mobile" id="nav-plan-btn">
              ${NVacComponents.icon.plane(14)}
              PLAN MY TRIP
            </a>

            <!-- Mobile Search Icon Button -->
            <button class="navbar-search-btn" id="navbar-search-toggle"
                    aria-label="Open search modal">
              ${NVacComponents.icon.search(18)}
            </button>

            <!-- Mobile Hamburger Menu Button -->
            <button class="hamburger" id="hamburger-btn"
                    aria-label="Open navigation menu" aria-expanded="false"
                    aria-controls="mobile-nav">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </button>
          </div>

        </div>
      </nav>

      <!-- Mobile Search Modal Overlay -->
      <div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="Search destinations">
        <div class="search-modal-header">
          <div class="search-modal-title">Where do you want to go?</div>
          <button class="search-modal-close" id="search-modal-close" aria-label="Close search">
            ${NVacComponents.icon.close(18)}
          </button>
        </div>
        <div class="search-modal-box">
          ${NVacComponents.icon.search(20)}
          <input type="text" class="search-modal-input" id="mobile-search-modal-input" placeholder="Search Maldives, Bali, Vietnam..." autofocus />
        </div>
        <div class="search-modal-suggestions">
          <span class="search-tag" data-query="Maldives">🏝️ Maldives</span>
          <span class="search-tag" data-query="Bali">🌺 Bali</span>
          <span class="search-tag" data-query="Vietnam">🇻🇳 Vietnam</span>
          <span class="search-tag" data-query="Kashmir">🏔️ Kashmir</span>
          <span class="search-tag" data-query="Thailand">🐘 Thailand</span>
          <span class="search-tag" data-query="Sri Lanka">🇱🇰 Sri Lanka</span>
        </div>
      </div>

      <!-- Mobile Nav Drawer -->
      <div class="overlay" id="nav-overlay" aria-hidden="true"></div>
      <aside class="mobile-nav" id="mobile-nav" role="dialog"
             aria-modal="true" aria-label="Mobile Navigation menu">
        <div class="mobile-nav-header">
          <div>
            ${NVacComponents.logo({ showTagline: false })}
          </div>
          <button class="mobile-nav-close" id="mobile-nav-close" aria-label="Close navigation menu">
            ${NVacComponents.icon.close(18)}
          </button>
        </div>
        <ul class="mobile-nav-links" role="list">
          ${mobileLinks}
        </ul>
        <div class="mobile-nav-footer">
          <a href="tel:${data.meta.phone.replace(/\s/g, '')}" class="mobile-nav-phone">
            ${NVacComponents.icon.phone(18)}
            <span>Call Us: ${data.meta.phone}</span>
          </a>
          <a href="#contact" class="btn btn-primary btn-block" id="mobile-nav-plan-btn">
            ${NVacComponents.icon.plane(16)} PLAN MY TRIP
          </a>
          <a href="${data.meta.whatsappLink}" class="btn btn-whatsapp btn-block" target="_blank"
             rel="noopener noreferrer">
            ${NVacComponents.icon.whatsapp(16)} WHATSAPP US
          </a>
        </div>
      </aside>
    `;
  },

  /* ─── Hero Section ───────────────────────────────────────── */
  hero: (data) => {
    const h = data.hero;
    return `
      <section class="hero" id="home">
        <!-- Background Image & Gradient Overlay -->
        <div class="hero-bg-wrap">
          <img src="${h.image}" alt="${h.imageAlt}" class="hero-bg-img" width="1920" height="1080" />
          <div class="hero-overlay"></div>
        </div>

        <!-- Postcard Stamp Badge (Desktop) -->
        <div class="hero-postcard">
          <div class="hero-postcard-tag">✨ Featured Experience</div>
          <div class="hero-postcard-dest">Maldives Paradise</div>
          <div class="hero-postcard-price">Starting at <strong>₹45,999</strong>/person</div>
        </div>

        <div class="container hero-container">
          <div class="hero-content">
            <!-- Overline Badge -->
            <div class="hero-badge">
              <span class="hero-badge-dot"></span>
              <span>Luxury Travel & Custom Tours</span>
            </div>

            <!-- Headline -->
            <h1 class="hero-title">
              ESCAPE<br>
              <span class="hero-title-yellow">ORDINARY.</span>
            </h1>

            <!-- Subtitle with Handwritten Accent -->
            <div class="hero-subtitle-wrap">
              <span class="hero-subtitle">${h.subtitle}</span>
              <svg class="hero-underline-svg" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14 Q 95 3 195 12" stroke="#08A88A" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </div>

            <!-- Buttons Group -->
            <div class="hero-buttons">
              <button class="btn btn-primary btn-xl hero-btn-primary" id="hero-plan-btn" onclick="NVacComponents.openTripModal()">
                ${NVacComponents.icon.plane(18)}
                <span>CUSTOMIZE MY TRIP 🛠️</span>
              </button>
              <a href="${data.meta.whatsappLink}" class="btn btn-whatsapp btn-xl hero-btn-whatsapp" target="_blank" rel="noopener noreferrer" id="hero-wa-btn">
                ${NVacComponents.icon.whatsapp(18)}
                <span>WHATSAPP US</span>
              </a>
            </div>

            <!-- Dotted Flight Path Doodle -->
            <svg class="hero-airplane-route" viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 70 Q 70 10 140 30" stroke="#FFB800" stroke-width="2.5" stroke-dasharray="5 5"/>
              <g transform="translate(136, 22) rotate(25)">
                <path d="M0 0 L14 5 L0 10 L4 5 Z" fill="#FFB800"/>
              </g>
            </svg>
          </div>
        </div>
      </section>
    `;
  },

  /* ─── Search & Travel Styles Section ────────────────────── */
  searchAndStyles: (data) => {
    const styles = data.travelStyles.map(s => `
      <div class="travel-style-card reveal" data-style="${s.id}" role="button" aria-label="${s.label.replace('\n', ' ')}">
        <div class="travel-style-icon-wrap" style="background:${s.bg}">
          ${s.icon}
        </div>
        <div class="travel-style-name">${s.label.replace('\n', '<br>')}</div>
      </div>
    `).join('');

    return `
      <!-- Floating Search Box Bar -->
      <section class="search-section" aria-label="Destination search">
        <div class="container">
          <div class="search-card">
            <div class="search-card-header">
              <span style="font-size:1.2rem">🗺️</span>
              <h2 class="search-card-title">Where do you want to go?</h2>
            </div>
            <div class="search-form">
              <span class="search-icon-pin">
                ${NVacComponents.icon.location(20)}
              </span>
              <input type="text" class="search-input-field" id="main-search-input"
                     placeholder="Search Maldives, Bali, Vietnam..." aria-label="Search destination" />
              <button class="search-submit-btn" id="main-search-submit" aria-label="Search">
                ${NVacComponents.icon.search(18)}
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Travel Your Way Section -->
      <section class="travel-styles-section">
        <div class="container">
          <div class="section-header-center">
            <span class="text-overline">Tailor-Made Experiences</span>
            <h2 class="text-section-title">TRAVEL YOUR WAY</h2>
          </div>
          <div class="travel-styles-grid" role="list">
            ${styles}
          </div>
        </div>
      </section>
    `;
  },

  /* ─── Top Destinations Section (Single Horizontal Row Track) ─── */
  topDestinations: (data) => {
    const dests = data.destinations.slice(0, 6);

    const cards = dests.map(d => 
      NVacComponents.destinationCard(d, NVacUtils.Wishlist.has(d.id))
    ).join('');

    const dots = dests.slice(0, 4).map((_, i) =>
      `<button class="carousel-dot${i === 0 ? ' active' : ''}" aria-label="Destination slide ${i + 1}"></button>`
    ).join('');

    return `
      <section class="section section-bg-offwhite" id="destinations">
        <div class="container">
          <div class="section-header">
            <div class="section-title-group">
              <span class="text-overline">POPULAR GETAWAYS</span>
              <h2 class="text-section-title" style="display:inline-flex;align-items:center;gap:8px;position:relative;">
                TOP DESTINATIONS
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#08A88A" aria-hidden="true" style="transform:rotate(45deg);">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
                <!-- Tiny hand-drawn underline accent -->
                <svg class="hero-underline-svg" viewBox="0 0 200 12" fill="none" style="bottom:-8px;height:10px;color:#08A88A;">
                  <path d="M2 8 C 50 2, 150 12, 198 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </h2>
              <p class="text-section-subtitle" style="margin-top:6px;">Handpicked luxury & budget escapes curated for you</p>
            </div>
            <a href="#destinations" class="section-view-all">
              View All Destinations ${NVacComponents.icon.arrowRight(14)}
            </a>
          </div>

          <!-- Single Horizontal Line Track (Ek hi line me saare cards) -->
          <div class="dest-row-track" id="destinations-track" role="list">
            ${cards}
          </div>

          <!-- Carousel Dots Below Cards -->
          <div class="carousel-dots" id="destinations-dots" style="margin-top:var(--space-6);">
            ${dots}
          </div>
        </div>
      </section>
    `;
  },

  /* ─── Compact Premium Destination Card (4:5 Ratio) ────────── */
  destinationCard: (dest, isWishlisted = false) => `
    <article class="dest-card reveal" data-dest-id="${dest.id}" role="article"
             onclick="window.location.hash='destinations'">
      <div class="card-image-wrap">
        <img
          src="${dest.image}"
          alt="${dest.alt}"
          loading="lazy"
          class="img-lazy"
          width="280"
          height="350"
        />
      </div>
      <div class="dest-card-overlay"></div>

      <!-- Rating Badge Top-Left -->
      <div class="dest-card-rating" aria-label="Rating: ${dest.rating} stars">
        ${NVacComponents.icon.star(10)}
        ${dest.rating}
      </div>

      <!-- 100% Customizable Badge -->
      <div style="position:absolute;top:12px;left:70px;background:rgba(8,168,138,0.9);backdrop-filter:blur(6px);color:white;font-size:10px;font-weight:var(--fw-black);padding:3px 8px;border-radius:12px;letter-spacing:0.02em;z-index:3;box-shadow:0 2px 8px rgba(0,0,0,0.2);">
        🎨 100% Custom
      </div>

      <!-- Wishlist Heart Top-Right -->
      <button class="dest-card-wishlist${isWishlisted ? ' active' : ''}"
              data-wishlist-id="${dest.id}"
              aria-label="${isWishlisted ? 'Remove from' : 'Add to'} wishlist"
              aria-pressed="${isWishlisted}"
              onclick="event.stopPropagation();">
        ${NVacComponents.icon.heart(14, isWishlisted)}
      </button>

      <!-- Content Overlay at Bottom -->
      <div class="dest-card-content">
        <h3 class="dest-card-name">${dest.name}</h3>
        <div class="dest-card-price">
          ${dest.priceLabel || 'Customizable from'} <strong>${dest.price}</strong>
        </div>
      </div>
    </article>
  `,

  /* ─── Horizontal Destination Card (Mobile) ──────────────── */
  destinationCardHorizontal: (dest, isWishlisted = false) => `
    <article class="dest-card-horizontal reveal" data-dest-id="${dest.id}" role="article">
      <!-- Image Left -->
      <div class="card-image-wrap">
        <img
          src="${dest.image}"
          alt="${dest.alt}"
          loading="lazy"
          class="img-lazy"
          width="200"
          height="150"
        />
        <div class="dest-card-rating" aria-label="Rating: ${dest.rating} stars">
          ${NVacComponents.icon.star(10)}
          ${dest.rating}
        </div>
      </div>

      <!-- Details Right -->
      <div class="dest-card-content">
        <div>
          <div class="dest-card-header-row">
            <h3 class="dest-card-name">${dest.name}</h3>
            <button class="dest-card-wishlist${isWishlisted ? ' active' : ''}"
                    data-wishlist-id="${dest.id}"
                    aria-label="${isWishlisted ? 'Remove from' : 'Add to'} wishlist"
                    aria-pressed="${isWishlisted}">
              ${NVacComponents.icon.heart(14, isWishlisted)}
            </button>
          </div>
          <div class="dest-card-country">${dest.country}</div>
        </div>

        <div class="dest-card-footer-row">
          <div class="dest-card-price">
            ${dest.priceLabel || 'Customizable from'}
            <strong>${dest.price}</strong>
          </div>
          <span class="dest-card-arrow">
            ${NVacComponents.icon.chevronRight(14)}
          </span>
        </div>
      </div>
    </article>
  `,

  /* ─── Travel Diary Card ─────────────────────────────────── */
  diaryCard: (diary) => `
    <article class="diary-card reveal" data-diary-id="${diary.id}" role="article"
             aria-label="${diary.title}">
      <div class="card-image-wrap">
        <img
          src="${diary.image}"
          alt="${diary.title}"
          loading="lazy"
          class="img-lazy"
          width="240"
          height="373"
        />
      </div>
      <div class="diary-card-overlay"></div>
      <div class="diary-card-play" aria-label="Play ${diary.title} video">
        ${NVacComponents.icon.play(24)}
      </div>
      <div class="diary-card-title">
        <div>${diary.title}</div>
        <div style="font-size:var(--text-xs);font-weight:var(--fw-regular);
                    color:rgba(255,255,255,0.7);margin-top:3px;">
          ${diary.duration} watch
        </div>
      </div>
    </article>
  `,

  /* ─── Offer Card ────────────────────────────────────────── */
  offerCard: (offer) => `
    <article class="offer-card reveal" data-offer-id="${offer.id}" role="article">
      <img
        src="${offer.image}"
        alt="${offer.name}"
        loading="lazy"
        class="offer-card-img img-lazy"
        width="320"
        height="240"
      />
      <div class="offer-card-overlay"></div>
      <div class="offer-card-body">
        <div class="offer-card-badge">${offer.tag}</div>
        <div class="offer-card-name">${offer.name}</div>
        <div class="offer-card-sub">${offer.discount} · ${offer.validity}</div>
        <a href="${NVacUtils.getLeadWhatsApp(offer.name)}"
           class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
          ${offer.cta} ${NVacComponents.icon.arrowRight(14)}
        </a>
      </div>
    </article>
  `,

  /* ─── Funky Postcard Testimonial Card ────────────────────── */
  testimonialCard: (t) => `
    <article class="testimonial-card reveal" data-testimonial-id="${t.id}" role="article">
      <!-- Top Row: Trip Badge + Stars -->
      <div class="testimonial-top-row">
        <span class="testimonial-dest-badge">
          ✈️ ${t.destination || 'Luxury'} Trip
        </span>
        <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">
          ${Array(t.rating).fill(NVacComponents.icon.star(13)).join('')}
        </div>
      </div>

      <!-- Review Text Quote -->
      <p class="testimonial-text">"${t.text}"</p>

      <!-- Traveler Profile Footer -->
      <footer class="testimonial-author">
        <div class="testimonial-avatar"
             style="background:${t.color}20;color:${t.color};border-color:${t.color};"
             aria-hidden="true">
          ${t.initials}
        </div>
        <div>
          <div class="testimonial-author-name">
            ${t.name}
            <span class="testimonial-verified-badge">✓ Verified</span>
          </div>
          <div class="testimonial-author-location">
            ${NVacComponents.icon.location(11)} ${t.location}
          </div>
        </div>
      </footer>
    </article>
  `,

  /* ─── Benefit Card (Funky Design) ────────────────────────── */
  benefitCard: (benefit, index = 0) => {
    const step = String(index + 1).padStart(2, '0');
    const colorMap = {
      yellow: { bg: 'rgba(255,184,0,0.18)', border: '#FFB800' },
      teal:   { bg: 'rgba(8,168,138,0.18)', border: '#08A88A' },
      coral:  { bg: 'rgba(244,91,105,0.18)', border: '#F45B69' },
      navy:   { bg: 'rgba(0,201,167,0.18)', border: '#00C9A7' },
    };
    const theme = colorMap[benefit.iconColor] || colorMap.yellow;

    return `
      <div class="benefit-card reveal" role="listitem" style="--benefit-color:${theme.border};">
        <span class="benefit-card-step">${step} / 04</span>
        <div class="benefit-icon-wrap" style="background:${theme.bg};border:2px solid ${theme.border};">
          ${benefit.icon}
        </div>
        <div>
          <h3 class="benefit-title">${benefit.title}</h3>
          <p class="benefit-desc">${benefit.desc}</p>
        </div>
      </div>
    `;
  },

  /* ─── Travel Style Card ─────────────────────────────────── */
  styleCard: (style) => `
    <button class="style-card reveal" data-style="${style.id}"
            aria-label="Browse ${style.label.replace('\n', ' ')} packages">
      <div class="style-icon" style="background:${style.bg}" aria-hidden="true">
        ${style.icon}
      </div>
      <span class="style-label">${style.label.replace('\n', '<br>')}</span>
    </button>
  `,

  /* ─── Stat Item ─────────────────────────────────────────── */
  statItem: (stat) => `
    <div class="stat-item reveal" role="listitem">
      <div class="stat-number" aria-label="${stat.number} ${stat.label}">
        ${stat.number}
      </div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `,

  /* ─── Mobile Bottom Bar ─────────────────────────────────── */
  mobileBottomBar: (data) => `
    <div class="mobile-bottom-bar" id="mobile-bottom-bar" role="navigation"
         aria-label="Quick actions">
      <div class="mobile-bottom-bar-inner">
        <a href="tel:${data.meta.phone.replace(/\s/g, '')}"
           class="mobile-bottom-action"
           aria-label="Call us">
          <span style="font-size:1.3rem;">📞</span>
          <span>CALL US</span>
        </a>
        <a href="#contact" class="mobile-bottom-action primary"
           aria-label="Plan my trip">
          <span style="font-size:1.3rem;">✈️</span>
          <span style="font-size:9px;">PLAN TRIP</span>
        </a>
        <a href="${data.meta.whatsappLink}" class="mobile-bottom-action"
           target="_blank" rel="noopener noreferrer"
           aria-label="WhatsApp us">
          <span style="font-size:1.3rem;">💬</span>
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  `,

  /* ─── Section Header Helper ─────────────────────────────── */
  sectionHeader: ({ overline, title, subtitle, viewAllHref, viewAllLabel } = {}) => `
    <div class="section-header">
      <div class="section-title-group">
        ${overline ? `<span class="text-overline">${overline}</span>` : ''}
        <h2 class="text-section-title">${title}</h2>
        ${subtitle ? `<p class="text-section-subtitle">${subtitle}</p>` : ''}
      </div>
      ${viewAllHref ? `
        <a href="${viewAllHref}" class="section-view-all" aria-label="View all ${title}">
          View All ${NVacComponents.icon.arrowRight(14)}
        </a>
      ` : ''}
    </div>
  `,

  /* ─── Carousel Dots Generator ───────────────────────────── */
  carouselDots: (count, activeIndex = 0, id = 'carousel') => `
    <div class="carousel-dots" role="tablist" aria-label="Carousel navigation">
      ${Array.from({ length: count }, (_, i) =>
        `<button class="carousel-dot${i === activeIndex ? ' active' : ''}"
                 role="tab"
                 aria-selected="${i === activeIndex}"
                 aria-label="Go to slide ${i + 1}"
                 data-carousel="${id}"
                 data-index="${i}"></button>`
      ).join('')}
    </div>
  `,

  /* ─── Carousel Nav Buttons ──────────────────────────────── */
  carouselNav: (id) => `
    <div class="carousel-nav">
      <button class="carousel-btn" data-carousel-prev="${id}" aria-label="Previous">
        ${NVacComponents.icon.chevronLeft(18)}
      </button>
      <button class="carousel-btn" data-carousel-next="${id}" aria-label="Next">
        ${NVacComponents.icon.chevronRight(18)}
      </button>
    </div>
  `,

  /* ─── Customize My Trip Interactive Modal ─────────────────── */
  tripCustomizerModal: () => `
    <div class="trip-modal-overlay" id="trip-custom-modal" role="dialog" aria-modal="true" onclick="if(event.target === this) NVacComponents.closeTripModal()">
      <div class="trip-modal-card">
        <button class="trip-modal-close" onclick="NVacComponents.closeTripModal()" aria-label="Close modal">✕</button>
        
        <div class="trip-modal-header">
          <span class="trip-modal-overline">✨ 100% TAILOR-MADE TRIPS</span>
          <h2 class="trip-modal-title">Customize Your Dream Vacation 🛠️</h2>
          <p class="trip-modal-subtitle">Select your preferences & get a personalized itinerary on WhatsApp!</p>
        </div>

        <form id="trip-custom-form" onsubmit="event.preventDefault(); NVacComponents.sendCustomTripToWhatsApp();">
          <!-- Destination -->
          <div class="trip-form-group">
            <label class="trip-form-label">📍 Where do you want to go?</label>
            <div class="trip-select-pills" id="modal-dest-pills">
              <span class="trip-pill selected" data-value="Maldives 🏝️">Maldives 🏝️</span>
              <span class="trip-pill" data-value="Bali 🌺">Bali 🌺</span>
              <span class="trip-pill" data-value="Kashmir 🏔️">Kashmir 🏔️</span>
              <span class="trip-pill" data-value="Vietnam 🏮">Vietnam 🏮</span>
              <span class="trip-pill" data-value="Sri Lanka 🇱🇰">Sri Lanka 🇱🇰</span>
              <span class="trip-pill" data-value="Thailand 🐘">Thailand 🐘</span>
              <span class="trip-pill" data-value="Other / Not Sure ✈️">Other ✈️</span>
            </div>
          </div>

          <!-- Hotel Preference -->
          <div class="trip-form-group">
            <label class="trip-form-label">🏨 Hotel / Stay Preference</label>
            <div class="trip-select-pills" id="modal-hotel-pills">
              <span class="trip-pill selected" data-value="5★ Luxury Resort">5★ Luxury Resort</span>
              <span class="trip-pill" data-value="Overwater Villa 🏡">Overwater Villa 🏡</span>
              <span class="trip-pill" data-value="4★ Premium Hotel">4★ Premium Hotel</span>
              <span class="trip-pill" data-value="3★ Budget / Boutique Stay">3★ Budget Stay</span>
            </div>
          </div>

          <!-- Trip Style -->
          <div class="trip-form-group">
            <label class="trip-form-label">💖 Trip Type</label>
            <div class="trip-select-pills" id="modal-type-pills">
              <span class="trip-pill selected" data-value="Honeymoon 💖">Honeymoon 💖</span>
              <span class="trip-pill" data-value="Family Trip 👨‍👩‍👧">Family 👨‍👩‍👧</span>
              <span class="trip-pill" data-value="Friends / Group 🎉">Friends 🎉</span>
              <span class="trip-pill" data-value="Solo Trip 🎒">Solo 🎒</span>
            </div>
          </div>

          <!-- Budget Per Person -->
          <div class="trip-form-group">
            <label class="trip-form-label">💰 Budget Per Person (Approx)</label>
            <div class="trip-select-pills" id="modal-budget-pills">
              <span class="trip-pill" data-value="₹25k - ₹45k">₹25k - ₹45k</span>
              <span class="trip-pill selected" data-value="₹45k - ₹75k">₹45k - ₹75k</span>
              <span class="trip-pill" data-value="₹75k - ₹1.2L">₹75k - ₹1.2L</span>
              <span class="trip-pill" data-value="₹1.2L+ Luxury">₹1.2L+ Luxury</span>
            </div>
          </div>

          <!-- Month & Name -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;" class="trip-form-group">
            <div>
              <label class="trip-form-label">📅 Travel Month</label>
              <input type="text" class="trip-input-text" id="modal-travel-month" placeholder="e.g. Oct / Next Month" required />
            </div>
            <div>
              <label class="trip-form-label">👤 Your Name</label>
              <input type="text" class="trip-input-text" id="modal-user-name" placeholder="Enter your name" required />
            </div>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="trip-modal-submit">
            ${NVacComponents.icon.whatsapp(20)}
            <span>Get My Custom Itinerary on WhatsApp 💬</span>
          </button>
        </form>
      </div>
    </div>
  `,

  openTripModal: () => {
    const modal = document.getElementById('trip-custom-modal');
    if (modal) modal.classList.add('active');
  },

  closeTripModal: () => {
    const modal = document.getElementById('trip-custom-modal');
    if (modal) modal.classList.remove('active');
  },

  sendCustomTripToWhatsApp: () => {
    const dest   = document.querySelector('#modal-dest-pills .selected')?.dataset.value || 'Custom Destination';
    const hotel  = document.querySelector('#modal-hotel-pills .selected')?.dataset.value || 'Preferred Hotel';
    const type   = document.querySelector('#modal-type-pills .selected')?.dataset.value || 'Custom Trip';
    const budget = document.querySelector('#modal-budget-pills .selected')?.dataset.value || 'Standard Budget';
    const month  = document.getElementById('modal-travel-month')?.value.trim() || 'Flexible Month';
    const name   = document.getElementById('modal-user-name')?.value.trim() || 'Traveler';

    const text = `Hi NVacations! 👋 I want to customize my trip:

📍 Destination: ${dest}
🏨 Hotel Style: ${hotel}
💖 Trip Type: ${type}
💰 Budget / Person: ${budget}
📅 Travel Month: ${month}
👤 My Name: ${name}

Please share a customized itinerary and best quote! ✈️`;

    const url = `https://wa.me/918178180063?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    NVacComponents.closeTripModal();
  },
};

/* ─── Global Pill Selection Handler ──────────────────────── */
document.addEventListener('click', (e) => {
  const pill = e.target.closest('.trip-pill');
  if (pill) {
    const parent = pill.parentElement;
    if (parent && parent.classList.contains('trip-select-pills')) {
      parent.querySelectorAll('.trip-pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
    }
  }
});

/* ─── Export ────────────────────────────────────────────── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NVacComponents;
}
