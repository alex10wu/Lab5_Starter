// explore.js
window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

const voiceSelect = document.getElementById('voice-select');
const textToSpeak = document.getElementById('text-to-speak');
const button = document.querySelector('button');
const smileImg = document.querySelector("img");

let voices = [];


function init() {
  // All voices loaded to “Select Voice” dropdown
  populateVoiceList();

  //The text that was typed should be spoken
  button.addEventListener("click", (Butt) => {
    const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");  
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    // Open mouth while the synthesizer is speaking
    smileImg.src = "assets/images/smiling-open.png";
    utterThis.onend = function () {
      smileImg.src = "assets/images/smiling.png";
    };
  });

}

//Helper function
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
function populateVoiceList() {
  setTimeout(() => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }, 1000);
}