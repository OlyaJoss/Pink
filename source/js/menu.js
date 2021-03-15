let navigationButton = document.querySelector(".page-header__toggle");
let navigationMenu = document.querySelector(".main-nav");
let navigationBackground = document.querySelector(".page-header__wrapper");


let clickButtonHandler = function () {

  navigationButton.classList.toggle("page-header__toggle--opened");
  navigationButton.classList.toggle("page-header__toggle--closed");

  navigationMenu.classList.toggle("main-nav--opened");
  navigationMenu.classList.toggle("main-nav--closed");

  navigationBackground.classList.toggle("page-header__wrapper--opened");
  navigationBackground.classList.toggle("page-header__wrapper--closed");

};

navigationButton.addEventListener("click", clickButtonHandler);
