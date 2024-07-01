
import java.util.Scanner;

public class Primer {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Ingresa una palabra: ");
        String palabra = scan.nextLine().toLowerCase();
        boolean esPalindromo = true;
        for (int i = 0; i < palabra.length() / 2; i++) {
            if (palabra.charAt(i) != palabra.charAt(palabra.length() - i - 1)) {
                esPalindromo = false;
                break;
            }
        }
        if (esPalindromo) {
            System.out.println("Si es palindromo.");
        } else {
            System.out.println("No es palindromo.");
        }
    }
}
