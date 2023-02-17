/*

Que encontramos en el arbol del DOM?

- Node: Es la unidad mas basica dentro del documento. Puede ser una etiqueta, un texto dentro de una etiqueta o un comentario, etc. 

    <title> NODO
        Manipualacion DOM //Es un nodo, pero es hijo del title
    </title>


- Document: Tambien es un nodo, del tipo documento, es el nodo raiz a partir del cual se desarrollan o generan todos los demas nodos.

- Element: son todos aquellos definidos por etiquetas <div>, <img>, <h1>, <p>

- Attributes: Nodos que dan informacion asociada al tipo de elemento

- Comentario: Comentarios y otros elementos que estan dentro del HTML, son considerados nodos.


*/

/*comol leer nodosde mi DOM

Metodos tradicionales (que se uasn en versiones antiguas de javascript)
    -document.GetElementById (botonsuma)
    -document.getElementsByTagName (<Button>)
    document.getElementByClassName (Botones)

*/

// var elementoId = document.getElementById ("botonsuma");
// console.log (elementoId);

// var elementoEtiqueta = document.getElementsByTagName ("button")
// console.log (elementoEtiqueta);
// console.log ("este es el primer elemento de mi collecion de botones ", elementoEtiqueta[0]);

// var elementoClassName = document.getElementsByClassName ("botones");
// console.log (elementoClassName);

// /*
// Metodos recientes


//     -document.querySelector (.botones)
//     -document.querySelectorAll (#botones)


// */

// var unElemento = document.querySelector("#imput1");
// console.log (unElemento);

// var variosElementos = document.querySelectorAll(".botones");
// console.log (variosElementos);


var imptu1 = document.getElementById("Imput1");
var imptu2 = document.getElementById("Imput2");

var botonSuma = document.getElementById("botonsuma");
var botonResta = document.getElementById("botonresta");
var botonMultiplicacion = document.getElementById("botonmultiplicacion");
var botonDivicion = document.getElementById("botondivicion");

var resultado = document.getElementById("resultado");

//Funciones de nuestra calculadora

function suma(num1, num2) {
    let valor1 = parseInt(imptu1.value);
    let valor2 = parseInt(imptu2.value);
    let suma = valor1 + valor2;
    resultado.innerHTML = suma;
}
botonSuma.addEventListener("click", suma);

function resta(num1, num2) {
    let valor1 = parseInt(imptu1.value);
    let valor2 = parseInt(imptu2.value);
    let resta = valor1 - valor2;
    resultado.innerHTML = resta;
}
botonResta.addEventListener("click", resta);

function multiplicacion(num1, num2) {
    let valor1 = parseInt(imptu1.value);
    let valor2 = parseInt(imptu2.value);
    let multiplicacion = valor1 * valor2;
    resultado.innerHTML = multiplicacion;
}
botonMultiplicacion.addEventListener("click", multiplicacion);

function divicion(num1, num2) {
    let valor1 = parseInt(imptu1.value);
    let valor2 = parseInt(imptu2.value);
    let divicion = valor1 / valor2;
    resultado.innerHTML = divicion;
}
botonDivicion.addEventListener("click", divicion);

// function resta(num1, num2) {
//     return num1 - num2;
// }









//Creacion de una etiqueta tipo imagen
var imagenPerrito = document.createElement("img");

//creamos atributos a la etiqueta
imagenPerrito.src = "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg";
imagenPerrito.alt = "Foto de perrito tierno";
imagenPerrito.style.width = "150px"
imagenPerrito.style.borderRadius = "100px"

var textoPerrito = document.createElement("p");
textoPerrito.textContent = "Este es mi perrito ";

//poner elemento o nodos en el HTML
document.body.append(imagenPerrito); //Append inserta cosas como img etc en el documento

//Actualizar nodos 
//1er paso identificar el nodo que quiero cambiar (outer)
//2do paso modificar el noso (inner)

var resultadoQueCambia = document.getElementById("resultado");
resultadoQueCambia.innerHTML = "Wenas wenas"; // El inner cambia un texto


/*

Manipulacion del DOM


    - Metodos para acceder a elementos 

        - document.getElementById
        - document.getElementsByTagName
        - document.getElementosByClassName


    - Metodos para crear elementos  

        - document.createElement(etiqueta)
        - document.createTextNode(texto) - Investigar


    - Metodos para insertar elementos

        - parentElement.append
        - parentElement.insertBefore
        - parentElement.insertAdjacentElement


    - Metodos para modificar elementos

        - node.outerHTML (leer o referenciar el elemento)
        - node.innerHTML (modificar el elemento)


*/

//Primer paso: Definir con que voy a interactuar (almaceno en una variable)
const textoAModificar = document.querySelector("#h1")

//Creo una funcion que cambia de color, segun el color que le paso como parametro
function cambiarColor(color){
    textoAModificar.style.color = color;
}

