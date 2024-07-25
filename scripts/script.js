let $ = document

let textInput = $.querySelector('.textInput')

let playBtn = $.querySelector('.option button')
let selectVoiceElem = $.querySelector('.option select')

let utterance = new SpeechSynthesisUtterance()

playBtn.addEventListener('click', () => {
    utterance.text = textInput.value
    window.speechSynthesis.speak(utterance)
})