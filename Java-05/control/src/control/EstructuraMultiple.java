package control;

import java.util.Scanner;

public class EstructuraMultiple {
	Scanner dato = new Scanner(System.in);

	public void Vocal() {
		System.out.print("Introduce una letra");
		char letra = dato.next().charAt(0);

		// El switch es una estructura de control de flujo en Java que permite tomar una
		// decisión basada en el valor de una expresión.
		switch (letra) {
		case 'a':
		case 'A':
		case 'e':
		case 'E':
		case 'i':
		case 'I':
		case 'o':
		case 'O':
		case 'u':
		case 'U':
			System.out.print(letra + " es una vocal ");
			break;

		default:
			System.out.println(letra + " no es una vocal ");
			break;
		}
	}

	public void Notas() {
		// TODO Auto-generated method stub
		System.out.print("Introduce tu calificacion");
		int nota = dato.nextInt();

		switch (nota) {
		case 10:
			System.out.println("Exelente");
			break;
		case 9:
			System.out.println("Muy bien");
			break;
		case 8:
			System.out.println("Bueno");
			break;
		case 7:
			System.out.println("Regular");
			break;
		case 6:
			System.out.println("Deficiente");
			break;
		case 5:
		case 4:
		case 3:
		case 2:
		case 1:
		case 0:
			System.out.println(nota + " es una 	calificacion reprobatoria");
			break;

		default:
			System.out.println(nota + " no es calificacion dentro de 1-10 ");
			break;
		}
	}

	// Operador ternario variable (PL) 
	public void Ternario() {
		// TODO Auto-generated method stub
		System.out.print("Introduce el primer numero ");
		int entradaV = dato.nextInt();
		System.out.print("Introduce el segundo numero ");
		int entradaF = dato.nextInt();
		int menor = (entradaV <= entradaF) ? entradaF : entradaF;
		System.out.println(menor + " es menor");
	}
}
