function greeting(name="Alekki", age=17) {
    console.log("Moi " + name + "!")
    console.log("Olet " + age + " Vuotta Vanha!")

    return name;
}

var defaultName = greeting()
var ElGato = greeting("El Gato", 204)
var Kronkodrilo = greeting("Kronkodriilo", 987)
