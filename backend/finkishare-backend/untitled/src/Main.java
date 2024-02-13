import java.util.Comparator;

class Human {

    public String name;
    static String color;

    public Human(String name) {
        this.name = name;
    }

    static public String getAge(){
        return "";
    }

    public String printName() {
        return null;
    }

    @Override
    public boolean equals(Object obj) {
        return this.name.equals(((Human) obj).name);
    }
}

class Man extends Human{
    public Man(String name) {
        super(name);
    }

    public String printName(){
        return "името е: " + name + " , maz";
    }

}

class Woman extends Human{
    public Woman(String name) {
        super(name);
    }

    public String printName(){
        return "името е: " + name + " , zena";
    }

}

class SingletonExample{

    private SingletonExample object = null;
    private SingletonExample() {
    }

    public SingletonExample getInstance() {
        if (object == null)
            object = new SingletonExample();
        return object;
    }
}


public class Main {
    public static void main(String[] args) {
        Human m = new Man("Andrej");
        Human w = new Woman("Andrej");
        System.out.println(w.equals(m));
    }
}
