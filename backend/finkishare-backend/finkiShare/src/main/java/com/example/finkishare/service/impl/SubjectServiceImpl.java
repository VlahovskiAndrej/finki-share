package com.example.finkishare.service.impl;

import com.example.finkishare.model.Subject;
import com.example.finkishare.repository.SubjectRepository;
import com.example.finkishare.service.SubjectService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectServiceImpl implements SubjectService {

    final private SubjectRepository subjectRepository;

    public SubjectServiceImpl(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    @Override
    public List<Subject> findAll() {
        return subjectRepository.findAll();
    }
}
