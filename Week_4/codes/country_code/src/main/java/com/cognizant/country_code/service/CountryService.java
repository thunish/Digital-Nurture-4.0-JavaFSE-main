package com.cognizant.country_code.service;

import org.springframework.stereotype.Service;

import com.cognizant.country_code.model.Country;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    private final List<Country> countryList = new ArrayList<>();

    public CountryService() {
        // hardcoded for simplicity; ideally load from DB or file
        countryList.add(new Country("IN", "India"));
        countryList.add(new Country("US", "United States"));
        countryList.add(new Country("UK", "United Kingdom"));
    }

    public Country getCountry(String code) {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}