package com.example.finkishare.boostrap;

import com.example.finkishare.model.Post;
import com.example.finkishare.model.Subject;
import com.example.finkishare.repository.CommentRepository;
import com.example.finkishare.repository.PostRepository;
import com.example.finkishare.repository.SubjectRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataHandler {

    private final PostRepository postRepository;
    private final SubjectRepository subjectRepository;
    private final CommentRepository commentRepository;

    public DataHandler(PostRepository postRepository, SubjectRepository subjectRepository, CommentRepository commentRepository) {
        this.postRepository = postRepository;
        this.subjectRepository = subjectRepository;
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
    }
}