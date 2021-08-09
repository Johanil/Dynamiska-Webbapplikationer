import displayWeatherdata from "./display_weatherdata.js";

function init() {
  displayWeatherdata();
}

const slidingNav = () => {
  const burgerBars = document.querySelector(".burgerBars");
  const nav = document.querySelector(".nav_menu");

  burgerBars.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  });
};
slidingNav();

window.addEventListener("load", init);
