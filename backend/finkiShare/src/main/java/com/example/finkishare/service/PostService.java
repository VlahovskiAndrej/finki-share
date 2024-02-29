package com.example.finkishare.service;

import com.example.finkishare.model.Post;
import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.model.User;

import java.time.LocalDateTime;
import java.util.List;

public interface PostService {

    public List<Post> findAllPostsById(Long id);

    public Post createPost(String title, String text, SubjectDetails subjectDetails, User author);

}
