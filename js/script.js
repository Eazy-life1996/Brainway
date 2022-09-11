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

  // Create workers card

  class workerCard {
    constructor (img, altImg, workerName, workerJob) {
      this.img = img;
      this.altImg = altImg;
      this.workerName = workerName;
      this.workerJob = workerJob;
    }

    createWorkerCard() {
      const element = document.createElement('div');
      element.classList.add('worker__block');

      element.innerHTML = `
      <img src="${this.img}" alt="${this.altImg}" class="worker__img">
      <p class="worker__name">${this.workerName}</p>
      <p class="worker__job">${this.workerJob}</p>
      `;

      document.querySelector('.worker__container').append(element);
    }
  }

  const addworkersCard = function() {
    for (let i = 0; i < 6; i++) {
      for (let b = 1; b < 5; b++) {
        const workerPicture = `img/worker-${b}.jpg`;
        new workerCard(workerPicture, 'Workeer', 'John Smith', 'Head of PM/BA').createWorkerCard();
      }
    }
  };

  addworkersCard();
});
