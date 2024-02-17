package com.example.finkishare.service;

import com.example.finkishare.model.Post;

import java.util.List;

public interface PostService {

    public List<Post> findAllPostsById(Long id);
}
