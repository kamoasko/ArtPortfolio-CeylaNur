"use strict";

let summaries = document.querySelectorAll(".summary");

summaries.forEach((summary) => {
  summary.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
