package com.example.finkishare.service;

import com.example.finkishare.model.Role;
import com.example.finkishare.model.User;

public interface UserService {
    User create(String username, String email, String password, Role role);

    User findByUsername(String username);
}
