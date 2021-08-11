import displayWeatherdata from "../js/display_weatherdata.js";
import showMoreText from "./showMore.js";
function init() {
  hide(true);
}
function app() {
  slidingNav();
  scrollToTop();
  scrollHide();
    displayWeatherdata();
    showMoreText();
}

const slidingNav = () => {
  const burgerBars = document.querySelector(".burgerBars");
  const nav = document.querySelector(".nav_menu");
  const headertop = document.querySelector(".header-top");
  burgerBars.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burgerBars.classList.toggle("toggle");
  });
};
const scrollToTop = () => {
  const aside = document.querySelector("aside");
  aside.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

function hide(boolean) {
  const navbar = document.querySelector(".header-top");
  const navmenu = document.querySelector(".nav_menu");
  if (boolean == true) {
    navbar.style.top = "-5em";
    navmenu.style.top = "-15.5em";
  } else {
    navbar.style.top = "0";
    navmenu.style.top = "0";
    navbar.classList.toggle(".nav-menu-active");
  }
}

const scrollHide = () => {
  var lastScrollTop = 0;
  const navbar = document.querySelector(".header-top");
  const navmenu = document.querySelector(".nav_menu");
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop && window.pageYOffset < "180") {
      hide(true);
    } else if (scrollTop > lastScrollTop && window.pageYOffset > "180") {
      hide(false);
    }
    lastScrollTop = scrollTop;
  });
};
app();
window.addEventListener("load", init);

