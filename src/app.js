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
  let clubCard = document.querySelector(".club--card img");
  console.log(cardPhoto);
  console.log(window.innerWidth);
  if (window.innerWidth <= 1200 && window.innerWidth >= 992) {
    clubCard.src = "/assets/images/card-vertical.png";
  }
  if (window.innerWidth <= 1200) {
    cardPhoto.src = "/assets/images/card-vertical.png";
  }

  let feature = document.querySelector(".features");

  document.querySelector(".main--btn").addEventListener("click", () => {
    feature.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  });
});
