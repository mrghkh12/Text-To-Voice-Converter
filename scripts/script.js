let $ = document;

let textInput = $.querySelector(".textInput");

let playBtn = $.querySelector(".option button");
let selectVoiceElem = $.querySelector(".option select");

let utterance = new SpeechSynthesisUtterance();

playBtn.addEventListener("click", () => {
  utterance.text = textInput.value;
  window.speechSynthesis.speak(utterance);
});

let voicesList = [];
window.speechSynthesis.onvoiceschanged = () => {
  voicesList = window.speechSynthesis.getVoices();
  utterance.voice = voicesList[0];

  voicesList.forEach((voice, i) => {
    selectVoiceElem.options[i] = new Option(voice.name, i);
  });
};
selectVoiceElem.addEventListener("change", () => {
  utterance.voice = voicesList[selectVoiceElem.value];
});
