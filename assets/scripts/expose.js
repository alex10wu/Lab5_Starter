// expose.js
window.addEventListener('DOMContentLoaded', init);
// Initialize function
function init() { 

  // Set up all document selectors
  const hornSelect = document.getElementById('horn-select');
  const hornImg = document.querySelector('img');
  const audio = document.querySelector('audio');
  const volume = document.getElementById('volume');
  const volumeImg = document.querySelector("img[src='assets/icons/volume-level-2.svg']");
  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  

//The correct image should display
//The correct audio sound file should be set
  hornSelect.addEventListener("change", (Horn) => {
    let currHorn =  Horn.target.value;
    if(currHorn == "air-horn") {
      hornImg.src = "assets/images/air-horn.svg";
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if(currHorn == "car-horn") {
      hornImg.src = "assets/images/car-horn.svg";
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if(currHorn == "party-horn") {
      hornImg.src = "assets/images/party-horn.svg";
      audio.src = 'assets/audio/party-horn.mp3';
    } 
    console.log(currHorn);
  });
  
//change the volume on the slider
  volume.addEventListener("input", (Vol) => {
    let currVol = Vol.target.value;

    //The corresponding volume should be set for the audio element
    audio.volume = currVol / 100;
    
    //At zero volume, the mute icon (level 0) should be displayed
    if(currVol == 0) {
      volumeImg.src="assets/icons/volume-level-0.svg";
    }
    //From 1 to < 33 volume the first volume level should be displayed
    else if(1 <= currVol && currVol < 33) {
      volumeImg.src="assets/icons/volume-level-1.svg";
    }

    //From 33 to < 67 volume the second volume level should be displayed
    else if(33 <= currVol && currVol < 67) {
      volumeImg.src="assets/icons/volume-level-2.svg";
    }

    //From 67 and up the third volume level should be displayed
    else if(currVol >= 67) {
      volumeImg.src="assets/icons/volume-level-3.svg";
    }

  });

// Clicking the play button
  button.addEventListener("click", (Butt) => {
    audio.play(); 
    //confetti should shoot out when Party Horn is selected
    if(hornSelect.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });


}