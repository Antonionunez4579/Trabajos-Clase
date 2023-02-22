// Clase principal tambien llamada clase padre
class Persona { // Pesona es un obejeto y dentro se escuentran su metodos como lo son nombre apellido 

    constructor(nombre, apellido) { //Asi se hace un contructor y se iniciaizan los paraetros linea 3-5
        this._nombre = nombre; // el guion bajo usa para diferenciar  
        this._apellido = apellido;
    }

    set nombre(nombre) { // el set se utiliza para establecer el valor de una propiedad de un objeto.
        this._nombre = nombre;
    }


    get nombre() { // El get se utiliza para obtener el valor de una propiedad de un objeto.
        return this._nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }
    get apellido() {
        return this._apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    // Aqui se sobre escribe el metodo de la super clase Object que es la clase padre de la clase principal "Persona"
    toString(){
        return this.nombreCompleto();
    }

}
// Clase empleado (subclase de "Persona")
class Empleado extends Persona{ // Extends hace 
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento
    }
    set departamento (departamento) {
        this._departamento = departamento
    }
    get departamento(){
        return this._departamento;
    }
    // Se esta sobreescbiendo este metodo de la clase "Persona",la sobreescritura es redefinir el concepto
    nombreCompleto(){
        return super.nombreCompleto() + " , " + this._departamento;
    }
}

let persona1 = new Persona ("Arturo","Gomez");
console.log(persona1.toString()); // Aqui se usa el polimorfismo porque se usa tanto en la clase padre con en la clase hijo

let empleado1 = new Empleado("Maria","Perez","Sistemas");

console.log(empleado1.nombreCompleto());
console.log(empleado1.toString()); // Aqui se usa el polimorfismo porque se usa tanto en la clase padre con en la clase hijo





// let Persona3 = new Persona("Goku", "Hernandez");
// Persona3.nombre = "Juan"; //Con esta linea se reasigna el nombre a "Persona3"
// console.log(Persona3.nombre);

// let Persona1 = new Persona("Juan", "Perez");
// console.log(Persona1.Nombre); // con el "." se accede al los atributos del objeto "Persona1"

// let Persona2 = new Persona("Maria", "Jimenez");
// console.log(Persona2);