package com.example.finkishare.web.controller;

import com.example.finkishare.model.Comment;
import com.example.finkishare.model.Post;
import com.example.finkishare.model.SubjectDetails;
import com.example.finkishare.service.CommentService;
import com.example.finkishare.service.PostService;
import com.example.finkishare.service.SubjectDetailsService;
import com.example.finkishare.service.SubjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class SubjectController {

    final private SubjectService subjectService;
    final private SubjectDetailsService subjectDetailsService;
    final private PostService postService;
    final private CommentService commentService;

    public SubjectController(SubjectService subjectService, SubjectDetailsService subjectDetailsService, PostService postService, CommentService commentService) {
        this.subjectService = subjectService;
        this.subjectDetailsService = subjectDetailsService;
        this.postService = postService;
        this.commentService = commentService;
    }

//    @GetMapping("/subjects")
//    List<Subject> findSubjects(){
//        return subjectService.findAll();
//    }

//    @GetMapping("/json")
//    public ResponseEntity<JSONObject> getDataJson() {
//        try {
//            // Load JSON file from resources
//            ClassPathResource resource = new ClassPathResource("data/subjects.json");
//            InputStream inputStream = resource.getInputStream();
//            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
//
//            // Parse JSON content into a JSONObject
//            StringBuilder jsonStringBuilder = new StringBuilder();
//            String line;
//            while ((line = reader.readLine()) != null) {
//                jsonStringBuilder.append(line);
//            }
//            String jsonString = jsonStringBuilder.toString();
//            JSONObject jsonObject = new JSONObject(jsonString);
//
//            // Return JSON as response
//            return ResponseEntity.ok(jsonObject);
//        } catch (IOException | JSONException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//        }
//    }

//    Returns as a String, not a true JSON
//    @GetMapping("/data")
//    public ResponseEntity<String> getDataJson() {
//        try {
//            // Load JSON file from resources
//            ClassPathResource resource = new ClassPathResource("data/subjects.json");
//            InputStream inputStream = resource.getInputStream();
//            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
//
//            // Read JSON file content into a string
//            String jsonString = reader.lines().collect(Collectors.joining("\n"));
//
//            // Return JSON as response
//            return ResponseEntity.ok(jsonString);
//        } catch (IOException e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error reading JSON file");
//        }
//    }

    @GetMapping("/subjects")
    List<SubjectDetails> findSubjects(){
        return subjectDetailsService.findAll();
    }

    @PostMapping("/subjects")
    void saveSubject(@RequestBody String body){
        subjectDetailsService.takeSubject(body);
    }

    @GetMapping("/subjects/taken")
    List<SubjectDetails> findTakenSubjects(){
        return subjectDetailsService.findAllTakenSubjects();
    }

    @GetMapping("/posts/{id}")
    List<Post> getPostsById(@PathVariable String id){
        return postService.findAllPostsById(Long.parseLong(id));
    }

    @GetMapping("/comments/{id}")
    List<Comment> getCommentsByPostId(@PathVariable String id){
        return commentService.findAllByPostId(Long.parseLong(id));
    }

}
