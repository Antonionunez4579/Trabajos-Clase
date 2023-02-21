// Forma clasica 
class OpreacionesAritmeticas { //Segun CamelCase las clases el nombre de un clase se define con la primer letra en mayuscula al igual que la suiguinte
    numero0 = 5; // En la forma clasica no se poruqe ya se esta dentro de unn abtraccion
    numero = 0;

    constructor(valor0, valor1){
        this.numero0 = valor0;
        this.numero = valor1;
    }

    sumar(a, b) {
        return a + b;
    }
}
//Asi se instancia un objeto declaracion del ojeto con "let" , creacion del objeto con "new" y peticion con "console log"
let obj1;
obj1 = new OpreacionesAritmeticas();
console.log(obj1.numero0);

let obj2 = new OpreacionesAritmeticas(8,6);

//Esta es la foma mas usual en que las encontraremos 