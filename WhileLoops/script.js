/*var num = 0
while(num <= 1000) {
    console.log(num)

    //num = num + 1
    num++
}*/

/*var num = Number(prompt("Give Me A Number"))
var startingNum = 1
while(startingNum < num) {
    console.log(startingNum)

    // num = num + 1
    startingNum++
}*/

var ul = document.querySelector(".js-list")
var html = ""

var num = Number(prompt("Give Me A Number"))
var startingNum = 1
while(startingNum <= num) {
    html = html + "<li>Iteration: " + startingNum + "</li>"
    startingNum++
}

ul.innerHTML = html