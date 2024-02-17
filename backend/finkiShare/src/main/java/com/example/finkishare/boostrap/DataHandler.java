package com.example.finkishare.boostrap;

import com.example.finkishare.model.Comment;
import com.example.finkishare.model.Post;
import com.example.finkishare.model.Subject;
import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.repository.CommentRepository;
import com.example.finkishare.repository.PostRepository;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.example.finkishare.repository.SubjectRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class DataHandler {
    private final SubjectRepository subjectRepository;
    private final JsonReader jsonReader;
    private final SubjectDetailsRepository subjectDetailsRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    public DataHandler(SubjectRepository subjectRepository, JsonReader jsonReader, SubjectDetailsRepository subjectDetailsRepository, PostRepository postRepository, CommentRepository commentRepository) {
        this.subjectRepository = subjectRepository;
        this.jsonReader = jsonReader;
        this.subjectDetailsRepository = subjectDetailsRepository;
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
    }


    @PostConstruct
    public void init() {

        List<Subject> subjectList = new ArrayList<>();

        subjectList.add(new Subject("Оперативни системи", "opiss.....", 1));
        subjectList.add(new Subject("Компјутерски мрежи", "opiss.....", 2));
        subjectList.add(new Subject("Бизнис и менаџмент", "opiss.....", 3));
        subjectList.add(new Subject("Вовед во компјутерските науки", "opiss.....", 4));
        subjectList.add(new Subject("Професионални вештини", "opiss.....", 5));
        subjectList.add(new Subject("Структурно програмирање", "opiss.....", 5));
        subjectList.add(new Subject("Математика 1", "opiss.....", 5));
        subjectList.add(new Subject("Архитектура и организација на компјутери", "opiss.....", 5));
        subjectList.add(new Subject("Објектно-ориентирано програмирање", "opiss.....", 5));
        subjectList.add(new Subject("Математика 2", "opiss.....", 5));
        subjectList.add(new Subject("Објектно ориентирана анализа и дизајн", "opiss.....", 5));
        subjectList.add(new Subject("Алгоритми и податочни структури", "opiss.....", 5));
        subjectRepository.saveAll(subjectList);

        List<SubjectDetails> subjectDetailsList = jsonReader.readAndSaveJson("data/subjects.json");
        subjectDetailsRepository.saveAll(subjectDetailsList);

        List<Post> posts = new ArrayList<>();
        List<Comment> comments;

        Random random = new Random();
        for (int i=0; i<subjectDetailsList.size()-1; i++){
            comments = new ArrayList<>();
            for (int j = 0; j < random.nextInt(7); j++) {
                String title = "Title " + (j + 1);
                String description = "Description for Post " + (j + 1);
                LocalDateTime timeStamp = LocalDateTime.now().minusDays(j);

                Post post = new Post(title, description, timeStamp, subjectDetailsRepository.findById((long) i).orElse(null));
                posts.add(post);

                for (int c = 0; c < random.nextInt(7); c++){
                    String text = "Comment " + (c + 1);
                    Comment comment = new Comment(text, timeStamp, post);
                    comments.add(comment);
                }
            }
            commentRepository.saveAll(comments);
        }

        postRepository.saveAll(posts);
    }
}