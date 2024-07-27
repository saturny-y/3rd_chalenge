public class classificarGamer {

    public static String classifyPlayer(int victories, int defeats) {
        int balance = victories - defeats;
        String level= "";

        if (balance <= 10) {
            level = "Ferro";
        } else if (balance > 10 && balance <= 20) {
            level = "Bronze";
        } else if (balance > 20 && balance <= 50) {
            level = "Prata";
        } else if (balance > 50 && balance <= 80) {
            level = "Ouro";
        } else if (balance > 80 && balance <= 90) {
            level = "Diamante";
        } else if (balance > 90 && balance <= 100) {
            level = "Lendário";
        } else if (balance > 100 && balance <= 200) {
            level = "Imortal";
        } else {
            level = "Antisocial";
        }
        return "O Antiherói tem um saldo de " + balance + " vitórias e está no nível de " + level;
    }

    public static void main(String[] args) {
        int victories = 66;
        int defeats = 21;
        String result = classifyPlayer(victories, defeats);
        System.out.println(result);
    }
}