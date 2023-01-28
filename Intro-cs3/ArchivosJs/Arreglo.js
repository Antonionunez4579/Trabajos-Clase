let miArreglo = [] // Declaracion literal
let miArreglo2 = new Array(); // Por Instancia
let miArreglo3 = [10,20,30,40];
console.log("El valor de Arreglo en el el indice o es " + miArreglo3[0]);
console.log("El valor de Arreglo en el el indice o es " + miArreglo3[1]);
console.log("El valor de Arreglo en el el indice o es " + miArreglo3[2]);
console.log("El valor de Arreglo en el el indice o es " + miArreglo3[3]);

let miArreglo4 =["Hola " , "mundo"];
console.log("El contenido del arreglo es " + miArreglo4 [0]);
console.log("El numero de elementos del arreglo es " + miArreglo4.length);

let miArreglo5 = [{Nombre:"Antonio"},{Apellido:"Nuñez"},{Edad:23}];
console.log("El elemento del arreglo es " + miArreglo5[0].Nombre);
console.log("El elemento del arreglo es " + miArreglo5[1].Apellido);
console.log("El elemento del arreglo es " + miArreglo5[2].Edad);

let nuevoArreglo = [3, 6, 1, 4];
console.log("Orden del nuevo arreglo con sort" + nuevoArreglo.sort()); //Acomoda los numeros de menor a mayor 
console.log("Orden del nuevo arreglo con pop" + nuevoArreglo.pop()); //Nos dice y quita el numero mas grand del array
console.log("Ordenn del nuevo arreglo " + nuevoArreglo.push(10)); //Agrega un numero al Array
console.log("Ordenn del nuevo arreglo con reverse " + nuevoArreglo.reverse()); // Invierte el onder de los elementos en el array

console.log("JavaScript"[2]);
console.log("Javascript".length); // Este metodo nos da el numero de caracteres de la palabra

let Matriz = [[1,2,3][4,5,6]]; // La matriz es un arreglo de arreglo
console.log("El tamaño de la matriz es de " + Matriz);
console.log(Matriz[1][1]);
console.log(Matriz[2][1]);
console.log(Matriz[0][2]);