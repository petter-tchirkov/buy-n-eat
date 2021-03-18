/* src/app.js */

// Styles
import "styles/_app.scss";
import "bootstrap";

function hello() {
  console.log("Ready!");

  require("scripts/demo");
}
hello();

//change image src

document.addEventListener("DOMContentLoaded", function changeSrc() {
  let cardPhoto = document.querySelector(".bonus--img img");
  console.log(cardPhoto);
  console.log(window.innerWidth);
  if (window.innerWidth <= 1280) {
    cardPhoto.src = "/assets/images/card-vertical.png";
  }
});
