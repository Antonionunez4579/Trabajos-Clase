package ciclos.forwhiledo;

public class UsoDeFor {

	public void CicloFor() {
		for (int i = 0; i <= 10; i++) { // El for contiene inicio prueba logica y el incremento
			System.out.println("Valor de iterador es " + i);
		}

	}
	
	public void letrasFor() {
		for (int i = 'A'; i <= 'z' ; i++) {
			System.out.print( i + ", " );
			char letra = (char) i;
			System.out.println();
			System.out.print(letra + ", ");
		}

	}
	
	
}
