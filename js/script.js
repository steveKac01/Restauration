let slideDisplay = document.querySelector("#small-slide");
let linkSmallSlideMenu = document.querySelectorAll(".slide-cat a");
let btnBurger = document.querySelector(".burger");

//Event
btnBurger.addEventListener("click", showHide);
for (var i = 0; i < linkSmallSlideMenu.length - 1; i++) {
  linkSmallSlideMenu[i].addEventListener("click", showHide);
}

function showHide() {
  slideDisplay.classList.toggle("hide");
  console.log("trytohide");
}

//Event media query

function addMQListener(mq, callback) {
  if (mq.addEventListener) {
    mq.addEventListener("change", callback);
  } else {
    mq.addListener(callback);
  }
}

addMQListener(window.matchMedia("(min-width: 768px)"), (event) => {
  if (event.matches) {
    if (!slideDisplay.classList.contains("hide")) {
      slideDisplay.classList.toggle("hide");
    }
  }
});
