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

const mQ = window.matchMedia("(min-width: 768px)");

mQ.addListener(function (x) {
  if (x.matches) {
    if (!slideDisplay.classList.contains("hide")) {
      slideDisplay.classList.toggle("hide");
    }
  } else {
  }
});
