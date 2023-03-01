package control;

import java.util.Scanner;

public class EstructuraIf {
	Scanner entrada = new Scanner(System.in); // Sirve para introducir datos por teclado

	public void controlIf() {

		/*
		 * if (condition) { // If simple si la instruccion es verdadea se ejecutara lo
		 * que esta dentro de las llaves
		 * 
		 * }
		 */

		/*
		 * if (condition) { //if-else abra una condicion verdadera y una falsa que sera
		 * el (else)
		 * 
		 * } else {
		 * 
		 * }
		 */

		long nota = 5;
		if (nota > 5) {
			System.out.println("Nota aprobatoria " + nota);
		}
		System.out.println("continua con el control");

		if (nota >= 5) {
			System.out.println("Nota aprobatoria " + nota);
		} else {
			System.out.println("Nota no aprobatoria " + nota);
		}
		System.out.println("continua con el control");

	}

	public void Divisible() {
		// TODO Auto-generated method stub
		System.out.print("Introduce el primer numero ");
		int dato1 = entrada.nextInt();
		System.out.print("Introduce el segundo numero ");
		int dato2 = entrada.nextInt();

		if (dato1 % dato2 == 0) {
			System.out.println(dato1 + " si es divisible entre " + dato2);
		} else {
			System.out.println(dato1 + " no son divible entre " + dato2);
		}
	}

	public void Compara() {
		// TODO Auto-generated method stub
		System.out.print("Introcuce el primer valor");
		int valor1 = entrada.nextInt();
		System.out.print("Introcuce el segundo valor");
		int valor2 = entrada.nextInt();

		if (valor1 > valor2) {
			System.out.println(valor1 + " es mayor a " + valor2);
		} else {
			System.out.println(valor2 + " es mayor a " + valor1);
		}
	}

	public void Anidado() {
		// TODO Auto-generated method stub
		System.out.print("Introcuce un valor");
		int valor1 = entrada.nextInt();

		// El if anidado es para seguir comparando condiciones
		if (valor1 > 0) {
			System.out.println(valor1 + " es positivo ");
		} else if (valor1 < 0) {
			System.out.println(valor1 + " es negativo ");
		} else {
			System.out.println("El numero es cero ");
		}

	}
}
