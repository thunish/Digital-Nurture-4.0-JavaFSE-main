package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CalculatorTest {
    Calculator calc;
    @BeforeEach
    void setUp(){
        System.out.println("Setting up...");
        calc=new Calculator();
    }
    @AfterEach
    void tearDown(){
        System.out.println("Cleaning up...");
        calc=null;
    }
    @Test
    void testAddition(){
        int result = calc.add(2, 3);
        assertEquals(5, result);    
    }
    @Test
    void testSubtraction() {
        int result = calc.subtract(10, 4);
        assertEquals(6, result);
    }
}
