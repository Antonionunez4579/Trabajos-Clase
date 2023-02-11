// if (1>3) {
//     alert("1 es  mayor a 3");    
// }

let edad = parseInt(prompt("Inserta tu edad"));

if (edad <= 17) {
    document.write("<h2>Eres un pequeñuelo</h2>")
}
else if (edad === 18) {
    document.write("<h2>Eres mayor de edad</h2>")
} else if (edad > 18) {
    document.write("<h2>Estas viejo</h2>")
} else {
    document.write("<h2>Este no es un numero valido</h2>")
}