package com.example.finkishare.web.controller;

import com.example.finkishare.model.Subject;
import com.example.finkishare.service.SubjectService;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000/")
public class SubjectController {

    final private SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @GetMapping("/subjects")
    List<Subject> findSubjects(){
        return subjectService.findAll();
    }

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
    @GetMapping("/data")
    public ResponseEntity<String> getDataJson() {
        try {
            // Load JSON file from resources
            ClassPathResource resource = new ClassPathResource("data/subjects.json");
            InputStream inputStream = resource.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));

            // Read JSON file content into a string
            String jsonString = reader.lines().collect(Collectors.joining("\n"));

            // Return JSON as response
            return ResponseEntity.ok(jsonString);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error reading JSON file");
        }
    }

}
