// Mega menu: click-to-toggle, click-outside / Escape to close.
// Triggers: <li class="dropdown"> containing <a class="nav-dropdown-trigger"> and <ul class="dropdown-menu">.

(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  if (!header) return;

  var dropdowns = header.querySelectorAll('.dropdown');

  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd === except) return;
      var menu = dd.querySelector('.dropdown-menu');
      var trigger = dd.querySelector('.nav-dropdown-trigger');
      if (menu) menu.classList.remove('is-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  dropdowns.forEach(function (dd) {
    var trigger = dd.querySelector('.nav-dropdown-trigger');
    var menu = dd.querySelector('.dropdown-menu');
    if (!trigger || !menu) return;

    // Prevent the trigger's default link behavior — it's a toggle, not a destination.
    // Triggers with href="#" are placeholders; real links (e.g. Going Forward -> guidelines/index.html)
    // should NOT be intercepted.
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-haspopup', 'true');

    trigger.addEventListener('click', function (e) {
      // If the trigger has a real destination (not "#"), let the navigation proceed
      // and just close any open menu.
      var href = trigger.getAttribute('href');
      if (href && href !== '#' && href !== '') {
        closeAll(null);
        return;
      }

      e.preventDefault();
      var isOpen = menu.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) closeAll(dd);
    });
  });

  // Click outside the header closes any open menu.
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) closeAll(null);
  });

  // Escape closes any open menu.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });
})();