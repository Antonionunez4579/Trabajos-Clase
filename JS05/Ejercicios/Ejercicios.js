//let  names =  ["Maria","Antony","Joy","Juan"];
names.push("Hersain"); //Agrrega un elemento al final de array 
console.log(names);
names.indexOf("Antony");
console.log(names);

//let names = ["Maria", "Antony", "Joy", "Juan",];
let names2 = ["Maria", "Ricardo", "Yael", "Juan"];
function comparacion() {
    let nombres3 = [];
    for (let i = 0; i < names2.length; i++) {
        if (names.includes(names2[i])) {
            nombres3.push(names2[i]);
        }
    }//For recorre el array names2 y verifica si el elemento existe en el array nombres, si existe lo agrega al array nombres3
    return nombres3;//Devuelve el array nombres3 con los elementos que existen en ambos arrays 
}
console.log(comparacion());

let names = ["Maria", "Antony", "Joy", "Juan"];
function longitud(names) {
    let longitudes = []; 
    for (let i = 0; i < names.length; i++) { // length devuelve la longitud del array
        longitudes.push(names[i].length);
    }//For recorre el array names y agrega la longitud de cada elemento al array longitudes
    return longitudes;//Devuelve el array longitudes con las longitudes de los elementos del array names
}
console.log(longitud(names));



false || (true && false); //false, por que && tiene mayor jerarquia que || y se evalua primero
console.log(true && false)

true || (11 + 12); //true, por que 11 + 12 es true
console.log(11 + 12)

(31 + 22) || true; //true, por que 53 es true 
console.log(31 + 22)

true && (1 + 7); //true, por que 8 es true
console.log(1 + 7)

false && (3 + 4); //false, por que 3 + 4 es true 
console.log(3 + 4)

(1 + 2) && true; //true, por que 3 es true
console.log(1 + 2)

(32 * 4) >= 129; //false, por que 128 es menor que 129
console.log(32 * 4)

false !== !true; //false, la expresión !== devuelve true si los operandos son diferentes y false si son iguales
console.log()

true === 4;  //false, por que true no es igual a 4
console.log(true === 4)

false === (847 === '847'); //true, por que false es igual a false
console.log(false === (847 === '847'))

false === (887 == '887'); //false, por que false es igual a true
console.log(false === (887 == '887'))

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //((false || false ||true) || false) = true
console.log(!true || (!(100 / 5) === 20) || ((328 / 4) === 82))




function rango(num){
    if(num >= 0 && num <= 25){
        console.log("${num} esta entre 0 y 25");
    }else if (num >=26 && num <= 100) {
        console.log("${num} esta entre 26 y 100");
    } else if (num > 100) {
        console.log("${num} es mayor que 100");
    } else {
        console.log("${num} es menor que 0");
    }
}
rango (25);
rango (75);
rango (125);
rango (-25);
