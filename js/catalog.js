"use strict";

//popupOn
var popupShowCatalog = function popupShowCatalog() {
    var popupOrder = document.querySelector(".popup-order");
    var popupCall = document.querySelector(".popup-call");
    var popupOrderBtnShow = document.querySelectorAll(".popup-order-show-btn");
    var popupCallBtnShow = document.querySelector(".popup-call-show-btn");

    for (var i = 0; i < popupOrderBtnShow.length; i++) {
        popupOrderBtnShow[i].addEventListener("click", function () {
            popupOrder.classList.add("popup-order-active");
        });
    }

    popupCallBtnShow.addEventListener("click", function () {
        popupCall.classList.add("popup-call-active");
    });
};
popupShowCatalog();

//Order form validation
var orderValidation = function orderValidation() {
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
            setTimeout(function () {
                window.location.reload();
            }, 5000);
        }
    });
};
orderValidation();

//Popup Order
var popupOrder = function popupOrder() {
    var popupOrderClose = document.querySelector(".popup-order__btn");
    var popupOrder = document.querySelector(".popup-order");

    var popupOrderInner = document.querySelector(".popup-order__inner");
    var popupOrderSuccess = document.querySelector(".popup-order__success");
    var popupOrderFormBtn = document.querySelector(".popup-order__form-btn");

    var popupOrderFieldInput = document.querySelectorAll(".popup-order__form-input");
    var popupOrderFieldLabel = document.querySelector(".popup-order__form-agreement-label");
    var popupOrderFieldCheckbox = document.querySelector(".popup-order__form-agreement");

    //Валидация формы заказа
    popupOrderFormBtn.addEventListener("click", function () {
        var inputCheck = false;
        var agreementCheck = false;
        for (var j = 0; j < popupOrderFieldInput.length; j++) {
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
            setTimeout(function () {
                window.location.reload();
            }, 5000);
        }
    });

    popupOrderClose.addEventListener("click", function () {
        popupOrder.classList.remove('popup-order-active');
    });
};
popupOrder();
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