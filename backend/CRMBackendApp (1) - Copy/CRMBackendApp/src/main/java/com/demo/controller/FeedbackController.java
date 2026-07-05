package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Feedback;
import com.demo.service.FeedbackService;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin("*")
public class FeedbackController {

	@Autowired
	public FeedbackService feedbackservice;
	
	@GetMapping
	public List<Feedback> getAllFeedback(){
		return feedbackservice.getAllFeedback();
		
	}
	@PostMapping
	public Feedback saveFeedback(@RequestBody Feedback feedback) {
		return feedbackservice.saveFeedback(feedback);
	}
}
