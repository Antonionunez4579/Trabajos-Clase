package tiposDeDatosVariables;

public class Java4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int edad = 18;
		boolean tieneLicencia = true;
		if (edad >= 18 && tieneLicencia) {
		    System.out.println("Puede conducir un coche");
		} else {
		    System.out.println("No puede conducir un coche");
		}
		
		String nombre = "Juan";
		String apellido = "Pérez";
		if (nombre.equals("Juan") || apellido.equals("Pérez")) {
		    System.out.println("El usuario es Juan Pérez");
		} else {
		    System.out.println("El usuario no es Juan Pérez");
		}
		
		boolean esVerdadero = true;
		if (!esVerdadero) {
			System.out.println("La condición es falsa");
		} else {
			System.out.println("La condición es verdadera");
		}
		
		//Ejercicio 1 verificar si su numero es par y es positivo int = 6
		int numero = 6;
		
		if (numero % 2 == 0 && numero > 0) {
		    System.out.println("El número es par y positivo.");
		} else {
		    System.out.println("No es par ni positivo.");
		}
		
		//Ejercicio 2 verificar si un numero esta dentro de un rango especifico int = 10

		int num = 83;
		
		if (num > 0 && num <= 50) {
		    System.out.println("El número está dentro del rango.");
		} else {
		    System.out.println("El número está fuera del rango.");
		}
		
		//Ejercicio 3 verificar si una cadena es igual a otra o no 
		
		String cadena1 = "Hola";
		String cadena2 = "hola";
		
		if(cadena1 == cadena2) {
			System.out.println("Son iguales ");
		}
		else {
			System.out.println("No son iguales ");
		}
	}

}
