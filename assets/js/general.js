"use strict";

// hamburger menu tablet

let hamburgerBtn = document.querySelector(".plate");
let pageTopNav = document.querySelector(".header__top-nav");
let windowWidth = window.innerWidth;
let navbar = document.querySelector(".navbar");

const responsiveHamburger = () => {
  if (windowWidth <= 768 && windowWidth > 500) {
    hamburgerBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      pageTopNav.classList.toggle("active");
    });
  } else if (windowWidth <= 500) {
    hamburgerBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      navbar.classList.toggle("active");
    });
  }
};

responsiveHamburger();

// modal

let backdrop = document.querySelector(".backdrop");
let closeModalBtn = document.querySelector("#modal_close");

function openModal() {
  backdrop.classList.toggle("active");
}

openModal();

closeModalBtn.addEventListener("click", () => {
  backdrop.classList.toggle("active");
});
