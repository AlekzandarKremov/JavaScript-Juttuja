//var names = ["Alekki", "ElGato", "Kokotriilo", "CupcakeThePitbull"]

/*function toEmailAddress(name) {
    return name.toLowerCase() + "@gmail.com"
}*/

var names = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis beatae cupiditate soluta sequi explicabo eum commodi asperiores culpa doloremque quam cumque minus, repudiandae, perferendis voluptatem consequatur, unde esse voluptatum?".split(" ")


for(var i = 0; i < names.length; i++) {
    var currentEmail = names[i].toLowerCase() + "@gmail.com"

if(i % 2 == 0) {
    continue;
}

  /* if(i==10){
        break;
    }*/
    console.log(i, currentEmail)    
}

/*for(var i=0; i < 10; i++) {
    console.log(i)
}*/