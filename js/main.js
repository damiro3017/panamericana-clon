document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".open-btn");
  const closeButton = document.querySelector(".close-btn");
  const navbar = document.querySelector(".header__navbar");
  const searchInput = document.getElementById("search");
  const searchButton = document.querySelector(".header__search-btn");

  if (openButton && navbar) {
    openButton.addEventListener("click", () => {
      navbar.classList.add("active");
    });
  }

  if (closeButton && navbar) {
    closeButton.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  }

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
      searchInput.focus();
    });
  }
});

const slider = document.querySelector(".hero__slider");
let heroSliderItems = document.querySelectorAll(".hero__slider__item");
let heroSliderItemLast = heroSliderItems[heroSliderItems.length - 1];

const sliderBtnLeft = document.querySelector(".hero__slider__left-btn");
const sliderBtnRight = document.querySelector("#hero__slider__right-btn");

// Inserta el último ítem al inicio para el efecto circular
slider.insertAdjacentElement("afterbegin", heroSliderItemLast);

function moveNext() {
  let heroSliderItemFirst = document.querySelectorAll(".hero__slider__item")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.3s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", heroSliderItemFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function movePrev() {
  let heroSliderItems = document.querySelectorAll(".hero__slider__item");
  let heroSliderItemLast = heroSliderItems[heroSliderItems.length - 1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.3s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", heroSliderItemLast);
    slider.style.marginLeft = "-100%";
  }, 1000);
}

sliderBtnRight.addEventListener("click", moveNext);
sliderBtnLeft.addEventListener("click", movePrev);

setInterval(moveNext, 7000);
