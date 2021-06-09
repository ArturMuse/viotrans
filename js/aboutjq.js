'use strict';

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

$('#order-form-tel').mask("+7 (999) 999-99-99");
$('#popup-call-form-tel').mask("+7 (999) 999-99-99");