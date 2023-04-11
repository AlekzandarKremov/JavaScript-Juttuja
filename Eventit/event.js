/*var totalClicks = 0
function clickMe() {
    totalClicks++;
    console.log("You've Clicked This Button " + totalClicks + " Times!")
    console.log("CLICK ME")
}*/

var num = 100;

function calculate() {
    var input = document.querySelector(".form-control")
    var value = Number(input.value)
    var totalValue = value + num;

    var h1 = document.querySelectorAll("h1")[1]
    var span = h1.querySelector("span")

    span.innerText = totalValue
}