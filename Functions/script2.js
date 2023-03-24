/*
function doMath(num) {
    num = Number(num);
    if(num) {
        var newNumber = (num + 100) / 4;
        return newNumber
    } else {

        return false;
    }
}
var customNum = doMath(29); 
console.log(customNum)
function $(id) {
    return document.getElementById(id)
}
var title = $("title");
title.innerText = "Custom Inner Text Using The Dollar Sign"
*/

function cToF(c_num) {
    var fahrenheit = (c_num * 1.8) + 32;
    return fahrenheit;
}

var zero = cToF(0); console.log(zero);
var twenty = cToF(20); console.log(twenty);
var boiling = cToF(100); console.log(boiling);
var freezing = cToF(-40); console.log(freezing);

function name() {
    return "return something"
}

name()