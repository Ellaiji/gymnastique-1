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
    var popup = document.getElementById("telephone_popup");
    popup.style.display = "block";
    setTimeout(function () {
      popup.classList.add("show");
    }, 20);
  });

  document.querySelector(".close").addEventListener("click", function () {
    var popup = document.getElementsByClassName("popup")[0];
    popup.classList.remove("show");
    setTimeout(function () {
      popup.style.display = "none";
    }, 300);
  });
  // Jeu Télephone vidéo quizz
  //YT video player:
  /*
  let yt_iframe=document.getElementById("nemour-quiz-video");
  player = new YT.Player( yt_iframe, {
    events: {
      'onStateChange': function(event){
        onYouTubePlayerStateChange(event, iframe_id);
      }
    }
  });
  yt_iframe.addEventListener("onStateChange",(evt)=>{console.log("please");})
  //repload the video when onStateChange=YT.PlayerState.ENDED)
  function onStateChange(state) {
    if (state.data === YT.PlayerState.ENDED) {
      player.loadVideoById({
        videoId: videoId,
        end: 7
      });
    }
  }*/
  const buttons = document.getElementsByClassName("btn_quiz")
  for(var i=0; i<buttons.length; i++){
    var button=buttons[i];
    button.addEventListener('click', selectAnswer);
  }
  function selectAnswer(e) {
    const selectedButton = e.target;
    boingOnClick(selectedButton);
    if (selectedButton.id=="answer"){
      selectedButton.classList.add('correct');
      //console.log("DING ! Bonne réponse !!!");
    }
    else{
      selectedButton.classList.add('wrong');
      //console.log("mauvaise réponse");
    }
  }
  // Retrieve the partner's topic from our API
  let response = await fetch("api/topic");
  const data1 = await response.json();

  // Get some dummy data
  response = await fetch("data/dummy.json");
  const data2 = await response.json();
};

