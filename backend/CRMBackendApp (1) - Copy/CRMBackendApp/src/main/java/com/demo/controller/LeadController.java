package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Feedback;
import com.demo.entity.Lead;
import com.demo.service.LeadService;

@RestController
@RequestMapping("/api/lead")
@CrossOrigin("*")

public class LeadController {
	
	@Autowired
  public LeadService leadservice;
	
	@GetMapping
	public List<Lead> getAllLead(){
		return leadservice.getAllLead();
		
	}
	@PostMapping
	public Lead saveLead(@RequestBody Lead lead) {
		return leadservice.saveLead(lead);
		
	}
	@PutMapping("/{id}")
	public Lead updateLead(@PathVariable Long id, @RequestBody Lead lead) {
	    return leadservice.updateLead(id, lead);
	}
	@DeleteMapping("/{id}")
	public String deleteLead(@PathVariable Long id) {
	    leadservice.deleteLead(id);
	    return "Lead Deleted Successfully";
}
}
