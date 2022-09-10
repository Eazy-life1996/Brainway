$(document).ready(function () {
  $('.comments__slider').slick({
    mobileFirst: true,
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1.05,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
        arrows: true,
        cssEase: 'ease',
      }
    }]
  });
});
$(document).ready(function () {
  $('.clients__slider').slick({
    mobileFirst: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [{
      breakpoint: 1100,
      settings: {
        variableWidth: true,
        slidesToScroll: 1,
        cssEase: 'ease',
      }
    }]
  });
});
$(document).ready(function () {
  $('.comments__slider-big').slick({
    slidesToShow: 1,
    centerMode: false,
    slidesToScroll: 1,
    arrows: true,
    cssEase: 'ease',
    infinite: false
  });
});