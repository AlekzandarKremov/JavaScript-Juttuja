
var sentenceNode = document.getElementById("sentence");
var sentence = sentenceNode.innerText;

var upperSentence = sentence.toUpperCase();
var lowerSentence = sentence.toLowerCase();
var firstElevenChars = sentence.substr(0, 11);

var allWords = sentence.split(" ");
var bracketWords = "(" + allWords.join("") + ")"

var firstThreeWords = allWords.slice(0, 3);

var middleWords = allWords.slice(5, 10);
var makeSentence = middleWords.join(" ");

sentenceNode.innerText = makeSentence



console.log("Sentence:", sentence)