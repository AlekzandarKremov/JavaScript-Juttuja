class Person {
    constructor(name, kind, food){
        this.name = name
        this.kind = kind
        this.food = food
    }
    makeSound() {
        document.getElementById("output").innerText =
        (this.name + " says GRRRRR to " + this.food)
    }
    Information(){
        document.getElementById("output2").innerText =
        (this.name + " Is A " + this.kind)
    }
}

const alek = new Person("Alek", "Human", "Broccoli")
const mirri = new Person("Mirri", "Cat", "Dog Food")
const kokotriilo = new Person("Kokotriilo", "Crocodile", "Vegetables")
alek.makeSound()
mirri.makeSound()
kokotriilo.makeSound()
alek.Information()
mirri.Information()
kokotriilo.Information()
