const mobilmenu = document.querySelector(".mobilmenu");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

mobilmenu.addEventListener("click", mobilmenuClick);
function mobilmenuClick() {
    mobilmenu.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  mobilmenu.classList.remove("active");
  nav.classList.remove("active");
}