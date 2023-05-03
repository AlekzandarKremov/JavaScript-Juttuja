const arvo1 = prompt("Syötä Joku Sana Tähän")
const arvo2 = prompt("Syötä Toinen Sana")
const arvo3 = prompt("Syötä Kolmas Sana")

const sentence = `The Word "${arvo1}" Is Very Cool The Word "${arvo2}" Is Also Very Cool, But The Word "${arvo3}" Is The Best One`

document.getElementById("lause").innerHTML = (sentence)
