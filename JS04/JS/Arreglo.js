let lista =[12,5,80,34]; 
let liNueva = lista.map( //
    function(valor){
        return valor *2;
    }
)
console.log(liNueva);





lista.sort(
    function(valor1, valor2) {
        return valor1 - valor2; //Con el operador de "-" ordena de menor a mayor y cuando poener el valor2 al inicio lo ordena de mayor a menor
    }
);
console.log(lista);


lista.sort(); // Ordena los elementos de una lista 
console.log(lista);



lista.reverse(lista); //Reverse pone al reves los elementos de la lista
console.log(lista);



let remover = lista.splice(1,2); //Remueve los demas elementos de la lista exepto los que indicamos en el argumento
console.log(remover);
console.log(list);
lista.splice(2,0, 100,200,300);
console.log(lista);



lista.shift(); // Shift elimina el primer numero de la lista
console.log(lista);


lista.pop(lista); //Elimina el unltimo elemento del arreglo
console.log(lista);

let masE = lista.concat(100, 200, 300); //Agrega mas de un elemento a las lista
console.log(masE);

lista.push(100); //El push agregara un elemento al final de las lista
console.log(lista);

let msj = lista.join("-") // Agrega un elemento a cada elemento 
console.log(msj);


let listaNueva = lista.slice(1,3); // 
console.log(listaNueva);

//console.log(lista.length); // length nos dice el numero de elementos del arreglo

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);   
}
console.log(lista);


