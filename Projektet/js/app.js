import displayWeatherdata from "../js/display_weatherdata.js";
import showMoreText from "./showMore.js";
window.addEventListener("load", init);
function init() {
  bigScreen();

  function app() {
    slidingNav();
    scrollToTop();
    scrollHide();
    displayWeatherdata();
    showMoreText();
    englishNav();
    sizeChanged();
  }
  function bigScreen() {
    if (window.innerWidth < 768) {
      hide(true);
    } else {
      hide(false);
      const burgerBars = document.querySelector(".burgerBars");
      const nav = document.querySelector(".nav_menu");
      burgerBars.classList.toggle("toggle");
      nav.classList.toggle("nav-active");
    }
  }
  const slidingNav = () => {
    const burgerBars = document.querySelector(".burgerBars");
    const nav = document.querySelector(".nav_menu");
    burgerBars.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burgerBars.classList.toggle("toggle");
    });
  };
  const englishNav = () => {
    const button = document.querySelector("#english-button");
    button.addEventListener("click", () => {
      window.location.href = "../html/english.html";
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
  function sizeChanged() {
    window.addEventListener("resize", function () {
      if (window.innerWidth < 768 && windowSize > lastSize) {
        hide(true);
      } else {
        hide(false);
      }
    });
  }
  function scrollHide() {
    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (
        scrollTop < lastScrollTop &&
        window.pageYOffset < "180" &&
        window.innerWidth < 768
      ) {
        hide(true);
      } else if (scrollTop > lastScrollTop && window.pageYOffset > "180") {
        hide(false);
      }
      lastScrollTop = scrollTop;
    });
  }
  app();
}
