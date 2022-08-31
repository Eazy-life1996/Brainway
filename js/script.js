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
    map = document.querySelector('[data-map]');

  mapButtonRussia.addEventListener('click', () => {
    mapButtonIsrael.classList.remove('contact__map-block-bg');
    mapButtonRussia.classList.add('contact__map-block-bg');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256806.8988780687!2d30.14460004879167!3d59.81087104568997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696216c17e3e995%3A0xfdfc35a7be8f39c0!2z0KHQsNC00L7QstCw0Y8g0YPQuy4sIDQ2LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0KDQvtGB0YHQuNGPLCAxOTY2MDE!5e0!3m2!1sru!2skg!4v1659358157316!5m2!1sru!2skg";
  });
  
  mapButtonIsrael.addEventListener('click', () => {
    mapButtonIsrael.classList.add('contact__map-block-bg');
    mapButtonRussia.classList.remove('contact__map-block-bg');
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d216338.90615560676!2d34.80884786869801!3d32.0883008471965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d49f0fcae7941%3A0x8a71713b50b96589!2zQW1hbCAzNywgUGV0YWggVGlrdmEsINCY0LfRgNCw0LjQu9GM!5e0!3m2!1sru!2skg!4v1659362508665!5m2!1sru!2skg";
  });

  // Comments card

  class CommentsCard {
    constructor (img, altimg, name, company, title, comment, logo, altlogo) {
      this.img = img;
      this.altimg = altimg;
      this.name = name;
      this.company = company;
      this.title = title;
      this.comment = comment;
      this.logo = logo;
      this.altlogo = altlogo;
    }

    createCommentCard() {
      const element = document.createElement('div');
      element.classList.add('comments__card', 'slick-slide', 'slick-current', 'slick-center');

      element.innerHTML = `
      <div class="comments__user">
      <img src="${this.img}" alt="${this.altimg}" class="comments__img">
        <div class="comments__user-info">
          <p class="comments__name">
            ${this.name}
          </p>
          <p class="commetns__company">
            ${this.company}
          </p>
        </div>
      </div>
      <div class="comments__subtitle">
        <img src="img/svg/decoration-comments.svg" alt="SVG" class="comments__svg">
        <h3 class="comments__title">
          ${this.title}
        </h3>
      </div>
      <p class="comments__comment">
        ${this.comment}
      </p>
      <a href="#" class="comments__link">Read more</a>
      <img src="${this.logo}" alt="${this.altlogo}" class="comments__img-logo">
      <div class="comments__fill"></div>
      `;

      // document.querySelector('.comments__slider').append(element); как добавить в слайдер днимаческие элементы??
    }
  }

  const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`could not fetch ${url} status: ${res.status}`);
    }  // Выкидываем ошибку т.к. fetch не воспринимает ошибки со статусами 400 и тд

    return await res.json();
  };

  getResource('http://localhost:3000/menu')
  .then(data => {
    data.forEach(({
      img, altimg, name, company, title, comment, logo, altlogo
    }) => {
      new CommentsCard(img, altimg, name, company, title, comment, logo, altlogo).createCommentCard();
    });
  });
});
