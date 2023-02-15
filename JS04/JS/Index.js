let miVariable = 5;
//let miArray = [2, 3, 4, 5, 6, 7];
let miArray1 = new Array();

console.log(miArray[1]) //Asi se imprime un arreglo sencillo

// let miArray2 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

console.log(miArray2[0][1]) //Asi se imprime una matriz
console.log(miArray2[0][2]) //Asi se imprime una matriz
console.log(miArray2[2]) //Asi se imprime una matriz pero solo en la fila "2" esto mostrara 4,5,6
/**Ciclo for */
let miArray = [2, 3, 4, 5, 6, 7];
for (let i = 0; i <= 5; i++) { // Con esto se 
    console.log("Imprimiendo i " + miArray[i]);
}

let miArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("Imprimiendo i " + miArray2[i][j]);
    }
    console.log("**************************");
}

// let miArray2 = [ 
//     [1, 2, 3],    
//     [4, 5, 6],     
//     [7, 8, 9]
// ];
// let matrizR= [
//     [],[],[]
// ]

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         matrizR[i][j] = miArray2[i][j] * miArray2[i][j];
//     }

// }
// console.log("MatrizR->"+matrizR);

/**Ciclo while */
let contador = 0
while (contador < 10) {
    console.log(contador);
    contador++;
}



