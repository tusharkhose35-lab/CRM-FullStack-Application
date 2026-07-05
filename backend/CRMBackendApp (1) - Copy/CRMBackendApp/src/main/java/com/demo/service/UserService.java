package com.demo.service;

import java.util.List;

import com.demo.entity.User;

public interface UserService {
User saveUser(User user);

List<User>  getAllUser();

User updateUser(Long id , User userDetails );
void deleteUser(Long id);

User getUserById(Long id);
}
