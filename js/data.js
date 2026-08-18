/* ============================================================
   NVacations — Site Data
   data.js
   All content data separated from UI components.
   Edit this file to change destinations, packages, etc.
   ============================================================ */

'use strict';

const NVacData = {

  /* ─── Site Meta ─────────────────────────────────────────── */
  meta: {
    brand: 'NVacations',
    tagline: 'Travel More. Worry Less.',
    phone: '+91 8178180063',
    whatsapp: '+918178180063',
    whatsappLink: 'https://wa.me/918178180063',
    instagram: 'https://instagram.com/nvacations',
    facebook: 'https://facebook.com/nvacations',
    youtube: 'https://youtube.com/nvacations',
    since: '2015',
    email: 'info@nvacations.in',
  },

  /* ─── Navigation ────────────────────────────────────────── */
  navLinks: [
    { label: 'Home',          href: '#home' },
    { label: 'Destinations',  href: '#destinations' },
    { label: 'Packages',      href: '#packages' },
    { label: 'Travel Diaries',href: '#diaries' },
    { label: 'Offers',        href: '#offers' },
    { label: 'About Us',      href: '#about' },
    { label: 'Contact Us',    href: '#contact' },
  ],

  /* ─── Hero ──────────────────────────────────────────────── */
  hero: {
    headline: ['ESCAPE', 'ORDINARY.'],
    subtitle: 'Travel Stories Worth Telling.',
    image: 'images/hero_maldives.jpg',
    imageAlt: 'Woman in yellow dress walking on a wooden pier in Maldives',
    ctaPrimary:   { label: 'Plan My Trip',   href: '#contact' },
    ctaSecondary: { label: 'WhatsApp Us',     href: 'https://wa.me/918178180063' },
  },

  /* ─── Stats ─────────────────────────────────────────────── */
  stats: [
    { number: '100+',  label: 'Destinations',     icon: '🌍' },
    { number: '1000+', label: 'Happy Travelers',  icon: '👥' },
    { number: 'Best',  label: 'Price Guarantee',  icon: '🏷️' },
    { number: '24×7',  label: 'Support',          icon: '🎧' },
  ],

  /* ─── Destinations ──────────────────────────────────────── */
  destinations: [
    {
      id: 'maldives',
      name: 'Maldives',
      country: 'Indian Ocean',
      image: 'images/dest_maldives.jpg',
      alt: 'Aerial view of Maldives overwater bungalows',
      price: '₹45,999',
      priceLabel: 'Customizable from',
      rating: 4.9,
      reviews: 312,
      tag: '100% Customizable',
      tagColor: 'yellow',
    },
    {
      id: 'bali',
      name: 'Bali',
      country: 'Indonesia',
      image: 'images/dest_bali.jpg',
      alt: 'Bali temple at golden hour',
      price: '₹39,999',
      priceLabel: 'Customizable from',
      rating: 4.8,
      reviews: 278,
      tag: '100% Customizable',
      tagColor: 'teal',
    },
    {
      id: 'vietnam',
      name: 'Vietnam',
      country: 'Southeast Asia',
      image: 'images/dest_vietnam.jpg',
      alt: 'Halong Bay limestone karsts',
      price: '₹34,999',
      priceLabel: 'Customizable from',
      rating: 4.7,
      reviews: 195,
      tag: '100% Customizable',
      tagColor: 'coral',
    },
    {
      id: 'srilanka',
      name: 'Sri Lanka',
      country: 'South Asia',
      image: 'images/dest_srilanka.jpg',
      alt: 'Sigiriya rock fortress Sri Lanka',
      price: '₹32,999',
      priceLabel: 'Customizable from',
      rating: 4.8,
      reviews: 143,
      tag: '100% Customizable',
      tagColor: 'yellow',
    },
    {
      id: 'kashmir',
      name: 'Kashmir',
      country: 'India',
      image: 'images/dest_kashmir.jpg',
      alt: 'Kashmir Dal Lake with shikara boat',
      price: '₹29,999',
      priceLabel: 'Customizable from',
      rating: 4.8,
      reviews: 421,
      tag: '100% Customizable',
      tagColor: 'teal',
    },
    {
      id: 'thailand',
      name: 'Thailand',
      country: 'Southeast Asia',
      image: 'images/dest_thailand.jpg',
      alt: 'Thailand Phi Phi Islands',
      price: '₹31,999',
      priceLabel: 'Customizable from',
      rating: 4.7,
      reviews: 356,
      tag: '100% Customizable',
      tagColor: 'coral',
    },
  ],

  /* ─── Travel Styles ─────────────────────────────────────── */
  travelStyles: [
    {
      id: 'honeymoon',
      label: 'Honeymoon\nEscapes',
      icon: '💕',
      color: 'coral',
      bg: 'rgba(244,91,105,0.1)',
    },
    {
      id: 'family',
      label: 'Family\nVacations',
      icon: '👨‍👩‍👧‍👦',
      color: 'yellow',
      bg: 'rgba(255,184,0,0.1)',
    },
    {
      id: 'group',
      label: 'Group\nAdventures',
      icon: '🧗',
      color: 'teal',
      bg: 'rgba(8,168,138,0.1)',
    },
    {
      id: 'luxury',
      label: 'Luxury\nExperiences',
      icon: '💎',
      color: 'navy',
      bg: 'rgba(6,39,67,0.06)',
    },
    {
      id: 'international',
      label: 'International\nTours',
      icon: '🌐',
      color: 'teal',
      bg: 'rgba(8,168,138,0.1)',
    },
    {
      id: 'india',
      label: 'India\nGetaways',
      icon: '🏔️',
      color: 'coral',
      bg: 'rgba(244,91,105,0.1)',
    },
  ],

  /* ─── Featured Package ──────────────────────────────────── */
  featuredPackage: {
    id: 'maldives-escape',
    name: 'Maldives Escape',
    tagline: 'An Overwater Paradise Awaits',
    duration: '4 Nights / 5 Days',
    image: 'images/dest_maldives.jpg',
    price: '₹45,999',
    priceLabel: 'Starting at',
    priceNote: 'per person',
    inclusions: [
      { icon: '🏨', label: 'Premium Resort' },
      { icon: '🍳', label: 'Breakfast Included' },
      { icon: '✈️', label: 'Airport Transfers' },
      { icon: '🤿', label: 'Snorkeling Trip' },
    ],
    cta: 'View Package',
    highlight: 'Most Booked',
  },

  /* ─── Travel Diaries ────────────────────────────────────── */
  diaries: [
    {
      id: 'bali-diaries',
      title: 'Bali Diaries',
      subtitle: 'Temples, Rice Fields & Sunsets',
      image: 'images/dest_bali.jpg',
      duration: '7 min',
    },
    {
      id: 'maldives-diaries',
      title: 'Maldives Diaries',
      subtitle: 'Life Above the Ocean',
      image: 'images/dest_maldives.jpg',
      duration: '5 min',
    },
    {
      id: 'kashmir-diaries',
      title: 'Kashmir Diaries',
      subtitle: 'Heaven on Earth',
      image: 'images/dest_kashmir.jpg',
      duration: '9 min',
    },
    {
      id: 'thailand-diaries',
      title: 'Thailand Diaries',
      subtitle: 'Islands, Beaches & Street Food',
      image: 'images/dest_thailand.jpg',
      duration: '6 min',
    },
  ],

  /* ─── Benefits ──────────────────────────────────────────── */
  benefits: [
    {
      id: 'custom',
      icon: '🗺️',
      iconColor: 'yellow',
      title: 'Custom Itineraries',
      desc: 'Tailor-made trips designed just for you, your style, and your budget.',
    },
    {
      id: 'support',
      icon: '🎧',
      iconColor: 'teal',
      title: '24×7 Support',
      desc: "We're with you at every step — before, during, and after your trip.",
    },
    {
      id: 'price',
      icon: '🏷️',
      iconColor: 'coral',
      title: 'Best Price Guarantee',
      desc: 'Best trips, best value. We match any price or beat it.',
    },
    {
      id: 'trusted',
      icon: '🌟',
      iconColor: 'navy',
      title: 'Trusted by 1000+ Travelers',
      desc: 'Memories that last forever. Join thousands of happy travelers.',
    },
  ],

  /* ─── Offers ────────────────────────────────────────────── */
  offers: [
    {
      id: 'maldives-offer',
      name: 'Maldives Offer',
      discount: 'Up to 30% OFF',
      tag: '🔥 Hot Deal',
      image: 'images/dest_maldives.jpg',
      validity: 'Valid till 31 Aug 2026',
      price: '₹31,999',
      originalPrice: '₹45,999',
      cta: 'Book Now',
    },
    {
      id: 'bali-special',
      name: 'Bali Special',
      discount: 'Up to 25% OFF',
      tag: '⚡ Flash Sale',
      image: 'images/dest_bali.jpg',
      validity: 'Valid till 25 Aug 2026',
      price: '₹24,749',
      originalPrice: '₹32,999',
      cta: 'Book Now',
    },
    {
      id: 'thailand-escape',
      name: 'Thailand Escape',
      discount: 'Up to 20% OFF',
      tag: '🌴 Summer Deal',
      image: 'images/dest_thailand.jpg',
      validity: 'Valid till 30 Sep 2026',
      price: '₹19,999',
      originalPrice: '₹24,999',
      cta: 'Book Now',
    },
    {
      id: 'kashmir-special',
      name: 'Kashmir Special',
      discount: 'Up to 15% OFF',
      tag: '❄️ Limited Seats',
      image: 'images/dest_kashmir.jpg',
      validity: 'Valid till 15 Sep 2026',
      price: '₹16,149',
      originalPrice: '₹18,999',
      cta: 'Book Now',
    },
  ],

  /* ─── Testimonials ──────────────────────────────────────── */
  testimonials: [
    {
      id: 't1',
      name: 'Anjali S.',
      location: 'Delhi, India',
      rating: 5,
      text: 'Best trip ever! Everything was so planned. Thank you NVacations! The Maldives package was absolutely perfect — worth every rupee!',
      initials: 'AS',
      color: '#FFB800',
      destination: 'Maldives',
    },
    {
      id: 't2',
      name: 'Rohit M.',
      location: 'Mumbai, India',
      rating: 5,
      text: 'Amazing experience! The team is super supportive and friendly. They handled every detail from flights to hotels. Highly recommend!',
      initials: 'RM',
      color: '#08A88A',
      destination: 'Bali',
    },
    {
      id: 't3',
      name: 'Neha P.',
      location: 'Pune, India',
      rating: 5,
      text: 'Memories for a lifetime. From hotels to itinerary, everything was perfect! Kashmir was breathtaking and the service was exceptional.',
      initials: 'NP',
      color: '#F45B69',
      destination: 'Kashmir',
    },
    {
      id: 't4',
      name: 'Vikram R.',
      location: 'Bangalore, India',
      rating: 5,
      text: 'Thailand with NVacations was incredible. They found us the best resort at a price we could not believe. Definitely booking again!',
      initials: 'VR',
      color: '#FFB800',
      destination: 'Thailand',
    },
  ],

  /* ─── Inspiration Grid ──────────────────────────────────── */
  inspiration: [
    { image: 'images/hero_maldives.jpg',  alt: 'Maldives pier',       size: 'large'  },
    { image: 'images/dest_bali.jpg',      alt: 'Bali temple',         size: 'small'  },
    { image: 'images/dest_vietnam.jpg',   alt: 'Vietnam bay',         size: 'small'  },
    { image: 'images/dest_kashmir.jpg',   alt: 'Kashmir shikara',     size: 'medium' },
    { image: 'images/dest_thailand.jpg',  alt: 'Thailand beach',      size: 'small'  },
    { image: 'images/dest_srilanka.jpg',  alt: 'Sri Lanka fortress',  size: 'small'  },
  ],

  /* ─── Footer Links ──────────────────────────────────────── */
  footerLinks: {
    explore: [
      { label: 'Home',          href: '#home'         },
      { label: 'Destinations',  href: '#destinations' },
      { label: 'Packages',      href: '#packages'     },
      { label: 'Travel Diaries',href: '#diaries'      },
      { label: 'Offers',        href: '#offers'       },
    ],
    company: [
      { label: 'About Us',   href: '#about'   },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Blog',       href: '#blog'    },
      { label: 'Careers',    href: '#careers' },
    ],
    popular: [
      { label: 'Maldives',  href: '#maldives'  },
      { label: 'Bali',      href: '#bali'      },
      { label: 'Kashmir',   href: '#kashmir'   },
      { label: 'Thailand',  href: '#thailand'  },
      { label: 'Sri Lanka', href: '#srilanka'  },
      { label: 'Vietnam',   href: '#vietnam'   },
    ],
  },
};

/* Export for ES module use (safe to remove if not using modules) */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NVacData;
}
