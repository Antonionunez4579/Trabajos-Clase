if (GPAacumulativo > 2 && Unidadestotales >= 120) { // Solo se dejo todo dentro de un if 
    console.log("Puedes graduarte");
}

if (cspCalificacion = 75 && proCalificacion >= 75) { // Se dejo todo dentro de un solo if
    console.log("Eres elegible para la graduacion");
}


// let saludo = "Hola mundo";
// let punto = "."
// for (let index = 0; index < saludo.length; index++) { // Length nos dice los caracteres que tiene un string
//     punto += saludo[index] + "."; // Aqui se le agrega un espacio en blanco despues de cada caracter con "+=" y con un " "

// }
// punto = punto.trim([]) // "Trim" quita el espacio en blanco al inicio y al final de una cadena de caracteres
// punto = punto.slice
// console.log(punto);

let text = "Hola Mundo";

let message = [];

for (let index = 0; index < text.length; index++) {

    message += text[index] + ".";

}

let partMessage1 = message.substring(0, 7);
let partMessage2 = message.substring(10, 19);
console.log(partMessage1 + " " + partMessage2);
