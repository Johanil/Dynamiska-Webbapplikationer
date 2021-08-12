window.addEventListener("load", init);
function init() {
  function app() {
    slidingNav();
    scrollToTop();
    scrollHide();
    englishNav();
    sizeChanged();
    bigScreen();
  }
  function bigScreen() {
    if (window.innerWidth < 768) {
      hideHeader(true);
    } else {
      hideHeader(false);
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

  function hideHeader(boolean) {
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
      if (window.innerWidth < 768) {
        hideHeader(true);
      } else {
        hideHeader(false);
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
        hideHeader(true);
      } else if (scrollTop > lastScrollTop && window.pageYOffset > "180") {
        hideHeader(false);
      }
      lastScrollTop = scrollTop;
    });
  }
  app();
}
