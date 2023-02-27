package Principal;

import java.util.Scanner;

import Clases.NuevoHola;

public class EjecutarNH {
	
	public static void main(String[] args) {
		Scanner sn = new Scanner (System.in ); //Scanner es una clase que nos permite obtener la entrada de datos primitivos
		NuevoHola nh = new NuevoHola("Antonio Nuñez");
		nh.saludo();
		
		String nombre;
		System.out.print("Cual es tu nombre");
		nombre = sn.next();
		
		NuevoHola nh1 = new NuevoHola(nombre);
		nh1.saludoConNombre();
	}
	
}
