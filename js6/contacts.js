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

        if (orderFieldInput[0].value && orderFieldInput[1].value) {
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

//popupShowContacts
const popupShowContacts = () => {
    const popupCall = document.querySelector(".popup-call");
    const popupCallBtnShow = document.querySelector(".popup-call-show-btn");

    popupCallBtnShow.addEventListener("click", ()=>{
        popupCall.classList.add("popup-call-active");
    })
}
popupShowContacts();

