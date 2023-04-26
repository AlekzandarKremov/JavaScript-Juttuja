//Tekee listan
var lista = document.querySelectorAll(".lista")

lista.forEach(function(node, index){
    node.innerText = (index / 7) + " On Siisti Numero"
})

//Tekee toisen listan
var lista2 = document.querySelectorAll(".lista2")

lista2.forEach(function(node, index){
    node.innerText = (index * 14) + " On Siisti Numero"
})