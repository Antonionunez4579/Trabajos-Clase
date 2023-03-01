package control;

import java.util.Scanner;

public class OrdenTres {
	Scanner dato = new Scanner(System.in);
	
	public void Ordenar() {
		// TODO Auto-generated method stub
		System.out.print("Introcuce el primer numero");
		int num1 = dato.nextInt();
		System.out.print("Introcuce el segundo numero");
		int num2 = dato.nextInt();
		System.out.print("Introcuce el tercer numero");
		int num3 = dato.nextInt();
		
		if (num1 > num2 && num1 > num3) {  //Compara si el num1 es mayor que num2 y que si num1 es mayor que num3 si esto es cierto pasara a comparar la siguiente sentencia
            if (num2 > num3) { //Aqui solo compara  num2 con num3 ya que num1 se supone que es mayor en la sentencia anterior  
                System.out.println(num1 + ", " + num2 + ", " + num3); //En las siguientes lineas se muestran las otras posibles conbinaciones  
            } else {
                System.out.println(num1 + ", " + num3 + ", " + num2);
            }
        } else if (num2 > num1 && num2 > num3) {
            if (num1 > num3) {
                System.out.println(num2 + ", " + num1 + ", " + num3);
            } else {
                System.out.println(num2 + ", " + num3 + ", " + num1);
            }
        } else if (num3 > num1 && num3 > num2) {
            if (num1 > num2) {
                System.out.println(num3 + ", " + num1 + ", " + num2);
            } else {
                System.out.println(num3 + ", " + num2 + ", " + num1);
            }
	}
	
}
}
