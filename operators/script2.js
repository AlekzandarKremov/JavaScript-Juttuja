var input = prompt("What course are you taking?")
var inputLower = input.toLowerCase()

var text = document.getElementById("text")

if(inputLower == "Javascript for beginners") {
text.innerHTML = "<strong>WELCOME</strong> to Javascript for <strong>Beginners</strong>"
} else {
    text.innerHTML = "You're in the wrong course";
}