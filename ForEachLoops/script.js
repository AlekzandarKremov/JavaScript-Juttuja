 /*   var names = ["Alekki", "ElGato", "Kokotriilo", "Doggo"]

    names.forEach(function(name, index){
        console.log(index, name)
    }) */

    var lis = document.querySelectorAll(".js-text")

    lis.forEach(function(node, index){
        if(index >= 10) {
            node.remove()
            return false
        }
        node.innerText = (index * 12) + " is the number"
    })