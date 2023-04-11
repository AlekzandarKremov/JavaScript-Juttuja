
//Tähän olen tehnyt promptin joka kysyy käyttäjältä nimeä
var name = prompt("What Is Your Name?");
var name2 = prompt("What Is Your Name? part 2");
var name3 = prompt("What Is Your Name? part 3");
//Nämä nämä hakee erilaiset custominputit html tiedostosta
var hoo3 = document.getElementById("customInput");
var hoo32 = document.getElementById("customInput2");
var hoo33 = document.getElementById("customInput3");
//seuraavat 3 komentoa muokkaavat tekstiä
//Tämä näyttää tekstin niin kuin se on kirjoitettu
hoo3.innerText = name;
//Tämä tekee kaikista tekstin kirjaimista isoja
hoo32.innerText = name2.toUpperCase();
//Tämä tekee kaikista tekstin kirjaimista pieniä
hoo33.innerText = name3.toLowerCase();


//Tässä on myös console log joka nöyttää käyttäjän vastauksen
console.log("Your Name Is", name)