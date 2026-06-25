/* ============================================
   Element Movement CrossFit — Main JS
   ============================================ */

/**
 * FAQ Accordion
 * Toggles open/close on each FAQ item
 */
function initFAQ() {
  document.querySelectorAll('.fq').forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.parentElement.classList.toggle('open');
    });
  });
}

/**
 * Sticky Nav shadow on scroll
 */
function initNav() {
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
      nav.style.boxShadow = '0 1px 10px rgba(0,0,0,0.05)';
    }
  });
}

/**
 * Mobile hamburger menu
 */
function initMobileNav() {
  var burger = document.querySelector('.nav-burger');
  var links  = document.querySelector('.nav-links');
  if (!burger || !links) return;

  burger.addEventListener('click', function() {
    var open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  // Close when a link is tapped
  links.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      links.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-label', 'Open menu');
    });
  });

  // Close on outside tap
  document.addEventListener('click', function(e) {
    if (!e.target.closest('nav')) {
      links.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-label', 'Open menu');
    }
  });
}

/**
 * Promo banner — shifts the fixed nav and page content down by the
 * banner's actual rendered height, so spacing stays correct at any
 * screen size or text-wrap. Dismissal is remembered via localStorage.
 */
function initPromoBanner() {
  var banner = document.getElementById('promoBanner');
  var nav = document.querySelector('nav');
  if (!banner || !nav) return;

  if (localStorage.getItem('promoBannerDismissed') === '1') {
    banner.style.display = 'none';
    return;
  }

  function adjust() {
    var h = banner.offsetHeight;
    nav.style.top = h + 'px';
    document.body.style.paddingTop = h + 'px';
  }
  adjust();
  window.addEventListener('resize', adjust);

  var closeBtn = document.getElementById('promoBannerClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      banner.style.display = 'none';
      nav.style.top = '0px';
      document.body.style.paddingTop = '0px';
      localStorage.setItem('promoBannerDismissed', '1');
    });
  }
}

/**
 * Init on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
  initFAQ();
  initNav();
  initMobileNav();
  initPromoBanner();
});
