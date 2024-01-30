"use strict";

// async init function (because of the awaits on fetches)
const initSlide2 = async function () {
  // Get logo element
  const logo = document.querySelector("#logo-hyblab");

  // (Re)set initial scale of logo
  logo.setAttribute("style", "transform :scale(1);");

  // Animate hyblab logo and make shrink on click
  anime({
    targets: "#logo-hyblab",
    scale: 1.2,
    easing: "easeInOutQuad",
    direction: "alternate",
    loop: true,
  });

  document.getElementById("logo-hyblab").addEventListener("click", function () {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function () {
      popup.classList.add("show");
    }, 20);

  });
  let response = await fetch('api/topic');
  const data1 = await response.json();
  response = await fetch('data/obj.json');
  const data2 = await response.json();
  const title = document.querySelector("#title-obj");
  const text = document.querySelector("#text-obj");
  title.textContent = `${data2.title}`;
  text.textContent = `${data2.text}`;

  document.querySelector("#close").addEventListener("click", function () {
    var popup = document.getElementById("popup");
    popup.classList.remove("show");
    setTimeout(function () {
      popup.style.display = "none";
    }, 300);
  });

    document.addEventListener('click', function clickOutsidePopUp(event) {
      var popup = document.getElementById("popup");
      if (  (!popup.contains(event.target)) && (popup.classList.contains("show"))   ) {
        popup.classList.remove("show");
        setTimeout(function () {
          popup.style.display = "none";
        }, 300);
      }
    });


};