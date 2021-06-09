"use strict";

//Popup Call
var popupCall = function popupCall() {
    var popupCallClose = document.querySelector(".popup-call__btn");
    var popupCall = document.querySelector(".popup-call");

    var popupCallInner = document.querySelector(".popup-call__inner");
    var popupCallSuccess = document.querySelector(".popup-call__success");
    var popupCallFormBtn = document.querySelector(".popup-call__form-btn");

    var popupCallFieldInput = document.querySelectorAll(".popup-call__form-input");
    var popupCallFieldLabel = document.querySelector(".popup-call__form-agreement-label");
    var popupCallFieldCheckbox = document.querySelector(".popup-call__form-agreement");

    popupCallFormBtn.addEventListener("click", function () {
        var inputCheckCall = false;
        var agreementCheckCall = false;

        for (var j = 0; j < popupCallFieldInput.length; j++) {
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
            setTimeout(function () {
                window.location.reload();
            }, 5000);
        }
    });

    popupCallClose.addEventListener("click", function () {
        popupCall.classList.remove('popup-call-active');
    });
};
popupCall();

//Order form validation
var orderValidation = function orderValidation() {
    var orderForm = document.querySelector(".order__form");
    var orderFormTitle = document.querySelector(".order__title");
    var orderFieldInput = document.querySelectorAll(".order__form-input");
    var orderFieldLabel = document.querySelector(".order__form-agreement-label");
    var orderFieldCheckbox = document.querySelector(".order__form-agreement");

    var orderFormBtn = document.querySelector(".order__form-btn");

    var orderSuccess = document.querySelector(".order__success");

    orderFormBtn.addEventListener("click", function () {
        var inputCheck = false;
        var agreementCheck = false;

        for (var j = 0; j < orderFieldInput.length; j++) {
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
            setTimeout(function () {
                window.location.reload();
            }, 5000);
        }
    });
};
orderValidation();

//popupShowContacts
var popupShowContacts = function popupShowContacts() {
    var popupCall = document.querySelector(".popup-call");
    var popupCallBtnShow = document.querySelector(".popup-call-show-btn");

    popupCallBtnShow.addEventListener("click", function () {
        popupCall.classList.add("popup-call-active");
    });
};
popupShowContacts();