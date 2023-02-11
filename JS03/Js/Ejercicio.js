let diaNumero = parseInt(prompt("Ingresa un numero del 0 al 6"));

if (diaNumero === 0){
    document.write("Hoy es Domingo")
} else if (diaNumero === 1){
    document.write("Hoy es Lunes")
} else if (diaNumero === 2){
    document.write("Hoy es Martes")
} else if (diaNumero === 3){
    document.write("Hoy es Miércoles")
} else if (diaNumero === 4){
    document.write("Hoy es Jueves")
} else if (diaNumero === 5){
    document.write("Hoy es Viernes")
} else if (diaNumero === 6){
    document.write("Hoy es Sábado")
} else {
    document.write("Numero invalido")
}

let q = true;
let p = true;
if (q && p) {
    console.log("verdadero");
}