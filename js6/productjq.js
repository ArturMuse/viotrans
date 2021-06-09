$('.catalog__inner-mob').slick({
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
$('.tabs__articles').slick({
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000
});
$('.gallery-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    asNavFor: '.gallery-popup__slider',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000
});
$('.gallery-popup__slider').slick({
    infinite: true,
    speed: 1,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.gallery-slider'
});
$('.catalog__inner-desk').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000
});
$('#order-form-tel').mask("+7 (999) 999-99-99");
$('#preview-call-form-tel').mask("+7 (999) 999-99-99");
$('#popup-call-form-tel').mask("+7 (999) 999-99-99");