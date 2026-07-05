package com.demo.service;

import java.util.List;

import com.demo.entity.Feedback;

public interface FeedbackService {
	//reading all records
 List<Feedback> getAllFeedback();
 
 //save feedback
 Feedback saveFeedback(Feedback feedback);
}
