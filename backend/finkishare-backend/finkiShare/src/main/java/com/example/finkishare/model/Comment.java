package com.example.finkishare.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    public Comment() {}

    public Comment(String text, LocalDateTime timeStamp) {
        this.text = text;
        this.timeStamp = timeStamp;
    }
}
