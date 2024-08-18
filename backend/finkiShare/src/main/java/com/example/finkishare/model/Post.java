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
    private Long score;

    @ManyToOne
    private SubjectDetails subjectDetails;

    @ManyToOne
    private User author;

    public Post() {
    }

    public Post(String title, String description, LocalDateTime timeStamp, SubjectDetails subjectDetails, User author) {
        this.title = title;
        this.description = description;
        this.timeStamp = timeStamp;
        this.subjectDetails = subjectDetails;
        this.author = author;
        this.score = 0L;
    }

    public Post increaseScore(){
        this.score += 1;
        return this;
    }

    public Post decreaseScore(){
        this.score -= 1;
        return this;
    }
}
