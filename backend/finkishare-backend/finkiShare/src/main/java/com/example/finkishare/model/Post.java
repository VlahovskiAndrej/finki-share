package com.example.finkishare.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private LocalDateTime timeStamp;

    @OneToMany
    private List<Comment> commentList;

    public Post() {
    }

    public Post(String title, String description, LocalDateTime timeStamp) {
        this.title = title;
        this.description = description;
        this.timeStamp = timeStamp;
    }
}
