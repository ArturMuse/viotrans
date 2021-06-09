$('.gallery-popup__slider').slick({
    infinite: true,
    speed: 1,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true
});

$('.gallery-popup__slider-nav').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    asNavFor: '.gallery-popup__slider',
    focusOnSelect: true
});