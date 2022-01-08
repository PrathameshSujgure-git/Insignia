let currentScrollPosition = 0;
let scrollAmount = 240;

const sCont = document.querySelector(".card-container");
const hScroll = document.querySelector(".scroll-items");
const btnScrollLeft = document.getElementById("btn-scroll-left");
const btnScrollRight = document.getElementById("btn-scroll-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
  currentScrollPosition += val * scrollAmount;
  if (currentScrollPosition >= 0) {
    currentScrollPosition = 0;
    btnScrollLeft.style.opacity = "0";
  } else {
    btnScrollLeft.style.opacity = "1";
  }

  if (currentScrollPosition <= maxScroll) {
    currentScrollPosition = maxScroll;
    btnScrollRight.style.opacity = "0";
  } else {
    btnScrollRight.style.opacity = "1";
  }

  sCont.style.left = currentScrollPosition + "px";
}

let tCurrentScrollPosition = 0;
let tScrollAmount = 350;

const tCont = document.querySelector(".testimonial-card-container");
const tHScroll = document.querySelector(".testimonial-scroll-items");
const tBtnScrollLeft = document.getElementById("testimonial-btn-scroll-left");
const tBtnScrollRight = document.getElementById("testimonial-btn-scroll-right");
tBtnScrollLeft.style.opacity = "0";
let tMaxScroll = -tCont.offsetWidth + tHScroll.offsetWidth;

function tScrollHorizontally(val) {
  tCurrentScrollPosition += val * tScrollAmount;
  if (tCurrentScrollPosition >= 0) {
    tCurrentScrollPosition = 0;
    tBtnScrollLeft.style.opacity = "0";
  } else {
    tBtnScrollLeft.style.opacity = "1";
  }
  if (tCurrentScrollPosition <= tMaxScroll) {
    tCurrentScrollPosition = tMaxScroll;
    tBtnScrollRight.style.opacity = "0";
  } else {
    tBtnScrollRight.style.opacity = "1";
  }
  tCont.style.left = tCurrentScrollPosition + "px";
}

dropdown = document.querySelector(".dropdown");
line1 = document.querySelector(".line1");
line2 = document.querySelector(".line2");
line3 = document.querySelector(".line3");
navBar = document.querySelector(".navbar");
clicked = document.querySelector(".clicked");
rightNav = document.querySelector(".right-nav");

dropdown.addEventListener("click", () => {
  line1.classList.toggle("clicked-1");
  line2.classList.toggle("clicked-2");
  line3.classList.toggle("clicked-3");

  navBar.classList.toggle("h-nav-resp");
  rightNav.classList.toggle("nav-items-resp");
});

function toTop() {
  document.documentElement.scrollTo(0, 0);
}
