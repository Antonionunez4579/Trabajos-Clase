package ciclos.control;

import java.util.Scanner;

import ciclos.forwhiledo.UsoWhile;

public class DoSwitch {

	public void Controlador() {
		Scanner s = new Scanner(System.in);
		Menus mp = new Menus();
		UsoWhile uw =  new UsoWhile ();
		int opcion = 0;
		
		do {
			mp.MenuPrincipal();
			System.out.print("Introduce una opcion ");
			opcion = s.nextInt();
			
			switch (opcion) {
			case 1:
				uw.CicloW();
				break;
			case 2:
				uw.CicloW();
				break;
			case :
				uw.CicloW();
				break;
			default:
				break;
			}
			
		} while (opcion > 0 && opcion < 7);

	}
}
