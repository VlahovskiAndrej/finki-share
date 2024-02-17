package com.example.finkishare.service.impl;

import com.example.finkishare.model.Comment;
import com.example.finkishare.model.Post;
import com.example.finkishare.repository.CommentRepository;
import com.example.finkishare.repository.PostRepository;
import com.example.finkishare.service.CommentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    final private CommentRepository commentRepository;
    final private PostRepository postRepository;

    public CommentServiceImpl(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    @Override
    public List<Comment> findAllByPostId(Long id) {
        Post post = postRepository.findById(id).orElse(null);
        return commentRepository.findAllByPost(post);
    }
}
