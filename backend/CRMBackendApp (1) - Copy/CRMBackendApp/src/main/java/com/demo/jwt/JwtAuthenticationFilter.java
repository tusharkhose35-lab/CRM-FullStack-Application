package com.demo.jwt;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.demo.security.CustomeUserDetailService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends OncePerRequestFilter {
   
	 public JwtUtil jwtUtil;
	 
	 public CustomeUserDetailService  customeService;
	 
	 public JwtAuthenticationFilter(JwtUtil jwtUtil, CustomeUserDetailService customeService) {
		this.jwtUtil = jwtUtil;
		this.customeService = customeService;
	}
 
	 
	 private String parseJwt(HttpServletRequest request) {
		 String headerAuth  = request.getHeader("Authorization");
		 if(StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer")) {
			 return headerAuth.substring(7);
		 }
		 
		 return null;
	 }

  @Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			String jwt = parseJwt(request);
			if((jwt !=null) && (jwtUtil.validateJwt(jwt))) {
				String username = jwtUtil.getUsernameFromJwt(jwt);
				UserDetails userDetails = customeService.loadUserByUsername(username);
				UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);

				}
		}
			catch(Exception e) {
				e.printStackTrace();
			}
		filterChain.doFilter(request, response);
		}
	}


