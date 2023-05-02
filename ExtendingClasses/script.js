
class Animal {
    constructor(species, weight, height) {
        this.species = String(species)
        this.weight = Number(weight)
        this.height = Number(height)
    }
    getInfo() {
        console.log(this.species + " Weighs " + this.weight + " And Is " + this.height + " Tall")
    }

    speak() {
        console.log("I Say A Thing")
    }
}

class Cat extends Animal {
    constructor(species, weight, height) {
        super(species, weight, height)

        this.color = "Grey"
    }

    sleep() {
        console.log(this.species + " Is Sleeping For 26 Hours A Day")
        return this
    }

    speak() {
        console.log("GRRR")
        return this
    }
}

/*const tiger = new Animal("Tiger", 200, 36)
tiger.getInfo()*/
const elgato = new Cat("ElGato", 264, 178)
elgato.sleep().speak()