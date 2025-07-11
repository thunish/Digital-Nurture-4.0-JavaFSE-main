package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {

    public static void displayDate() {
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");

        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

        try {
            Date parsedDate = format.parse("31/12/2018");

            System.out.println("Parsed Date: " + parsedDate);
        } catch (Exception e) {
            System.out.println("Error parsing date: " + e.getMessage());
        }
    }
    public static void main(String[] args) {
        displayDate();
        System.out.println("Hello world!");
    }
}