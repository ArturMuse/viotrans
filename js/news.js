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

//popupShowIndex
var popupShowNews = function popupShowNews() {
    var popupCall = document.querySelector(".popup-call");
    var popupCallBtnShow = document.querySelector(".popup-call-show-btn");

    popupCallBtnShow.addEventListener("click", function () {
        popupCall.classList.add("popup-call-active");
    });
};
popupShowNews();

//Tabs
var tabsLabel = document.querySelectorAll(".tabs__btns-label");
var tabsInput = document.querySelectorAll(".tabs__btn-item");

var checkLabel = function checkLabel() {
    setTimeout(function () {
        for (var j = 0; j < tabsLabel.length; j++) {
            if (tabsInput[j].checked) {
                tabsLabel[j].classList.add('tabs__btns-label-active');
            } else {
                tabsLabel[j].classList.remove('tabs__btns-label-active');
            }
        }
    }, 10);

    for (var i = 0; i < tabsLabel.length; i++) {
        tabsLabel[i].addEventListener("click", function () {
            checkLabel();
        });
    }
};
checkLabel();