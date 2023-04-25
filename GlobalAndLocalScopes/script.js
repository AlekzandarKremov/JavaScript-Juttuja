/*Lokaalit muuttujat ovat sellaisia muuttujia jotka on määritelty funktion sisällä ja sen takia niitä ei voi käyttää funktion ulkopuolella.
globaalit muuttujat ovat muuttujia jotka on määritelty funktion ulkopuolella joten niitä voi käyttää kaikkialla koodissa.
*/



// Globaali muuttuja
var numero1 = 7;

function funktio() {
    // Lokaali muuttuja
    var numero2 = 5;
    console.log(numero1); // Tulostaa 7
    console.log(numero2); // Tulostaa 5
}

funktio();
console.log(numero1); // Tulostaa numeron 7
console.log(numero2); // Aiheuttaa virheen koska y on lokaali muuttuja funktion sisällä