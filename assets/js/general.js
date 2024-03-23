"use strict";

const sectionParts = document.querySelectorAll(".reveal");
const firstSect = document.querySelector(".reveal_first");
const collectionsSection = document.querySelector(".collections__title");
const backdrop1 = document.querySelector(".backdrop1");
const copyrightCheckbox = document.querySelector(
  "#copyrights input[type='checkbox']"
);
let modalClosed = false;

function reveal() {
  firstSect.classList.add("is-visible");
  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    sectionParts.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 200) {
        section.classList.add("is-visible");

        const video = section.querySelector("video");
        if (video) {
          video.play();
        }

        if (section === collectionsSection && !modalClosed) {
          backdrop1.classList.add("active");
        }
      } else {
        // section.classList.remove("is-visible");

        const video = section.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  });

  copyrightCheckbox.addEventListener("change", function () {
    backdrop1.classList.remove("active");
    modalClosed = true;
  });
}

reveal();

// copyCloseButton?.addEventListener("click", function () {
//   if (!this.disabled) {
//     backdrop1.classList.remove("active");
//     modalClosed = true;
//   }
// });

// hamburger menu tablet

let hamburgerBtn = document.querySelector(".plate");
let pageTopNav = document.querySelector(".header__top-nav");
let windowWidth = window.innerWidth;
let navbar = document.querySelector(".navbar");

const responsiveHamburger = () => {
  if (windowWidth <= 768 && windowWidth > 600) {
    hamburgerBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      pageTopNav.classList.toggle("active");
    });
  } else if (windowWidth <= 600) {
    hamburgerBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      navbar.classList.toggle("active");
    });
  }
};

responsiveHamburger();

// select langs

let langSelect = document.querySelector(".header__top-langs > ul > li");
let selectedLang = document.getElementById("selected_lang");
let langOptions = document.querySelectorAll("#lang_option");

langSelect.addEventListener("click", () => {
  langSelect.classList.toggle("active");
});

function changeLanguage() {
  langOptions.forEach((lang) => {
    lang.addEventListener("click", (e) => {
      e.stopPropagation();
      let currentLang = e.target.innerText;
      selectedLang.innerText = currentLang;
      localStorage.setItem("lang", currentLang);
    });
    let savedLang = localStorage.getItem("lang");
    if (savedLang) {
      selectedLang.innerText = savedLang;
    }
  });
}

changeLanguage();

// navbar menu active class added active page

// let navbarMenuLinks = document.querySelectorAll(".navbar__menu>li>a");
// let navbarMenuList = document.querySelectorAll(".navbar__menu > li");

// function addActiveClass() {
//   const routeName = window.location.pathname;
//   navbarMenuList.forEach((li) => {
//     if (
//       routeName.slice(1, routeName.length - 5) === li.getAttribute("page-name")
//     ) {
//       li.classList.add("active");
//     } else {
//       li.classList.remove("active");
//     }
//   });
// }

// addActiveClass();
