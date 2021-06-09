//popupOn
const popupShowCatalog = () => {
    const popupOrder = document.querySelector(".popup-order");
    const popupCall = document.querySelector(".popup-call");
    const popupOrderBtnShow = document.querySelectorAll(".popup-order-show-btn");
    const popupCallBtnShow = document.querySelector(".popup-call-show-btn");

    for (let i = 0; i < popupOrderBtnShow.length; i++) {
        popupOrderBtnShow[i].addEventListener("click", ()=>{
            popupOrder.classList.add("popup-order-active");
        })
    }

    popupCallBtnShow.addEventListener("click", ()=>{
        popupCall.classList.add("popup-call-active");
    })
}
popupShowCatalog();

//Order form validation
const orderValidation = () => {
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
            setTimeout(()=>{
                window.location.reload();
            },5000)
        }
    })
}
orderValidation();

//Popup Order
const popupOrder = () => {
    const popupOrderClose = document.querySelector(".popup-order__btn");
    const popupOrder = document.querySelector(".popup-order");

    const popupOrderInner = document.querySelector(".popup-order__inner");
    const popupOrderSuccess = document.querySelector(".popup-order__success");
    const popupOrderFormBtn = document.querySelector(".popup-order__form-btn");

    const popupOrderFieldInput = document.querySelectorAll(".popup-order__form-input");
    const popupOrderFieldLabel = document.querySelector(".popup-order__form-agreement-label");
    const popupOrderFieldCheckbox = document.querySelector(".popup-order__form-agreement");

    //Валидация формы заказа
    popupOrderFormBtn.addEventListener("click", ()=>{
        let inputCheck = false;
        let agreementCheck = false;
        for (let j = 0; j < popupOrderFieldInput.length; j++) {
            if (!popupOrderFieldInput[j].value) {
                popupOrderFieldInput[j].style.border = '2px solid red';
            } else {
                popupOrderFieldInput[j].style.border = '2px solid var(--dark)';
            }
        }
        if (!popupOrderFieldCheckbox.checked) {
            popupOrderFieldLabel.style.color = 'red';
            popupOrderFieldLabel.classList.add('popup-order__form-agreement-label-error');
        } else {
            popupOrderFieldLabel.style.color = 'initial';
            popupOrderFieldLabel.classList.remove('popup-order__form-agreement-label-error');
        }

        if (popupOrderFieldInput[0].value && popupOrderFieldInput[1].value && popupOrderFieldInput[2].value) {
            inputCheck = true;
        } else {
            inputCheck = false;
        }

        if (popupOrderFieldCheckbox.checked) {
            agreementCheck = true;
        } else {
            agreementCheck = false;
        }

        if (inputCheck && agreementCheck) {
            popupOrderSuccess.style.display = "flex";
            popupOrderInner.style.display = "none";
            setTimeout(()=>{
                window.location.reload();
            },5000)
        }
    })

    popupOrderClose.addEventListener("click", ()=>{
        popupOrder.classList.remove('popup-order-active');
    })



};
popupOrder();
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