
var sentenceNode = document.getElementById("sentence");
var sentence = sentenceNode.innerText;

var upperSentence = sentence.toUpperCase();
var lowerSentence = sentence.toLowerCase();
var firstTenChars = sentence.substring(0, 11);

var allWords = sentence.split(" ");
var bracketWords = "(" + allWords.join(")(") + ")"

console.log("Sentence:", sentence)