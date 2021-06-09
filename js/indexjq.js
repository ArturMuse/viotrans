'use strict';

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
});
$('.tabs__articles').slick({
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
});
$('.tabs__news').slick({
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
});
$('.catalog-slider').slick({
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000
});

$('#order-form-tel').mask("+7 (999) 999-99-99");
$('#popup-order-form-tel').mask("+7 (999) 999-99-99");
$('#popup-call-form-tel').mask("+7 (999) 999-99-99");