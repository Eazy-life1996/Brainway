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
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerPadding: '-15%',
        initialSlide: 2
      }
    }]
  });
});