package com.example.finkishare.web.controller;

import com.example.finkishare.model.Comment;
import com.example.finkishare.service.CommentService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/comments/{id}")
    List<Comment> getCommentsByPostId(@PathVariable String id){
        return commentService.findAllByPostId(Long.parseLong(id));
    }
}
