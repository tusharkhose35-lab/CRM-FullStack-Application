package com.demo.dto;

import java.util.Set;

import lombok.Data;
@Data
public class RegisterRequest {
	
	    private String username;
	    private String email;
	    private String password;
	    private String city;
	    private String mobile;
	    private String roles; // e.g. ["ROLE_USER"] or ["ROLE_ADMIN"]
	    
	    public RegisterRequest() {}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public String getMobile() {
			return mobile;
		}

		public void setMobile(String mobile) {
			this.mobile = mobile;
		}

		public String getRoles() {
			return roles;
		}

		public void setRoles(String roles) {
			this.roles = roles;
		}
}
	    
	  