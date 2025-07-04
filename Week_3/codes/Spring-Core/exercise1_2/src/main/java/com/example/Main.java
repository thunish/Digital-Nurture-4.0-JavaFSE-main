package com.example;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook("Effective Java");
    }
}


// package com.example;

// import com.library.service.BookService;
// import org.springframework.context.ApplicationContext;
// import org.springframework.context.support.ClassPathXmlApplicationContext;

// public class Main {
//     public static void main(String[] args) {
//         ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

//         BookService bookService = (BookService) context.getBean("bookService");
//         bookService.addBook("The Lord of the Rings");
//     }
// }