//Javascript sincrono
alert("Cohorte 23");
console.log("Hola buen dia ");
alert("Dia del michi");
console.log("Gracias adios ");

// setTimeout(
//     function () {
//         console.log("Hola Mundo, con retraso");
//     }, 3000
// )
// console.log ("Sorpresa");

const myCallback = () => console.log("Hola mundo, con retraso"); // Esta linea es una fincio felcha que simplifica las lineas 7-12
setTimeout(myCallback, 2000); // el setTimeout se usa para hacer que aparesca un mensasje despues asignandole Ms
console.log ("Sorpresa");