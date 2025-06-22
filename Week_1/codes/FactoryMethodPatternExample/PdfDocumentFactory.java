package Week_1.codes.FactoryMethodPatternExample;

public class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument(){
        return new PdfDocument();
    }
}
