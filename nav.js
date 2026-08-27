// Mega menu: click-to-toggle, click-outside / Escape to close.
// Auto-detects active route for subpages inside the big nav, without persistent selection on the Cover link.

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
      dd.classList.remove('is-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  dropdowns.forEach(function (dd) {
    var trigger = dd.querySelector('.nav-dropdown-trigger');
    var menu = dd.querySelector('.dropdown-menu');
    if (!trigger || !menu) return;

    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-haspopup', 'true');

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = dd.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) closeAll(dd);
    });
  });

  // Click outside header closes open menus
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) closeAll(null);
  });

  // Escape closes any open menu
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });

  // Highlight active page inside the big nav and highlight active section trigger in proper nav
  var currentPath = window.location.pathname;
  var currentFilename = currentPath.split('/').filter(Boolean).pop() || '';
  var isGuidelines = currentPath.includes('/guidelines');

  // Do not persistently underline Cover link
  if (currentFilename && currentFilename !== 'index.html') {
    var dropdownLinks = header.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      var linkFile = href.split('#')[0].split('/').filter(Boolean).pop();
      var linkIsGuidelines = href.includes('guidelines') || (isGuidelines && !href.startsWith('../'));

      if (currentFilename === linkFile && (isGuidelines === linkIsGuidelines || (!href.includes('../') && isGuidelines))) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('active');

        // Mark the parent section trigger as active in the proper nav
        var parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
          var trigger = parentDropdown.querySelector('.nav-dropdown-trigger');
          if (trigger) {
            trigger.classList.add('active-section');
            trigger.setAttribute('aria-current', 'true');
          }
        }
      }
    });
  }
})();
