package ciclos.control;

import java.util.Scanner;

import ciclos.forwhiledo.UsoWhile;
import ciclos.forwhiledo.CicloDo;
import ciclos.forwhiledo.UsoDeFor;
public class DoSwitch {

	public void Controlador() {
		Scanner s = new Scanner(System.in);
		Menus mp = new Menus();
		UsoWhile uw =  new UsoWhile ();
		UsoDeFor fo = new UsoDeFor ();
		CicloDo Do = new CicloDo ();
		int opcion = 0;
		
		do {
			mp.MenuPrincipal();
			System.out.println();
			System.out.print("Introduce una opcion ");
			opcion = s.nextInt();
			
			switch (opcion) {
			case 1:
				uw.CicloW();
				break;
			case 2:
				uw.CentinelaW();
				break;
			case 3:
				uw.BanderaW();
				break;
			case 4:
				fo.CicloFor();
				break;
			case 5:
				fo.letrasFor();
				break;
			case 6:
				Do.DigitosDo();
				break;
			default:
				break;
			}
			
		} while (opcion > 0 && opcion < 7);
		System.out.println("Fin del programa");
	}
}
