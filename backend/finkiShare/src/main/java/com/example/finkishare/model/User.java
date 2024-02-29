package com.example.finkishare.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity(name = "finkishare_user")
@Data
public class User {

    @Id
    private String username;

    private String email;

    private String password;

    private String avatarUrl;

    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToMany
    private List<SubjectDetails> takenSubjects;

    public User() {}

    public User(String username, String email, String password, Role role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatarUrl = "";
        this.role = role;
    }

    public void takeSubject(SubjectDetails subject){
        if (takenSubjects.contains(subject))
            takenSubjects.remove(subject);
        else
            takenSubjects.add(subject);
    }
}
