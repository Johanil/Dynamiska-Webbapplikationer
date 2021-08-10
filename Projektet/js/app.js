import displayWeatherdata from "./display_weatherdata.js";

function init() {
  displayWeatherdata();
}
function app() {
  slidingNav();
  scrollToTop();
  showMoreText();
  hideMenu();
  window.addEventListener("load", init);
}

const slidingNav = () => {
  const burgerBars = document.querySelector(".burgerBars");
  const nav = document.querySelector(".nav_menu");
  const headertop = document.querySelector(".header-top");
  burgerBars.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    headertop.classList.toggle("header-top-active");
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
const hideMenu = () => {
  var lastScrollTop = 0;
    const navbar = document.querySelector(".header-top");
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if ((scrollTop < lastScrollTop ) && (window.pageYOffset < "180")) {
        navbar.style.top = "-5em";
        
    } else if (scrollTop > lastScrollTop && window.pageYOffset > "180") {
        navbar.style.top = "0";
        navbar.classList.toggle(".nav-menu-active");
    }
    lastScrollTop = scrollTop;
  });
};

function showMoreText() {
  const content = document.querySelector(".moreText");
  const moreTextBtn = document.getElementById("read-more-btn");
  moreTextBtn.addEventListener("click", () => {
    content.classList.toggle("moreText-active");
    if (moreTextBtn.innerHTML == "Läs mer") {
      moreTextBtn.innerHTML = "Läs mindre";
    } else {
      moreTextBtn.innerHTML = "Läs mer";
    }
  });
}
app();
