const arvo1 = prompt("Syötä Joku Sana Tähän")
const arvo2 = prompt("Syötä Toinen Sana")
const arvo3 = prompt("Syötä Kolmas Sana")

const sentence1 = `The Word "${arvo1}" Is Very Cool`
const sentence2 = `The Word "${arvo2}" Is Also Very Cool`
const sentence3 = `But The Word "${arvo3}" Is The Best One`

document.getElementById("sana1").innerHTML = (sentence1)
document.getElementById("sana2").innerHTML = (sentence2)
document.getElementById("sana3").innerHTML = (sentence3)