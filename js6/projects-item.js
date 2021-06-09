//gallery
const galleryMotion = () => {
    const sliderItemG = document.querySelectorAll(".album__item");
    const galDots = document.querySelectorAll(".gallery-popup__slider-nav-item");
    const sliderPopup = document.querySelector(".gallery-popup");
    const sliderPopupClose = document.querySelector(".gallery-popup__btn-close");
    for (let i = 0; i < sliderItemG.length; i++) {
        sliderItemG[i].addEventListener("click", (event)=>{
            event.preventDefault();
            galDots[i].click();
            sliderPopup.classList.add("gallery-popup-open");
        })
    }
    sliderPopupClose.addEventListener("click", ()=>{
        sliderPopup.classList.remove("gallery-popup-open");
    })
};
galleryMotion();