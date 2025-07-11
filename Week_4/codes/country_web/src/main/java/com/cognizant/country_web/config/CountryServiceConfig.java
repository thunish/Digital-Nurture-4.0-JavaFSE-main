package com.cognizant.country_web.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cognizant.country_web.model.Country;

@Configuration
public class CountryServiceConfig {

    @Bean(name = "country")
    public Country countryIndia() {
        return new Country("IN", "India");
    }
}
