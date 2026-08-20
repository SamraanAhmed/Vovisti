/* ============================================================
   VOVISTI — Navbar Component
   Injects the navbar into any page that includes this script.
   Usage: <div id="navbar-root"></div>
   ============================================================ */

(function () {
  const NAV_LINKS = [
    { label: "Work Visas",    href: "work-visas.html" },
    { label: "Study Abroad",  href: "study-abroad.html" },
    { label: "Visit Visas",   href: "visit-visas.html" },
    { label: "About Us",      href: "about.html" },
    { label: "Contact",       href: "contact.html" },
  ];

  function isActive(href) {
    const page = window.location.pathname.split("/").pop() || "index.html";
    return href === page ? "active" : "";
  }

  const desktopLinks = NAV_LINKS
    .map(l => `<a href="${l.href}" class="navbar__nav-link ${isActive(l.href)}">${l.label}</a>`)
    .join("\n");

  const mobileLinks = NAV_LINKS
    .map(l => `<a href="${l.href}" class="navbar__mobile-link">${l.label}</a>`)
    .join("\n");

  const PHONE = "+92 322 474 7038";
  const PHONE_HREF = "tel:+923224747038";

  const logoSVG = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48
               10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93
               0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45
               1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41
               0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>`;

  const phoneSVG = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5
               19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 .01h3a2
               2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45
               2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0
               012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>`;

  const html = `
    <nav class="navbar" id="main-navbar" role="navigation" aria-label="Main navigation">
      <div class="container navbar__inner">

        <!-- Logo -->
        <a href="index.html" class="navbar__logo" aria-label="Vovisti Home">
          <div class="navbar__logo-icon">${logoSVG}</div>
          <span class="navbar__logo-text">Vov<span>isti</span></span>
        </a>

        <!-- Desktop Nav Links -->
        <nav class="navbar__nav" aria-label="Desktop navigation">
          ${desktopLinks}
        </nav>

        <!-- Desktop Actions -->
        <div class="navbar__actions">
          <a href="${PHONE_HREF}" class="navbar__phone" aria-label="Call us">
            ${phoneSVG}
            ${PHONE}
          </a>
          <a href="contact.html" class="btn btn-primary navbar__cta">Book Consultation</a>
        </div>

        <!-- Hamburger Button -->
        <button class="navbar__hamburger" id="hamburger-btn"
                aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="navbar__mobile" id="mobile-menu" aria-hidden="true">
      ${mobileLinks}
      <div class="navbar__mobile-divider"></div>
      <div class="navbar__mobile-actions">
        <a href="${PHONE_HREF}" class="navbar__mobile-phone">
          ${phoneSVG} ${PHONE}
        </a>
        <a href="contact.html" class="btn btn-primary navbar__mobile-cta">Book Consultation</a>
      </div>
    </div>`;

  // Inject HTML
  function mount() {
    const root = document.getElementById("navbar-root");
    if (root) {
      root.innerHTML = html;
    } else {
      document.body.insertAdjacentHTML("afterbegin", html);
    }
    initBehavior();
  }

  function initBehavior() {
    const navbar     = document.getElementById("main-navbar");
    const hamburger  = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // Scroll: add .scrolled class
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen);
      mobileMenu.setAttribute("aria-hidden", !isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  // Mount when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
