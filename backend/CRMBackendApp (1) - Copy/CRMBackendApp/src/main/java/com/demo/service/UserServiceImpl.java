package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.User;
import com.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	public UserRepository userRepo;

	@Override
	public User saveUser(User user) {
		// TODO Auto-generated method stub
		return userRepo.save(user);
	}

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userRepo.findAll();
	}

	@Override
	public User updateUser(Long id, User userDetails) {
		// TODO Auto-generated method stub
		User u = userRepo.findById(id).orElseThrow();
		u.setName(userDetails.getName());
		u.setEmail(userDetails.getEmail());
		u.setCity(userDetails.getCity());
		u.setMobile(userDetails.getMobile());
		u.setPassword(userDetails.getPassword());
		return  userRepo.save(u);
	}

	@Override
	public void deleteUser(Long id) {
		// TODO Auto-generated method stub
		userRepo.deleteById(id);
	}

	@Override
	public User getUserById(Long id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id).orElseThrow();
	}

}
