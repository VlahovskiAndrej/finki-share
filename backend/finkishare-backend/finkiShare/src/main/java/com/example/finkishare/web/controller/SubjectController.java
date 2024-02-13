package com.example.finkishare.web.controller;

import com.example.finkishare.model.Subject;
import com.example.finkishare.service.SubjectService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class SubjectController {

    final private SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @GetMapping("/subjects")
    List<Subject> findSubjects(){
        return subjectService.findAll();
    }

}
