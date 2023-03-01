package tiposDeDatosVariables;

public class tiposDeDatosVariables {

    public static void main(String[] args) {
    

        byte centigrados = 1;
        double fahrenheit = (centigrados * 1.8) + 32;
        double kelvin = centigrados + 273.15;

        System.out.println("1 centigrado a fahrenheit es " + fahrenheit);

        System.out.println("1 centigrado a kelvin es " + kelvin);

        /*
         * ºF = ºC x 1.8 + 32 formula para convertir grados centigrados a fahrenheit K =
         * ºC + 273.15
         */
        
        byte horasTrabajadas = 8;
        byte pagoPorHora = 10;
        int multiplicacionb = horasTrabajadas * pagoPorHora;
        System.out.println("El sueldo es " + multiplicacionb);
        
        //A esto se le llama casting 
        double num = 1.61;
        int numInt = (int)num; //Asi se cambia de float a int
        long numLong = (long)num; //Asi se hace el cambio a long
        System.out.println("Double " + num);
        System.out.println("Int " + numInt);
        System.out.println("long  " + numLong);
        
      //Conversiones de string

        String cantidad = "15";
        String precio = "115.20";


        int cantEntero = Integer.parseInt(cantidad);  
        double precioDouble = Double.parseDouble(precio);


        System.out.println("El valor total de la compra es:" + (cantEntero * precioDouble));

         

        int edad = 30;
        double estatura = 1.61;
         

        String edadString = String.valueOf (edad);
        String estaturaString = String.valueOf (estatura); //y ahi mismo te da todos los valores que puedes utilizar para hacer conversion 

        System.out.println("Edad:" + edadString + estatura + estaturaString);
        
        int numero1 = 5;
        int numero2 = 7;
        int numero3 =12;
        
        int suma = numero1 + numero2 + numero3; //operador +, esperamos un 24
        int resta = numero1 - numero2 - numero3; //esperamos -14
        int multiplicación = numero1 * numero2 * numero3; //operador *, esperamos 420
        int división = numero2 / numero1; //operador /, esperamos 1,4
        int modulo = numero2 % numero1; //operador %, esperamos un 2
        int incremento = ++numero3;
        int decremento= --numero2;
        
        System.out.println("La suma es: "+ suma);
        System.out.println("La resta es: "+ resta);
        System.out.println("La multiplicación es: "+ multiplicación);
        System.out.println("La división es: "+ división);
        System.out.println("La modulo es: "+ modulo);
        System.out.println("El incremento es: "+ incremento);
        System.out.println("El decremento: "+ decremento);
        
        //Nuevo ejemplo
        float num1 = 3;
        float num2 = 2;
        float num3 = 2;
        float num4 = 5;
        float sumaf = num1 + num2;
        float multiplicaciónf = num3 * num4;
        float divisiónf = sumaf / multiplicaciónf;

        System.out.println(sumaf);
        System.out.println(multiplicaciónf);
        System.out.println(divisiónf);
        
        //Ejercicio 1
        int var1 = 9;
        int var2 = 20;
        int var3 = 2;
        
        int multiplicacion2 = var1 * var2;
        int modulo2 = multiplicacion2 % var3;
        System.out.println(multiplicacion2);
        
        if (modulo2 == 0) {
        	System.out.println("El valor es par ");
        }
        else {
        	System.out.println("El valor es impar");
        }
        
        //Ejercicio 2
        boolean v1 = true;
        boolean v2 = false;
        
        if (v1 == v2) {
        	System.out.println("Son igules ");
        }
        else {
        	System.out.println("Son diferentes ");
        }
        
        //Ejercicio 3
        
        double v3 = 5.6;
        double v4 = 10.5;
        
        if (v3 < v4) {
        	System.out.println("v3 es menor que v4 ");
        }
        else {
        	System.out.println("v3 es mayor que v4");
        }
        
        //Ejercicio 4 far a kelvin y a centigrados
        
        double far = 50;
        double kel = ((far - 32) * 5/9 ) + 273.15;
        System.out.println("El resultado es " + kel);
        
        double cen = (kel - 273.15);
        System.out.println("El resultado es " + cen);
        
        //Ejercicio 5 verificar si un numero es par o impar 
        
        int var4 = 9;
        
        if ((var4 % 2) == 0) {
        	System.out.println("El valor es par ");
        }
        else {
        	System.out.println("El valor es impar");
        }
        
    }
    
  
}

/*
 * datos primitivos
 * Los unicos que llevan letra al final son long, float y double
  
 byte: Sirve para representar un valor numerico de 8 bits (-128 al 127) 
 short:Sirve para representar un valor numerico de 16 bits (-32,768 al 32767)
 int: de tipo entero (sirve para representar un valor numerico de 32 bits (-(-2147483648 al 2147483647)
 )
 long: Sirve para representar un valor numerico ((-9223372036854775808 al 9223372036854775807)
 )y se le agrega una l al final
 float: Sirve para representar un valor numerico de 23 bits (numeros decimales)al final lleva una f
 double: Sirve para representar un valor numerico de 64 bits (numeros decimales) al final lleva una letra d
 boolean:Sirve para representar valores booleanos (0 y  1 o true or false)1 bit
 char: Sirve para representar un caracter de 16 bits, entre comillas simples.*/