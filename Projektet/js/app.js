import displayWeatherdata from "./display_weatherdata.js";

function init() {
  displayWeatherdata();
}
function app() {
  slidingNav();
  scrollToTop();
  showMoreText();
  window.addEventListener("load", init);
}

const slidingNav = () => {
  const burgerBars = document.querySelector(".burgerBars");
  const nav = document.querySelector(".nav_menu");

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

function showMoreText() {
  const content = document.querySelector(".moreText");
  const moreTextBtn = document.getElementById("read-more-btn");
  moreTextBtn.addEventListener("click", () => {
    content.classList.toggle("moreText-active");
  });
}
app();
