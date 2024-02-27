package com.example.finkishare.web.controller;

import com.example.finkishare.model.Credentials;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
public class LoginController {

    @Getter
    @AllArgsConstructor
    static class AuthenticationResponse {
        private final boolean authenticated;
        private final String username;
    }
    @GetMapping("/check-login")
    public AuthenticationResponse checkAuthentication(Authentication authentication) {
        if (authentication != null && authentication.isAuthenticated()) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String username = userDetails.getUsername();
            return new AuthenticationResponse(true, username);
        } else {
            return new AuthenticationResponse(false, null);
        }
    }




}
