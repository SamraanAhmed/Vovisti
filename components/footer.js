/* ============================================================
   VOVISTI — Footer Component
   Injects the footer into any page that includes this script.
   Usage: <div id="footer-root"></div>
   ============================================================ */

(function () {
  const YEAR = new Date().getFullYear();

  const logoSVG = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48
               10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93
               0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45
               1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41
               0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>`;

  const whatsappSVG = `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>`;

  const html = `
    <footer class="footer" role="contentinfo">

      <!-- Top Call-to-Action Bar -->
      <div class="footer__top">
        <div class="container footer__top-inner">
          <p class="footer__tagline">
            Ready to start your<br>
            <span>overseas journey?</span>
          </p>
          <div class="footer__top-cta">
            <a href="https://wa.me/923224747038?text=Hello%2C%20I%20am%20interested%20in%20Vovisti%20visa%20services."
               class="footer__whatsapp" target="_blank" rel="noopener noreferrer">
              ${whatsappSVG} Chat on WhatsApp
            </a>
            <a href="contact.html" class="btn btn-outline-dark" style="border-color:rgba(255,255,255,0.3);color:#fff;">
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>

      <!-- Main Grid -->
      <div class="footer__main">
        <div class="container">
          <div class="footer__grid">

            <!-- Brand Column -->
            <div class="footer__col-brand">
              <div class="footer__brand-logo">
                <div class="footer__brand-icon">${logoSVG}</div>
                <span class="footer__brand-name">Vov<span>isti</span></span>
              </div>
              <p class="footer__brand-desc">
                Your trusted partner for overseas work visas, study abroad services, and 
                travel visa consultancy. All-inclusive packages. Transparent payments.
              </p>
              <div class="footer__social">
                <!-- Facebook -->
                <a href="#" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <!-- Instagram -->
                <a href="#" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <!-- TikTok -->
                <a href="#" class="footer__social-link" aria-label="TikTok" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <!-- YouTube -->
                <a href="#" class="footer__social-link" aria-label="YouTube" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            <!-- Services Column -->
            <div class="footer__col">
              <h3 class="footer__col-title">Services</h3>
              <ul class="footer__links">
                <li><a href="work-visas.html" class="footer__link">Work Visa Packages</a></li>
                <li><a href="study-abroad.html" class="footer__link">Study Abroad</a></li>
                <li><a href="visit-visas.html" class="footer__link">Visit / Tourist Visas</a></li>
                <li><a href="#" class="footer__link">IELTS / PTE Coaching</a></li>
                <li><a href="#" class="footer__link">Document Services</a></li>
                <li><a href="#" class="footer__link">Medical Report (MR)</a></li>
              </ul>
            </div>

            <!-- Destinations Column -->
            <div class="footer__col">
              <h3 class="footer__col-title">Destinations</h3>
              <ul class="footer__links">
                <li><a href="#" class="footer__link">🇬🇧 United Kingdom</a></li>
                <li><a href="#" class="footer__link">🇺🇸 United States</a></li>
                <li><a href="#" class="footer__link">🇨🇦 Canada</a></li>
                <li><a href="#" class="footer__link">🇦🇺 Australia</a></li>
                <li><a href="#" class="footer__link">🇩🇪 Germany</a></li>
                <li><a href="#" class="footer__link">🇮🇹 Italy / 🇫🇷 France</a></li>
                <li><a href="#" class="footer__link">🇳🇿 New Zealand</a></li>
              </ul>
            </div>

            <!-- Contact Column -->
            <div class="footer__col">
              <h3 class="footer__col-title">Contact Us</h3>
              <div class="footer__contact-items">

                <div class="footer__contact-item">
                  <div class="footer__contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div class="footer__contact-text">
                    <span class="footer__contact-label">Phone / WhatsApp</span>
                    <a href="tel:+923224747038" class="footer__contact-value">+92 322 474 7038</a>
                  </div>
                </div>

                <div class="footer__contact-item">
                  <div class="footer__contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div class="footer__contact-text">
                    <span class="footer__contact-label">Email</span>
                    <a href="mailto:info@vovisti.com" class="footer__contact-value">info@vovisti.com</a>
                  </div>
                </div>

                <div class="footer__contact-item">
                  <div class="footer__contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div class="footer__contact-text">
                    <span class="footer__contact-label">Offices</span>
                    <span class="footer__contact-value">Islamabad · Lahore · Karachi</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <div class="container footer__bottom-inner">
          <p class="footer__copyright">
            &copy; ${YEAR} Vovisti Consultancy. All rights reserved.
          </p>
          <nav class="footer__legal" aria-label="Legal links">
            <a href="#" class="footer__legal-link">Privacy Policy</a>
            <a href="#" class="footer__legal-link">Terms of Service</a>
            <a href="#" class="footer__legal-link">Refund Policy</a>
          </nav>
        </div>
      </div>

    </footer>`;

  function mount() {
    const root = document.getElementById("footer-root");
    if (root) {
      root.innerHTML = html;
    } else {
      document.body.insertAdjacentHTML("beforeend", html);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
