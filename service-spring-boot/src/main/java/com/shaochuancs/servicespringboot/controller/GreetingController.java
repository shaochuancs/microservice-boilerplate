package com.shaochuancs.servicespringboot.controller;

import com.shaochuancs.servicespringboot.ServiceConfig;
import com.shaochuancs.servicespringboot.db.AuthCodeRepository;
import com.shaochuancs.servicespringboot.model.AuthCode;
import com.shaochuancs.servicespringboot.model.Greeting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

//    @Autowired
//    ServiceConfig config;

    @Autowired
    AuthCodeRepository repository;

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        repository.save(new AuthCode("Hello"));
        List<AuthCode> codes = repository.findAll();
        return new Greeting(counter.incrementAndGet(), String.format(template, name + codes.size()));
    }
}
