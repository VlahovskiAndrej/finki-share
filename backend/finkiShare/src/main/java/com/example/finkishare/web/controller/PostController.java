package com.example.finkishare.web.controller;

import com.example.finkishare.model.Post;
import com.example.finkishare.service.PostService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin("http://localhost:3000/")
@AllArgsConstructor
public class PostController {

    final private PostService postService;

    @Getter
    @AllArgsConstructor
    public class PostRequest {
        private String title;
        private String text;
        private String username;
        private Long subjectId;
    }

    @GetMapping("/posts/{id}")
    List<Post> getPostsById(@PathVariable String id){
        return postService.findAllPostsById(Long.parseLong(id));
    }

    @PostMapping("/posts/add")
    void addNewPost(@RequestBody PostRequest postsRequest){
        
    }

}
