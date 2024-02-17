package com.example.finkishare.service;

import com.example.finkishare.model.SubjectDetails;

import java.util.List;

public interface SubjectDetailsService {
    public List<SubjectDetails> findAll();

    public SubjectDetails takeSubject(String name);

    public List<SubjectDetails> findAllTakenSubjects();
}
