package com.example.finkishare.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String text;
    private LocalDateTime timeStamp;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Post post;

    public Comment() {}

    public Comment(String text, LocalDateTime timeStamp, Post post) {
        this.text = text;
        this.timeStamp = timeStamp;
        this.post = post;
    }
}
