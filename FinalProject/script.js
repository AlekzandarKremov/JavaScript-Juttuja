const h1 = document.querySelector("h1")
const text = h1.innerText.split("")
let html = ""

letters.forEach(letter => {
let classes = ""
if(letter !== " ") {
classes = "letter js-letter"
}
    html = html + `<span class=`$(classes)`>$(letter)</span>
})