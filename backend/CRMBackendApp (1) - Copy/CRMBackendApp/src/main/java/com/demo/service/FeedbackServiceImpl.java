package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.Feedback;
import com.demo.repository.FeedbackRepository;
@Service
public class FeedbackServiceImpl implements FeedbackService {

	
	@Autowired
	public FeedbackRepository feedbackRepo;
	@Override
	public List<Feedback> getAllFeedback() {
		// TODO Auto-generated method stub
		return feedbackRepo.findAll();
	}

	@Override
	public Feedback saveFeedback(Feedback feedback) {
		// TODO Auto-generated method stub
		return feedbackRepo.save(feedback);
	}

}
