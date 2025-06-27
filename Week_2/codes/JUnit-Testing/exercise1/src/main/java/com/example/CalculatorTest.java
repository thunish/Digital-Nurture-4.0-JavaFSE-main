package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {
    Calculator calc=new Calculator();
    @Test
    void testAdd() {
        assertEquals(5, calc.add(2, 3));
    }
}
