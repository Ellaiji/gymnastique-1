"use strict";

const showPopup = () => {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(() => {
    popup.classList.add("show");
  }, 20);
};

const closePopup = () => {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
  setTimeout(() => {
    popup.style.display = "none";
  }, 20);
};

const clickOutsidePopup = (event) => {
  const popup = document.getElementById("popup");
  if (!popup.contains(event.target) && popup.classList.contains("show")) {
    closePopup();
  }
};

const initSlide2 = async () => {
  document.getElementById("logo-hyblab").addEventListener("click", showPopup);

  try {
    const response = await fetch("data/obj.json");
    const data = await response.json();

    const title = document.querySelector("#title-obj");
    const text = document.querySelector("#text-obj");
    const img = document.querySelector("#img-obj");

    title.textContent = data.title || " PAS DE TITRE ";
    text.textContent = data.text || " PAS DE TEXTE ";
    
    img.setAttribute("src", data.picture);

  } catch (error) {
    console.error("ERREUR JSON :", error);
  }

  document.querySelector("#close").addEventListener("click", closePopup);
  document.addEventListener("click", clickOutsidePopup);
};
