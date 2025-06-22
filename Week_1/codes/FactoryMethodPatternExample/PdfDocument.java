package Week_1.codes.FactoryMethodPatternExample;

public class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF document.");
    }
}
