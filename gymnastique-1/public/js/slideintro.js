"use strict";

// async init function (because of the awaits on fetches)
const initSlideIntro = async function () {
  const titre = document.querySelector("#titre");
  const texte1 = document.querySelector("#texte1");
  const down_arrow = document.querySelector("#down-arrow");
  const bag = document.querySelector("#bag");

  // get the data from our data/first-slide.json file
  let response = await fetch("data/first-slide.json");
  const data = await response.json();

  // set the title
  titre.innerHTML = data.title;

  // set the text
  texte1.innerHTML = data.texte1;

  anime({
    targets: down_arrow,
    translateY: 20,
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
  });
  anime({
    targets: bag,
    width: "75%",
    top: "70%",
    easing: "easeInOutQuad",
    duration: 300,
  });

  const cube = document.querySelector("#cube");
  cube.style.top = `${window.innerHeight * 0.7}px`;
};
const firstSlide = document.querySelector("#first-slide");

const cube = document.createElement("div");
cube.id = "cube";
firstSlide.appendChild(cube);
// Call the function

// Set the cube's initial position when the page loads
let initialCubePosition = window.innerHeight * 0.7;
cube.style.top = `${initialCubePosition}px`;

function moveCubeOnTouch() {
  let startTouchY = 0;

  window.addEventListener("touchstart", function (e) {
    startTouchY = e.touches[0].clientY;
    initialCubePosition = parseInt(cube.style.top);
  });

  window.addEventListener("touchmove", function (e) {
    const currentTouchY = e.touches[0].clientY;
    const diff = startTouchY - currentTouchY;

    // Update the cube's position based on the touch movement
    cube.style.top = `${initialCubePosition + diff}px`;
  });

  window.addEventListener("touchend", function (e) {
    const endTouchY = e.changedTouches[0].clientY;
    const diff = Math.abs(startTouchY - endTouchY);
    console.log(diff);
  });
}
