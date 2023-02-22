// Crear un programa en Javascript que realice lo siguiente:
// Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
// Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y volver a solicitarle que ingrese un número.
// Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
// El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
// Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.


class Adivinador {
    constructor(numeroSecreto) {
        this.numeroSecreto = numeroSecreto;
        this.numerosIntroducidos = [];
    }

    adivinarNumero() {
        let num = prompt("Intenta adivinar el número secreto (1-100):");

        if (isNaN(num) || num === "") { //isNaN es una función de alto nivel y no está asociada a ningún objeto. isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
            alert("Debes introducir un número válido.");
            this.adivinarNumero(); // El metodo This hace referencia a los atributos
        }
        else {
            num = parseInt(num);

            if (num < 1 || num > 100) {
                alert("Debes introducir un número entre 1 y 100.");
                this.adivinarNumero();
            }
            else {
                this.numerosIntroducidos.push(num); // El push()método agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz.

                if (num === this.numeroSecreto) {
                    alert("Felicidades, adivinaste el número secreto.\nNúmeros introducidos: " + this.numerosIntroducidos.join(", ")); //El join()método crea y devuelve una nueva cadena concatenando todos los elementos en una matriz (o un objeto similar a una matriz )
                } else if (num < this.numeroSecreto) {
                    alert("Ups, el número secreto es mayor, vuelve a intentarlo.");
                    this.adivinarNumero();
                } else if (num > this.numeroSecreto) {
                    alert("Ups, el número secreto es menor, vuelve a intentarlo.");
                    this.adivinarNumero();
                }
            }
        }
    }
}
// Generar un número aleatorio del 1 al 100 como número secreto
let numSecreto = Math.floor(Math.random() * 100) //El math.floor devuelve el máximo entero menor o igual a un número.
window.onload = function () {
    let adivinador = new Adivinador(numSecreto);
    adivinador.adivinarNumero();
}//window.onload nos asegura que el código se ejecutará cuando el DOM esté cargado y listo para ser manipulado. Si no lo usamos, el código se ejecutará antes de que el DOM esté listo y no funcionará.

