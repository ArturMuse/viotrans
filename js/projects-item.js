"use strict";

//gallery
var galleryMotion = function galleryMotion() {
    var sliderItemG = document.querySelectorAll(".album__item");
    var galDots = document.querySelectorAll(".gallery-popup__slider-nav-item");
    var sliderPopup = document.querySelector(".gallery-popup");
    var sliderPopupClose = document.querySelector(".gallery-popup__btn-close");

    var _loop = function _loop(i) {
        sliderItemG[i].addEventListener("click", function (event) {
            event.preventDefault();
            galDots[i].click();
            sliderPopup.classList.add("gallery-popup-open");
        });
    };

    for (var i = 0; i < sliderItemG.length; i++) {
        _loop(i);
    }
    sliderPopupClose.addEventListener("click", function () {
        sliderPopup.classList.remove("gallery-popup-open");
    });
};
galleryMotion();