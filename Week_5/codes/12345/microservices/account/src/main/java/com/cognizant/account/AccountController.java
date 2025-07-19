package com.cognizant.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class AccountController {
    @GetMapping("/{number}")
    public Account getAccount(@PathVariable String number){
        return new Account(number, "savings", 234343);
    }

    static class Account{
        public String number;
        public String type;
        public double balance;

        public Account(String number, String type, double balance){
            this.number=number;
            this.type=type;
            this.balance=balance;
        }
    }

}
