package ciclos.forwhiledo;

import java.util.Scanner;

public class UsoWhile {
	Scanner entrada = new Scanner(System.in);

	public void CicloW() {
		// TODO Auto-generated method stub
		
		//El ciclo "while" es una estructura de control de flujo que permite ejecutar un bloque de código repetidamente mientras se cumpla una condición especificada, se utiliza cuando no se sabe de antemano cuántas veces se debe ejecutar el bloque de código.
		
		int iterador = 0; //Se debe declara le iterador fuera del while
		
		while (iterador < 10 ) {
			System.out.println("Valor de iterador " + iterador);
			iterador = iterador +1;
		}
		System.out.println();
	}
	
	//While eso centinela 
	public void CentinelaW() {
		final int centinela = -1;
		System.out.print("Introduce tu nota ");
		int nota = entrada.nextInt(); //Asi se recibe el dato del usuario 
		
		while (nota != centinela) {
			System.out.println("La nota es " + nota);
			System.out.print("Introduce tu nota ");
			nota = entrada.nextInt();
			
		}
		System.out.println("Fin");
	} 
	
	public void BanderaW() {
		
		boolean valorb = false;		
		while (!valorb) {
			System.out.print("Introduce un numero ");
			int valorx = entrada.nextInt();
			
			if (valorx >= 0 && valorx <= 5) {
				int potaxio = (int) Math.pow (valorx, 2);
				System.out.println("El resultado es " + potaxio);
			} else {
				valorb = true;
				System.out.println("Adios");
			}
		}
		
		

	}
}
