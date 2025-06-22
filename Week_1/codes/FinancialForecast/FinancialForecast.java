package Week_1.codes.FinancialForecast;

// Let is assume that the future value if year n is 10% more than the current year, which is calculated using reccursive approach

public class FinancialForecast {

    public static double futureValue(int year, double currentValue, double growthRate) {
        if (year == 0) return currentValue;
        return futureValue(year - 1, currentValue, growthRate) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initialValue = 1000.0;
        double annualGrowthRate = 0.1; 
        int years = 5;

        double result = futureValue(years, initialValue, annualGrowthRate);
        System.out.printf("Future value after %d years = %.2f%n", years, result);
    }
}

