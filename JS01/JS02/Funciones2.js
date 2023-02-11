




/*Por que son importantes las funciones?
    - Nos permite reutilizar codigo en lugar de escribirlo varias veces. Podemos llamar nuestra funcion en distintos lugares de nuestro programa, y así lo usamos cuando lo necesitamos sin necesidad de escribirlo de nuevo.
    - Nos permite modularizar nuestro codigo, esto es, dividir nuestra aplicacion en partes mas pequeñas e independientes. Así mejoramos el entendimiento y comprensión del código.
    - Mantienen su propio espacio, y las variable que se encuentran dentro de una funcion no se pueden acceder fuera de ella (scope).
    - Por que podemos probar pequeñas partes de nuestro programa de forma aislada. (Debugging)*/

    // Funcion directa
    function carroCompra (){
        //lo que hace la funcion
    }
    carroCompra()

    //funcion anonima
    let x = function(){
        let = 5;
        let = 6;
        let suma = valor + valor2;
        console.log("esta funcion anonima",suma);
    }
/*
    // tipos de funciones
    funciones directas - nombre (comunes)
    funciones anonimas - viven pegadas a una variable
    funciones como metodos (para specificar que hace mi objeto) 
    funciones como contructores (para construir y crear un objeto)
*/
//Funcion directa
function suma (a, b){
    let = suma = a + b
    console.log(suma);
}
//la misma funcion pero flecha flecha, Sintaxis de la funcion flecha
const suma = (a, b) => a + b;

/*

Return

La sentencia return finaliza la ejecucion de la funcion, y especifica un valor para ser devuelto a quien llama a la funcion. O lo que es lo mismo, usamos return para finalizar y tambien para poder asignar el resultado a una variable.


*/