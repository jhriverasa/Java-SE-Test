package com.jhriverasa.app.controllers;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path = "/")
public class ReactController {

    @GetMapping("/")
    public String reactIndex() {
        System.out.println("Serving React App");
        return "index.html";
    }
}
