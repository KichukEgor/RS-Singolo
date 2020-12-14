//Scrolling

const home = document.getElementById("homeHeader");
const services = document.getElementById("servicesHeader");
const portfolio = document.getElementById("portfolioHeader");
const about = document.getElementById("aboutHeader");
const contact = document.getElementById("contactHeader");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 0 && window.pageYOffset < 365) {
    home.classList.add("changeColor");
    services.classList.remove("changeColor");
    portfolio.classList.remove("changeColor");
    about.classList.remove("changeColor");
    contact.classList.remove("changeColor");
  } else if (window.pageYOffset >= 500 && window.pageYOffset < 1000) {
    services.classList.add("changeColor");
    home.classList.remove("changeColor");
    portfolio.classList.remove("changeColor");
    about.classList.remove("changeColor");
    contact.classList.remove("changeColor");
  } else if (window.pageYOffset >= 754) {
    services.classList.remove("changeColor");
    home.classList.remove("changeColor");
    portfolio.classList.add("changeColor");
    about.classList.remove("changeColor");
    contact.classList.remove("changeColor");
  } else {
    services.classList.remove("changeColor");
  }
});

// Slider

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const slide1 = document.querySelector(".slide1-container");
const slide2 = document.querySelector(".slide2-container");

leftArrow.addEventListener("click", () => {
  removeClass();
  if (slide1.classList.contains("slide_top")) {
    slide1.classList.remove("slide_top");
    slide2.classList.add("slide_totheleft");
    slide2.classList.add("slide_top");
  } else {
    slide2.classList.remove("slide_top");
    slide1.classList.add("slide_totheleft");
    slide1.classList.add("slide_top");
  }
});

rightArrow.addEventListener("click", () => {
  removeClass();
  if (slide2.classList.contains("slide_top")) {
    slide2.classList.remove("slide_top");
    slide1.classList.add("slide_totheright");
    slide1.classList.add("slide_top");
  } else {
    slide1.classList.remove("slide_top");
    slide2.classList.add("slide_totheright");
    slide2.classList.add("slide_top");
  }
});

const removeClass = () => {
  slide1.addEventListener("transitionend", () => {
    slide1.classList.remove("slide_totheright");
    slide1.classList.remove("slide_totheleft");
    slide2.classList.remove("slide_totheright");
    slide2.classList.remove("slide_totheright");
  });
};

// PORTFOLIO IMG

const buttons = document.querySelectorAll(".button");
const images = document.querySelectorAll(".grid-gallery__img");
const buttonAll = document.getElementById("buttonAll");
const buttonWeb = document.getElementById("buttonWeb");
const buttonGraphic = document.getElementById("buttonGraphic");
const buttonArtwork = document.getElementById("buttonArtwork");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    clearAllButtons();
    clearAllImages();
    event.target.classList.add("button_active");
    filterButtonItems();
  });
});

const clearAllButtons = () => {
  buttons.forEach((button) => {
    button.classList.remove("button_active");
  });
};

const clearAllImages = () => {
  images.forEach((image) => {
    image.classList.remove("hidden");
  });
};

const filterButtonItems = () => {
  images.forEach((image) => {
    if (event.target == buttonWeb && !image.classList.contains("webdesign")) {
      image.classList.add("hidden");
    } else if (
      event.target == buttonGraphic &&
      !image.classList.contains("graphicdesign")
    ) {
      image.classList.add("hidden");
    } else if (
      event.target == buttonArtwork &&
      !image.classList.contains("artwork")
    ) {
      image.classList.add("hidden");
    }
  });
};
