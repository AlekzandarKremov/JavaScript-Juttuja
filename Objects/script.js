person = {
    "name" : "Alek",
    "age" : 17,
    "cats" : 1
}

person["sound"] = function() {
    console.log("meow");
}

var name = "Alek";

function something() { }

var person = {
    "Name": "Alek",
    "Sound": function() {
        console.log("Meow")
    }
}

person.getCats = function() {
    alert(this.name + " has " + this.cats + " cats")
}

var mirri = {
    "name": "Mirri",
    "sound": function() {
        console.log("Meow")
    },
    "age": 5
}

var objectName = {
    "key1": "value1",
    "key2": "value2"
}