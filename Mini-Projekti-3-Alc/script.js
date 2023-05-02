var age = prompt("What Is Your Age?")
console.log(typeof(age))
age = Number(age)
console.log(typeof(age))
var answer = document.getElementById("answer")

if(age >= 18) {
    answer.innerText = "Yes You Can!"
} else if(age < 18) {
    answer.innerText = "No You Can't"
}