let texto = "Hola Mundo";
if (texto.includes("Hola")) { // Includes nos permite hacer una busqueda en un string ya sea de un solo caracter o de una cadena
    console.log("Existe");
} else {
    console.log("NO existe");
}   


// let palabra3 = texto.split(" "); //Aqui el split identifica el espacio en blanco
// console.log(palabra3[0] + " / " + palabra3 [1]); //Aqui pone una diagonal en el espacio en blanco


// let palabra2 = texto.substring(5, 7); // Tomara 2 caracteres para determinar al  
// console.log(palabra2);


// let palabra = texto.substr(5); // Toma el numero de caracteres que le indiquemos y de ahi muestra el resto del string
// console.log(palabra);


// let mensaje1 = " ";
// let mensaje2 = texto.toUpperCase() // "to UpperCase" convierte el string en mayusculas
// console.log(mensaje2);


// for (let index = 0; index < texto.length; index++) { // Length nos dice los caracteres que tiene un string
//     mensaje1 += texto[index] + " "; // Aqui se le agrega un espacio en blanco despues de cada caracter con "+=" y con un " "
    
// }
// mensaje = mensaje1.trim() // "Trim" quita el espacio en blanco al inicio y al final de una cadena de caracteres
// console.log(mensaje1);



// let mensaje = "El texto tiene " + texto.length + " caracteres" //Aqui usammos el string "texto.length" como un objeto
// console.log(mensaje);