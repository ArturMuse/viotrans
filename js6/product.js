//popupShowProduct
const popupShowProduct = () => {
    const popupCall = document.querySelector(".popup-call");
    const popupCallBtnShow = document.querySelector(".popup-call-show-btn");

    popupCallBtnShow.addEventListener("click", ()=>{
        popupCall.classList.add("popup-call-active");
    })
}
popupShowProduct();

//Order form validation
const orderValidation = () => {
    const orderForm = document.querySelector(".order__form");
    const orderFormTitle = document.querySelector(".order__title");
    const orderFieldInput = document.querySelectorAll(".order__form-input");
    const orderFieldLabel = document.querySelector(".order__form-agreement-label");
    const orderFieldCheckbox = document.querySelector(".order__form-agreement");

    const orderFormBtn = document.querySelector(".order__form-btn");

    const orderSuccess = document.querySelector(".order__success");

    orderFormBtn.addEventListener("click", ()=>{
        let inputCheck = false;
        let agreementCheck = false;

        for (let j = 0; j < orderFieldInput.length; j++) {
            if (!orderFieldInput[j].value) {
                orderFieldInput[j].style.border = '2px solid red';
            } else {
                orderFieldInput[j].style.border = '2px solid var(--dark)';
            }
        }
        if (!orderFieldCheckbox.checked) {
            orderFieldLabel.style.color = 'red';
            orderFieldLabel.classList.add('popup-order__form-agreement-label-error');
        } else {
            orderFieldLabel.style.color = 'initial';
            orderFieldLabel.classList.remove('popup-order__form-agreement-label-error');
        }

        if (orderFieldInput[0].value && orderFieldInput[1].value && orderFieldInput[2].value) {
            inputCheck = true;
        } else {
            inputCheck = false;
        }

        if (orderFieldCheckbox.checked) {
            agreementCheck = true;
        } else {
            agreementCheck = false;
        }

        if (inputCheck && agreementCheck) {
            orderSuccess.style.display = "flex";
            orderForm.style.opacity = "0";
            orderFormTitle.style.opacity = "0";
            setTimeout(()=>{
                window.location.reload();
            },5000)
        }
    })
}
orderValidation();

//Popup Call
const popupCall = () => {
    const popupCallClose = document.querySelector(".popup-call__btn");
    const popupCall = document.querySelector(".popup-call");

    const popupCallInner = document.querySelector(".popup-call__inner");
    const popupCallSuccess = document.querySelector(".popup-call__success");
    const popupCallFormBtn = document.querySelector(".popup-call__form-btn");

    const popupCallFieldInput = document.querySelectorAll(".popup-call__form-input");
    const popupCallFieldLabel = document.querySelector(".popup-call__form-agreement-label");
    const popupCallFieldCheckbox = document.querySelector(".popup-call__form-agreement");

    popupCallFormBtn.addEventListener("click", ()=> {
        let inputCheckCall = false;
        let agreementCheckCall = false;

        for (let j = 0; j < popupCallFieldInput.length; j++) {
            if (!popupCallFieldInput[j].value) {
                popupCallFieldInput[j].style.border = '2px solid red';
            } else {
                popupCallFieldInput[j].style.border = '2px solid var(--dark)';
            }
        }
        if (!popupCallFieldCheckbox.checked) {
            popupCallFieldLabel.style.color = 'red';
            popupCallFieldLabel.classList.add('popup-call__form-agreement-label-error');
        } else {
            popupCallFieldLabel.style.color = 'initial';
            popupCallFieldLabel.classList.remove('popup-call__form-agreement-label-error');
        }

        if (popupCallFieldInput[0].value && popupCallFieldInput[1].value) {
            inputCheckCall = true;
        } else {
            inputCheckCall = false;
        }

        if (popupCallFieldCheckbox.checked) {
            agreementCheckCall = true;
        } else {
            agreementCheckCall = false;
        }

        if (inputCheckCall && agreementCheckCall) {
            popupCallSuccess.style.display = "flex";
            popupCallInner.style.display = "none";
            setTimeout(()=>{
                window.location.reload();
            },5000)
        }
    })

    popupCallClose.addEventListener("click", ()=>{
        popupCall.classList.remove('popup-call-active');
    })
};
popupCall();

//Preview Form
const previewCall = () => {
    const previewForm = document.querySelector(".preview-call__form");
    const previewSuccess = document.querySelector(".preview-call__success");
    const previewFormBtn = document.querySelector(".preview-call__form-btn");

    const previewFieldInput = document.querySelectorAll(".preview-call__form-input");
    const previewFieldLabel = document.querySelector(".preview-call__form-agreement-label");
    const previewFieldCheckbox = document.querySelector(".preview-call__form-agreement");

    previewFormBtn.addEventListener("click", ()=> {
        let inputCheckPreview = false;
        let agreementCheckPreview = false;

        for (let j = 0; j < previewFieldInput.length; j++) {
            if (!previewFieldInput[j].value) {
                previewFieldInput[j].style.border = '2px solid red';
            } else {
                previewFieldInput[j].style.border = '2px solid var(--dark)';
            }
        }
        if (!previewFieldCheckbox.checked) {
            previewFieldLabel.style.color = 'red';
            previewFieldLabel.classList.add('popup-call__form-agreement-label-error');
        } else {
            previewFieldLabel.style.color = 'initial';
            previewFieldLabel.classList.remove('popup-call__form-agreement-label-error');
        }

        if (previewFieldInput[0].value && previewFieldInput[1].value) {
            inputCheckPreview = true;
        } else {
            inputCheckPreview = false;
        }

        if (previewFieldCheckbox.checked) {
            agreementCheckPreview = true;
        } else {
            agreementCheckPreview = false;
        }

        if (inputCheckPreview && agreementCheckPreview) {
            previewSuccess.style.display = "flex";
            previewForm.style.display = "none";
        }
    })
};
previewCall();

//About
//Кнопка развернуть
const descBtn = document.querySelector(".desc__btn-more");
//Элемент, которого меняет высоту
const descWrap = document.querySelector(".desc__p-wrap");
//Высота изначальная, ее нужно сразу сохранить
const descWrapInitial = descWrap.clientHeight;

descBtn.addEventListener("click", ()=>{
    //Узнаем высоту раскрытого
    const wrapHeight = descWrap.scrollHeight;
    //Добавляем класс (необязательно, мне просто так нужно по стилям)
    descWrap.classList.toggle("desc__p-wrap-open");
    //Здесь по контенту классу контейнера, тут может быть что угодно
    if (descWrap.classList.contains("desc__p-wrap-open")) {
        descWrap.style.height = `${wrapHeight}px`;
        descBtn.innerText = "свернуть";
    } else {
        descWrap.style.height = `${descWrapInitial}px`;
        descBtn.innerText = "читать больше";
    }
})
//gallery
const galleryMotion = () => {
    const sliderItemG = document.querySelector(".gallery-slider");
    const sliderPopup = document.querySelector(".gallery-popup");
    const sliderPopupClose = document.querySelector(".gallery-popup__btn-close");

    sliderItemG.addEventListener("click", ()=> {
        sliderPopup.classList.add("gallery-popup-open");
    })
    sliderPopupClose.addEventListener("click", ()=>{
        sliderPopup.classList.remove("gallery-popup-open");
    })
};
galleryMotion();

