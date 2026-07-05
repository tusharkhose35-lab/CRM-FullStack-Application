package com.demo.security;

import java.util.Collection;
import java.util.stream.Collectors;

import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.demo.entity.User;
import com.demo.repository.UserRepository;
@Service
public class CustomeUserDetailService implements UserDetailsService {
	
	@Autowired
	UserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		User u = userRepo.findByName(username).orElseThrow();
		var authorities = u.getRole().stream().map(r  ->new SimpleGrantedAuthority(r.getName()))
				.collect(Collectors.toSet());
	  return new org.springframework.security.core.userdetails.User(u.getName(), u.getPassword(), authorities);
	}

	

}
