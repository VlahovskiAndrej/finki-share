package com.example.finkishare.service;

import com.example.finkishare.model.Comment;

import java.util.List;

public interface CommentService {
    public List<Comment> findAllByPostId(Long id);
}
