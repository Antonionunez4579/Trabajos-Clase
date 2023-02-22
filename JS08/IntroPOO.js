//Forma por prototipo
let persona = { //las lineas 1-5 de codigo serian para definir un objeto, el cual tiene caracteristicas propias de si misma (Esto en por prototipos)
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    peso: 100,
    nombreCompleto: function () {
        return "EL nombre es" + this.nombre + " " + this.apellido // El metodo This hace referencia a los atributos de objeto 
    }
}
console.log(persona);
console.log(persona.edad);
console.log(persona.nombreCompleto ());