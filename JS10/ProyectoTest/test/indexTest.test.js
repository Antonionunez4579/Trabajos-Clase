//Prueba efectiva
//const indexTest = require("../calculadora") //Nos dice el requerimento y donde esta con ECMA5
import { indexTest } from "../calculadora"; // Usando ECMA6
test ("test suma ", () => {
    const r = indexTest.suma(1,2);
    expect(r).toBe(3);
})

test.todo("Test resta"); //deja las demas tareas en "espera"
test.todo("Test multiplcacion");
test.todo("Divicion");

