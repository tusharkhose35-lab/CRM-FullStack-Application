package com.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name="feedback")
public class Feedback {
	@Id
	@GeneratedValue(strategy  = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String email;
  private String Message;
  private Long mobile;
  
  public Feedback() {}

  public Long getId() {
	return id;
  }

  public void setId(Long id) {
	this.id = id;
  }

  public String getName() {
	return name;
  }

  public void setName(String name) {
	this.name = name;
  }

  public String getEmail() {
	return email;
  }

  public void setEmail(String email) {
	this.email = email;
  }

  public String getMessage() {
	return Message;
  }

  public void setMessage(String message) {
	Message = message;
  }

  public Long getMobile() {
	return mobile;
  }

  public void setMobile(Long mobile) {
	this.mobile = mobile;
  }
}
