package com.example.finkishare.repository;

import com.example.finkishare.model.SubjectDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectDetailsRepository extends JpaRepository<SubjectDetails, Long> {
    SubjectDetails findByName(String name);

    List<SubjectDetails> findAllByIsTakenTrue();
}
