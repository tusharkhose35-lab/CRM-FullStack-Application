package com.demo.service;

import java.util.List;

import com.demo.entity.Lead;

public interface LeadService {
	
	List<Lead> getAllLead();
	
	Lead saveLead(Lead lead);
	void deleteLead(Long id);
	
	Lead updateLead(Long id, Lead lead);

	
	

}
