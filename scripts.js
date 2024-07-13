const hamburger = document.querySelector(".hamburger");
const logoNavContainer = document.querySelector(".logo-nav-container");
const nav = document.querySelector("nav");
const navUl = document.querySelector(".nav-ul");
const btnContainer = document.querySelector(".btn-container");
const arrowImag1 = document.querySelector(".arrow-img1");
const arrowImag2 = document.querySelector(".arrow-img2");
const spanDrops = document.querySelectorAll(".spanDrop");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-x");
  logoNavContainer.classList.toggle("nav-display");
  nav.classList.toggle("nav-bg-display");
  navUl.classList.toggle("nav-ul-display");
  btnContainer.classList.toggle("btn-container-display");
});

function changeDropDown(spanDrop) {
  if (arrowImag1.src.includes("/images/icon-arrow-up.svg")) {
    arrowImag1.src = "/images/icon-arrow-down.svg";
    spanDrop.nextElementSibling.style.display = "block";
  } else {
    arrowImag1.src = "/images/icon-arrow-up.svg";
    spanDrop.nextElementSibling.style.display = "none";
  }
  // second drop down
  if (arrowImag2.src.includes("/images/icon-arrow-up.svg")) {
    arrowImag2.src = "/images/icon-arrow-down.svg";
    spanDrop.nextElementSibling.style.display = "block";
  } else {
    arrowImag2.src = "/images/icon-arrow-up.svg";
    spanDrop.nextElementSibling.style.display = "none";
  }
}

spanDrops.forEach((spanDrop) => {
  spanDrop.addEventListener("click", () => {
    changeDropDown(spanDrop);
  });
}); 