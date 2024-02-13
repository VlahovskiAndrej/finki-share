package com.example.finkishare.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String details;
    private int term;

    @OneToMany
    private List<Post> postList;

    public Subject() {
    }

    public Subject(String name, String details, int term) {
        this.name = name;
        this.details = details;
        this.term = term;
    }
}
