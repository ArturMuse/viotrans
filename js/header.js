"use strict";

var menuShow = function menuShow() {
    var navItem = document.querySelectorAll(".header__nav-btn");
    var navMenu = document.querySelectorAll(".header__nav-menu");

    var _loop = function _loop(i) {
        navMenu[i].addEventListener("mouseover", function () {
            navItem[i].classList.add("header__nav-item-a-active");
        });
        navMenu[i].addEventListener("mouseout", function () {
            navItem[i].classList.remove("header__nav-item-a-active");
        });
    };

    for (var i = 0; i < navItem.length; i++) {
        _loop(i);
    }
};
menuShow();

window.onscroll = function () {
    var header = document.querySelector('.header');
    var headerLogo = document.querySelector('.header__logo');
    if (window.innerWidth > 1020) {
        if (window.pageYOffset > 100) {
            header.classList.add('header-fixed');
            headerLogo.href = "#";
        } else {
            header.classList.remove('header-fixed');
            headerLogo.href = "index.html";
        }
    }
    if (window.pageYOffset > 100) {
        headerLogo.href = "#";
    } else {
        headerLogo.href = "index.html";
    }
};
//Mobile burger
var navShow = function navShow() {
    var navShowBtn = document.querySelector(".header__mobile-burger");
    var navCloseBtn = document.querySelector(".header__nav-close");
    var nav = document.querySelector(".header__nav");

    navShowBtn.addEventListener("click", function () {
        nav.classList.add("header__nav-active");
    });
    navCloseBtn.addEventListener("click", function () {
        nav.classList.remove("header__nav-active");
    });
};
navShow();