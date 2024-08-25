package feb.src.components;

import java.util.Scanner;

public class Palabras {

    public static void main(String[] args) {
        String alfabeto = "qwertyuioplkjhg";
        Scanner scann = new Scanner(System.in);
        System.out.println("¿Cuantas palabras necesitas?");
        int s = scann.nextInt();
        for (int index = 0; index < s; index++) {
            for (int i = 0; i < 4; i++) {
                System.out.print(alfabeto.charAt((int) (Math.random() * 15)));
            }
            System.out.println();
        }
    }
}
