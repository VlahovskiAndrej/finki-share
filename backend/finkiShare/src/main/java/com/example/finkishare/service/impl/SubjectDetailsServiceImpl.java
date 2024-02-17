package com.example.finkishare.service.impl;

import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.example.finkishare.service.SubjectDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectDetailsServiceImpl implements SubjectDetailsService {

    final private SubjectDetailsRepository subjectDetailsRepository;

    public SubjectDetailsServiceImpl(SubjectDetailsRepository subjectDetailsRepository) {
        this.subjectDetailsRepository = subjectDetailsRepository;
    }

    @Override
    public List<SubjectDetails> findAll() {
        return subjectDetailsRepository.findAll();
    }

    @Override
    public SubjectDetails takeSubject(String name) {
        System.out.println(name);
        SubjectDetails s =  subjectDetailsRepository.findByName(name.replace("\"", ""));
        s.setIsTaken(!s.getIsTaken());
        return subjectDetailsRepository.save(s);
    }

    @Override
    public List<SubjectDetails> findAllTakenSubjects() {
        return subjectDetailsRepository.findAllByIsTakenTrue();
    }
}
