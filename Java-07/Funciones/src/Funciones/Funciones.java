package Funciones;

public class Funciones { //Clase llamada funciones 
	
	//Las funciones se pueden declarar en cualquier lugar de la clase (Si retotorna algo )
	 public static int sumar (int num1, int num2) {
	        int resultado = num1 + num2;
	        return resultado;
	    }
	 
	 public static int resta (int num1, int num2) {
	        int resultado = num1 - num2;
	        return resultado;
	    }
	 
	 public static int multiplicacion (int num1, int num2) {
	        int resultado = num1 * num2;
	        return resultado;
	    }
	 
	 public static int divicion (int num1, int num2) {
	        int resultado = num1 / num2;
	        return resultado;
	    }
	 
	 
	//Funcion para imprirmir asteriscos
	public static void imprimirasteriscos () { //
		System.out.println("************************");
	}
	
	public static String awitaDeLimon (String ingre1, String ingre2, String ingre3) {
		String recetaCompleta = ingre1 + ingre2 + ingre3;
		return recetaCompleta;
	}

	//Este metodo tiene como funcion, ejecutar cosas
	public static void main(String[] args) {
		
		//Las invocaciones de la funcion se hacen generalmente dentro del metodo principal o main
		System.out.println("El resultado de la operacion es: " + sumar(6,8));
		System.out.println("El resultado de la operacion es: " + resta(6,8));
		System.out.println("El resultado de la operacion es: " + multiplicacion(6,8));
		System.out.println("El resultado de la operacion es: " + divicion(6,8));
		
		imprimirasteriscos ();
		
		System.out.println("Estos son los pasos para preparar aguita de limon: " + awitaDeLimon ("agua", "limon", "azucar"));
		
		//funciones de la iblioteca Math
		
		double valorEjemplo = 7.64d;
		System.out.println("La raiz cuadrada de mi valores : " + Math.sqrt(valorEjemplo);
		
	}
	

}

/*

Funciones 

    - No retornan valores: No devuelven nada, no se especifica nada, y no usamos la palabra return
    
    - Si retornan valores: Se especifica el tipo de dato, el tipo de valor que regresa y se usa return para esto

*******************************************************************************************************************
- Sintaxis de las funciones que si retornan valores
    tipoDeRetorno nombreDeLaFuncion(tipoDeDato argumento1, tipoDeDato argumento2, ...) {
  // Cuerpo de la función
}

    - Sintaxis de las funciones que no retornan valores
    palabraReservada nombreDeLaFuncion(){
    //cuerpo de la funcion
     }
*******************************************************************************************************************
Cosas que debemos tomar en cuenta al momento de crear nuestras funciones:
    - Deben de llevar un nombre unico
    - Opcionalmente podran recibir argumentos y devolver el resultado
    - Se debe especificar el tipo de dato que vamos a pasar como argumnto, y el resultado final de nuestra funcion
    - Cuidar el orden en como estamos agregando nuestros parametros o argumentos.

*/
