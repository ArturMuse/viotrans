const menuShow = () => {
    const navItem = document.querySelectorAll(".header__nav-btn");
    const navMenu = document.querySelectorAll(".header__nav-menu");

    for(let i = 0; i < navItem.length; i++) {
        navMenu[i].addEventListener("mouseover", ()=>{
            navItem[i].classList.add("header__nav-item-a-active");
        })
        navMenu[i].addEventListener("mouseout", ()=>{
            navItem[i].classList.remove("header__nav-item-a-active");
        })
    }
};
menuShow();

window.onscroll = () => {
    let header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header__logo');
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
const navShow = () => {
    const navShowBtn = document.querySelector(".header__mobile-burger");
    const navCloseBtn = document.querySelector(".header__nav-close");
    const nav = document.querySelector(".header__nav");

    navShowBtn.addEventListener("click", ()=>{
        nav.classList.add("header__nav-active")
    })
    navCloseBtn.addEventListener("click", ()=>{
        nav.classList.remove("header__nav-active")
    })
};
navShow();

