const textToSpeak = "hello there"
const utterance = new SpeechSynthesisUtterance(textToSpeak)
window.speechSynthesis.speak(utterance);