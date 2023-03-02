package ciclos.forwhiledo;

import java.util.Scanner;

public class CicloDo {
	Scanner dato = new Scanner(System.in);
//El ciclo do-while en Java es similar al ciclo while, pero se ejecuta al menos una vez, incluso si la condición es falsa al principio.
	public void DigitosDo() {
		int valor = 0;
		int acumulador = 0;
		do {
			System.out.print("Introduce un digito entre 0-9"); 
			 valor = dato.nextInt();	
			 acumulador = acumulador +valor;
			 System.out.println("--> " + acumulador);
			 
		} while (valor >= 0 && valor <= 19 );
		System.out.println("Bye");
		
		

	}
}
