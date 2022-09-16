"use strict";
const toogle = document.querySelector(".btn-toogle");
const navBarElement = document.querySelector(".navbar-click");
const showNavBar = function () {
  navBarElement.style.display = "block";
};
const closeNavBar = function () {
  navBarElement.style.display = "none";
};
toogle.addEventListener("click", function () {
  if (navBarElement.style.display === "block") {
    closeNavBar();
    toogle.style.border = "none"
  } else {
    showNavBar();
    toogle.style.border = "2px solid white"
  }
});
