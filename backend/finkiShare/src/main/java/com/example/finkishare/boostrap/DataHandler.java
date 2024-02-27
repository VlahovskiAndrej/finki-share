package com.example.finkishare.boostrap;

import com.example.finkishare.model.*;
//import com.example.finkishare.model.Subject;
import com.example.finkishare.repository.CommentRepository;
import com.example.finkishare.repository.PostRepository;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.example.finkishare.repository.UserRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class DataHandler {
    private final JsonReader jsonReader;
    private final SubjectDetailsRepository subjectDetailsRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataHandler(JsonReader jsonReader, SubjectDetailsRepository subjectDetailsRepository, PostRepository postRepository, CommentRepository commentRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.jsonReader = jsonReader;
        this.subjectDetailsRepository = subjectDetailsRepository;
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @PostConstruct
    public void init() {

//        List<User> users = new ArrayList<>();
//        if (userRepository.count() == 0) {
//            users.add(
//                    new User(
//                            "andrej",
//                            passwordEncoder.encode("1907"),
//                            "andrej@gmail.com",
//                            Role.ROLE_USER
//                    ));
//            users.add(
//                    new User(
//                            "admin",
//                            passwordEncoder.encode("admin"),
//                            "admin@gmail.com",
//                            Role.ROLE_ADMIN
//                    )
//            );
//            userRepository.saveAll(users);
//        }



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