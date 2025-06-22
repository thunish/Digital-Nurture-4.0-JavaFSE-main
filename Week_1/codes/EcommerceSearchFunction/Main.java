package Week_1.codes.EcommerceSearchFunction;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Apparel"),
            new Product(3, "Book", "Education"),
            new Product(4, "Phone", "Electronics")
        };

        String searchProductName = "Product99999";

        long linearStart = System.nanoTime();
        Product result1 = SearchAlgorithms.linearSearch(products, searchProductName);
        long linearEnd = System.nanoTime();
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));
        System.out.println("Linear Search Time: " + (linearEnd - linearStart) / 1_000_000.0 + " ms");

        Arrays.sort(products, (a, b) -> a.productName.compareToIgnoreCase(b.productName));

        long binaryStart = System.nanoTime();
        Product result2 = SearchAlgorithms.binarySearch(products, searchProductName );
        long binaryEnd = System.nanoTime();
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
        System.out.println("Binary Search Time: " + (binaryEnd - binaryStart) / 1_000_000.0 + " ms");
    }
}
