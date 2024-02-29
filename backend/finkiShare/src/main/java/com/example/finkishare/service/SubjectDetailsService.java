package com.example.finkishare.service;

import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.model.User;

import java.util.List;

public interface SubjectDetailsService {
    public List<SubjectDetails> findAll();

    public SubjectDetails takeSubject(String name);

    public SubjectDetails takeSubject(String name, User user);

    public List<SubjectDetails> findAllTakenSubjects();
}
