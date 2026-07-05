package com.demo.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dto.JwtResponse;
import com.demo.dto.LoginRequest;
import com.demo.dto.RegisterRequest;
import com.demo.entity.Role;
import com.demo.entity.User;
import com.demo.jwt.JwtUtil;
import com.demo.repository.RoleRepository;
import com.demo.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired AuthenticationManager authenticationManager;
    @Autowired UserRepository userRepository;
    @Autowired RoleRepository roleRepository;
    @Autowired PasswordEncoder passwordEncoder;
    @Autowired JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword())
        );

        String token = jwtUtil.generateToken(req.getUsername());
        return ResponseEntity.ok(new JwtResponse(token));
    }

//    @PostMapping("/register")
//    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
//
//        if (userRepository.existsByName(req.getUsername())) {
//            return ResponseEntity.badRequest().body("Username is already taken");
//        }
//
//        if (userRepository.existsByEmail(req.getEmail())) {
//            return ResponseEntity.badRequest().body("Email is already in use");
//        }
//
//        User user = new User();
//        user.setName(req.getUsername());
//        user.setEmail(req.getEmail());
//        user.setPassword(passwordEncoder.encode(req.getPassword()));
//
//        Set<Role> roles = new HashSet<>();
//
//        if (req.getRoles() == null || req.getRoles().isEmpty()) {
//
//            Role userRole = roleRepository.findByName("ROLE_USER")
//                    .orElseThrow(() -> new RuntimeException("ROLE_USER not found"));
//
//            roles.add(userRole);
//
//        } else {
//
//            for (String r : req.getRoles()) {
//
//                String roleName = r.startsWith("ROLE_")
//                        ? r
//                        : "ROLE_" + r.toUpperCase();
//
//                Role role = roleRepository.findByName(roleName)
//                        .orElseThrow(() ->
//                                new RuntimeException("Role not found: " + roleName));
//
//                roles.add(role);
//            }
//        }
//
//        user.setRole(roles);
//        userRepository.save(user);
//
//        return ResponseEntity.ok("User registered successfully");
//    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {

        // Check username
        if (userRepository.existsByName(req.getUsername())) {
            return ResponseEntity.badRequest().body("Username is already taken");
        }

        // Check email
        if (userRepository.existsByEmail(req.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already in use");
        }

        // Create new user
        User user = new User();
        user.setName(req.getUsername());
        user.setEmail(req.getEmail());
        
        user.setPassword(passwordEncoder.encode(req.getPassword()));

        // Role Handling (Single Role)
        String roleName;

        if (req.getRoles() == null || req.getRoles().isEmpty()) {
            roleName = "ROLE_USER";   // default role
        } else {
            roleName = req.getRoles().startsWith("ROLE_")
                    ? req.getRoles()
                    : "ROLE_" + req.getRoles().toUpperCase();
        }

        com.demo.entity.Role role = roleRepository.findByName(roleName)
                .orElseThrow(() ->
                        new RuntimeException("Role not found: " + roleName));

        Set<Role> roles = new HashSet<>();
        roles.add(role);

        user.setRole(roles);

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully");
    }


}



