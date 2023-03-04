package colecciones.ahnn;

import java.util.*;

public class MisColecciones {

	public static void main(String[] args) {
		MisColecciones c = new MisColecciones ();
		imprimir (c.listaCollections());
		wrapperClass();

	}
	
	public List listaCollections() {
		List miLista = new ArrayList();//ArrayList es hija de List
		System.out.println(miLista + "tamaño de la lista" + miLista.size());
		System.out.println("Esta vacia " + miLista.isEmpty());
		miLista.add(1);
		miLista.add(2);
		miLista.add(3);
		
		System.out.println(miLista + "tamaño de la despues" + miLista.size());

		return miLista;

	}
	
	private static void imprimir(Collection collection) {
		for (Object elementos: collection);{
			System.out.println("Elementos " + elementos);
		}
		

	}

	static void wrapperClass() {
	//byte, short, char, long, float, int 
		
		byte numerob = 12;
		System.out.println("Tamaño de un byte " + Byte.SIZE);
		System.out.println("Valor maximo " + Byte.MAX_VALUE);
		System.out.println("Valor minimo " + Byte.MIN_VALUE);
		System.out.println("El valor es " + numerob);
		
		int numeroc = 2147483647; 	
		System.out.println("Tamaño de un entero " + Integer.BYTES);
		System.out.println("Tamaño de un entero " + Integer.SIZE);
		System.out.println("Valor maximo " + Integer.MAX_VALUE);
		System.out.println("Valor minimo " + Integer.MIN_VALUE);
		System.out.println("El valor es " + numeroc);
		
		short numerod = 21474; 	
		System.out.println("Tamaño de un entero " + Short.BYTES);
		System.out.println("Tamaño de un entero " + Short.SIZE);
		System.out.println("Valor maximo " + Short.MAX_VALUE);
		System.out.println("Valor minimo " + Short.MIN_VALUE);
		System.out.println("El valor es " + numerod);
		
		long numeroe = 21474; 	
		System.out.println("Tamaño de un entero " + Long.BYTES);
		System.out.println("Tamaño de un entero " + Long.SIZE);
		System.out.println("Valor maximo " + Long.MAX_VALUE);
		System.out.println("Valor minimo " + Long.MIN_VALUE);
		System.out.println("El valor es " + numeroe);
		
		
		
		
		
	}
}
