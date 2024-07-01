
import java.util.Scanner;

public class parentesis {

    public static void main(String[] args) {

        Scanner lector = new Scanner(System.in);
        System.out.println("Mete tu texto");
        String txt = "";
        int num = 20;
        txt = lector.nextLine();
        for (int i = 0; i < txt.length(); i++) {
            if (txt.charAt(i) != '(' || txt.charAt(i) != ')') {
                for (int index = i + 1; index < txt.length(); index++) {
                    if (txt.charAt(i) == txt.charAt(index)) {
                        System.out.println("Doblesitos: " + txt.charAt(index) + " y " + txt.charAt(i));
                        txt = txt.replace(txt.charAt(index), '(');
                    }
                }
            }
            txt=txt.replace(, newChar)
        }
        System.out.println(txt);

    }
}
