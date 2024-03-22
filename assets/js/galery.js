"use strict";

let galeryFilter = document.querySelectorAll(".galery__filter-part > div");
let filterOptions = document.querySelectorAll(".galery__filter-part");

galeryFilter.forEach((galery) => {
  galery.addEventListener("click", (e) => {
    e.stopPropagation();
    e.currentTarget.parentElement.classList.toggle("active");
  });
});
