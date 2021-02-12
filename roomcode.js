// Get room code from URL
const arr = document.URL.match(/code=([a-zA-Z0-9_.-]+)/)
const roomCode = arr[1]
const slowCode = roomCode.replace(/(.{1})/g, "$1 ")
document.getElementById("roomCode").innerHTML = roomCode

// Text to speech settings
let utter = new SpeechSynthesisUtterance()
utter.lang = "en-US"
utter.text = `The room code is ${slowCode}`
utter.volume = 0.7
utter.rate = 0.25

// Repeat code 5 times
var i = 1

function playCode() {
  setTimeout(function () {
    window.speechSynthesis.speak(utter)
    i++
    if (i < 5) {
      playCode()
    }
  }, 500)
}
