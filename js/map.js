'use strict';

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