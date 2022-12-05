package com.shaochuancs.servicespringbootanother.controller;

import com.shaochuancs.servicespringbootanother.ServiceConfig;
import com.shaochuancs.servicespringbootanother.model.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {
    private static final String template = "Hello, %s! And this is from echo: %s";
    private final AtomicLong counter = new AtomicLong();

    @Autowired
    ServiceConfig config;

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        ResponseEntity<Greeting> restExchange = restTemplate.exchange("http://service-spring-boot/greeting?name=echo", HttpMethod.GET, null, Greeting.class);
        return new Greeting(counter.incrementAndGet(), String.format(template, name + " from " + config.getHostname(), Objects.requireNonNull(restExchange.getBody()).getContent()));
    }
}
