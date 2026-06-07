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
 * Init on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
  initFAQ();
  initNav();
});
