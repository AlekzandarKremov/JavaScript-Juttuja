function addNumber(value) {
    document.getElementById("laskutoimitus").value += value;
}

function clearScreen() {
    document.getElementById("laskutoimitus").value = " ";
}

function addOperator() {
    console.log(document.getElementById("operation").value)
    addNumber(document.getElementById("operation").value)
}

function mathResult() {
    var result = eval( document.getElementById("laskutoimitus").value)
    document.getElementById("laskin").value = result
}