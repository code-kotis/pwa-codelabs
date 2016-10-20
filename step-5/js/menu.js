(function () {
  'use strict';

  var menuIconElement = document.querySelector('.header__icon');
  var menuElement = document.querySelector('.menu');
  var menuOverlayElement = document.querySelector('.menu__overlay');

  menuIconElement.addEventListener('click', toggleMenu, false);
  menuOverlayElement.addEventListener('click', toggleMenu, false);

  function toggleMenu() {
    if (!isMenuOpen()) {
      showMenu();
    }
    else {
      hideMenu();
    }
  }

  function isMenuOpen() {
    return menuElement.classList.contains('menu--show');
  }

  function hideMenu() {
    menuElement.classList.remove('menu--show');
    menuOverlayElement.classList.remove('menu__overlay--show');
  }

  function showMenu() {
    menuElement.classList.add('menu--show');
    menuOverlayElement.classList.add('menu__overlay--show');
  }
})();
