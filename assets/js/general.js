"use strict";

const sectionParts = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {
  sectionParts.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 200) {
      section.classList.add("is-visible");

      const video = section.querySelector("video");
      if (video) {
        video.play();
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

// navbar menu active class added active page

let navbarMenuLinks = document.querySelectorAll(".navbar__menu>li>a");
let navbarMenuLis = document.querySelectorAll(".navbar__menu > li");

function addActiveClass() {
  const routeName = window.location.pathname;
  navbarMenuLis.forEach((li) => {
    if (
      routeName.slice(1, routeName.length - 5) === li.getAttribute("page-name")
    ) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
}

addActiveClass();
