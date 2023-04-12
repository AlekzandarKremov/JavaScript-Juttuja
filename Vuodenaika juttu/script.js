var input = prompt("Missä kuussa olet syntynyt?");
var inputLower = input.toLowerCase();
var vuodenaika = document.getElementById("vuodenaika");

if(inputLower === "joulukuu" || inputLower === "tammikuu" || inputLower === "helmikuu") {
  vuodenaika.innerText = "talvella!";
} else if(inputLower === "maaliskuu" || inputLower === "huhtikuu" || inputLower === "toukokuu") { 
  vuodenaika.innerText = "keväällä!";
} else if(inputLower === "kesäkuu" || inputLower === "heinäkuu" || inputLower === "elokuu") { 
  vuodenaika.innerText = "kesällä!";
} else if(inputLower === "syyskuu" || inputLower === "lokakuu" || inputLower === "marraskuu") { 
  vuodenaika.innerText = "syksyllä!";
} else { 
vuodenaika.innerText = "Vastauksesi ei kelpaa!";
}
