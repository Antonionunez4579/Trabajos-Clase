package Clases;

import java.util.Scanner;

public class NuevoHola { //El public se usa para que sea visible en todo el proyecto
	
	
	private String nombre;
	//Para inicializar la variable (Objeto de tipo String) usamos el metodo contructor

	public NuevoHola(String nombre) { //Constructor
		this.nombre = nombre;
	}
	public void saludo() {
		System.out.println ("Hola desde java de Nuez " + this.nombre);
	}
	
	public void saludoConNombre() {
		System.out.print("Hola tu eres " + this.nombre);
	}
}
