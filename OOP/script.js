class Person {
    constructor(name, age, food){
        console.log(name, age, food)
        this.name = name
        this.age = Number(age)
        this.food = food
    }
    makeSound() {
        console.log(this.name + " says mmmm to " + this.food)
    }
}

const alek = new Person("Alek", 17, "Makaronilaatikko")
alek.makeSound()
const mirri = new Person("Mirri", 5, "Cat Food")
mirri.makeSound()
