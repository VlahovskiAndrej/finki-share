package com.example.finkishare.service.impl;

import com.example.finkishare.model.Post;
import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.repository.PostRepository;
import com.example.finkishare.repository.SubjectDetailsRepository;
import com.example.finkishare.service.PostService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    final private PostRepository postRepository;
    final private SubjectDetailsRepository subjectDetailsRepository;

    public PostServiceImpl(PostRepository postRepository, SubjectDetailsRepository subjectDetailsRepository) {
        this.postRepository = postRepository;
        this.subjectDetailsRepository = subjectDetailsRepository;
    }

    @Override
    public List<Post> findAllPostsById(Long id) {
        SubjectDetails s = subjectDetailsRepository.findById(id).orElse(null);
        return postRepository.findAllBySubjectDetails(s);
    }
}
