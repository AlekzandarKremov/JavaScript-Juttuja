//var arr = ["Alekki", "ElGato", "Kokotriilo", "Doggo", "Cupcake", "Goober"]
/*const alekki = arr[0]
const elgato = arr[1]*/

//let [Alekki, ElGato, Kokotriilo, ...rest] = arr
//console.log(rest)

//var fullName = prompt("What Is Your Full Name?")

//let [firstName, lastName] = fullName.split(" ")
/*fullName = fullName.split(" ")
const fullName = fullName[0]
const firstName = firstName[1]*/

//console.log(firstName, " Is The First Name!")
//console.log(lastName, " Is The Last Name")

const person = {
    "first_name_for_the_user": "Alekki",
    "age": 17,
    "cats": 1,
    "food": "pizza",
    "color": "blue",
}

let {
    first_name_for_the_user: firstName,
     food: favoriteFood,
     color = favoriteColor,
} = person 
console.log("Name Is ", firstName)
console.log("Favorite Food Is ", favoriteFood)
console.log("Fav Color Is ", favoriteColor)
