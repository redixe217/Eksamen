const menu_mobile = document.querySelector(".menu_mobile");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

menu_mobile.addEventListener("click", mobilmenuClick);
function mobilmenuClick() {
    menu_mobile.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  menu_mobile.classList.remove("active");
  nav.classList.remove("active");
}