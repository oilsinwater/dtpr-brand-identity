// Mega menu: click-to-toggle, click-outside / Escape to close.
// Also auto-detects active route to underline parent dropdown triggers and highlight active page in the big nav.

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
      var href = trigger.getAttribute('href');
      if (!href || href === '#' || href.startsWith('javascript:')) {
        e.preventDefault();
        var isOpen = dd.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (isOpen) closeAll(dd);
      } else {
        e.preventDefault();
        var isOpen = dd.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (isOpen) closeAll(dd);
      }
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

  // Highlight current active page in big nav and underline parent section in proper nav
  var currentPath = window.location.pathname;
  var currentFilename = currentPath.split('/').filter(Boolean).pop() || 'index.html';
  var isGuidelines = currentPath.includes('/guidelines');

  var allLinks = header.querySelectorAll('nav a');
  allLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href === '#') return;

    var linkFile = href.split('#')[0].split('/').filter(Boolean).pop();
    var linkIsGuidelines = href.includes('guidelines') || (isGuidelines && !href.startsWith('../'));

    var isMatch = false;
    if (currentFilename === 'index.html' && !isGuidelines) {
      if (linkFile === 'index.html' && !linkIsGuidelines && (href === './index.html' || href === 'index.html' || href === '../index.html' || href === '/index.html' || href === '/')) {
        isMatch = true;
      }
    } else if (currentFilename === 'index.html' && isGuidelines) {
      if (linkFile === 'index.html' && (href === './index.html' || href === 'guidelines/index.html' || href === './guidelines/index.html')) {
        isMatch = true;
      }
    } else if (currentFilename === linkFile && (isGuidelines === linkIsGuidelines || (!href.includes('../') && isGuidelines))) {
      isMatch = true;
    }

    if (isMatch) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');

      // If this link is inside a dropdown-menu, mark the parent trigger as active-section
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
})();
