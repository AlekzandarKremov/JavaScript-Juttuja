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

const kokotriilo = new Person("Kokotriilo", "Crocodile", "Vegetables")
kokotriilo.makeSound()
kokotriilo.Information()
