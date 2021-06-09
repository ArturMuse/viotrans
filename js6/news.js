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

//popupShowIndex
const popupShowNews = () => {
    const popupCall = document.querySelector(".popup-call");
    const popupCallBtnShow = document.querySelector(".popup-call-show-btn");

    popupCallBtnShow.addEventListener("click", ()=>{
        popupCall.classList.add("popup-call-active");
    })
}
popupShowNews();

//Tabs
const tabsLabel = document.querySelectorAll(".tabs__btns-label");
const tabsInput = document.querySelectorAll(".tabs__btn-item");

let checkLabel = () => {
    setTimeout(()=>{
        for (let j = 0; j < tabsLabel.length; j++) {
            if (tabsInput[j].checked) {
                tabsLabel[j].classList.add('tabs__btns-label-active');
            } else {
                tabsLabel[j].classList.remove('tabs__btns-label-active');
            }
        }
    },10)

    for (let i = 0; i < tabsLabel.length; i++) {
        tabsLabel[i].addEventListener("click", ()=>{
            checkLabel();
        })
    }
};
checkLabel();