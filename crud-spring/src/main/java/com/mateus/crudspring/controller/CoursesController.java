package com.mateus.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mateus.crudspring.model.Course;
import com.mateus.crudspring.repository.CouserRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CoursesController {

    private final CouserRepository couserRepository;

    @GetMapping
    public @ResponseBody List<Course> list(){
        return couserRepository.findAll();
    }
}
