const hamburger = document.querySelector(".hamburger");
const logoNavContainer = document.querySelector(".logo-nav-container");
const nav = document.querySelector("nav");
const navUl = document.querySelector(".nav-ul");
const btnContainer = document.querySelector(".btn-container");
const arrowImag1 = document.querySelector(".arrow-img1");
const arrowImag2 = document.querySelector(".arrow-img2");
const spanDrop1 = document.querySelector(".spanDrop1");
const spanDrop2 = document.querySelector(".spanDrop2");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-x");
  logoNavContainer.classList.toggle("nav-display");
  nav.classList.toggle("nav-bg-display");
  navUl.classList.toggle("nav-ul-display");
  btnContainer.classList.toggle("btn-container-display");
});

function changeDropDown1() {
  if (arrowImag1.src.includes("/images/icon-arrow-up.svg")) {
    arrowImag1.src = "/images/icon-arrow-down.svg";
    spanDrop1.nextElementSibling.style.display = "block";
  } else {
    arrowImag1.src = "/images/icon-arrow-up.svg";
    spanDrop1.nextElementSibling.style.display = "none";
  }
}
// second drop down
function changeDropDown2() {
  if (arrowImag2.src.includes("/images/icon-arrow-up.svg")) {
    arrowImag2.src = "/images/icon-arrow-down.svg";
    spanDrop2.nextElementSibling.style.display = "block";
  } else {
    arrowImag2.src = "/images/icon-arrow-up.svg";
    spanDrop2.nextElementSibling.style.display = "none";
  }
}
spanDrop1.addEventListener("click", changeDropDown1);
spanDrop2.addEventListener("click", changeDropDown2);
