'use strict';

window.addEventListener('DOMContentLoaded', () => {

  // Menu

  const mobileMenu = document.querySelector('[data-mobile-menu]'),
        btnOpen = document.querySelector('[data-open-menu]'),
        btnClose = document.querySelector('[data-close-menu]');

  btnClose.addEventListener('click', () => {
    mobileMenu.classList.add('header__block-hide');
    btnClose.classList.add('button-hide');
    btnOpen.classList.remove('button-hide');
  });

  btnOpen.addEventListener('click', () => {
    mobileMenu.classList.remove('header__block-hide');
    btnClose.classList.remove('button-hide');
    btnOpen.classList.add('button-hide');
  });

  // Map change 

  const mapButtonIsrael = document.querySelector('[data-map-israel]'),
        mapButtonRussia = document.querySelector('[data-map-russia]'),
        mapButton = document.querySelector('[data-map-change]'),
        map = document.querySelector('[data-map]');
});