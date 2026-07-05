package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.demo.entity.Lead;
import com.demo.repository.LeadRepository;

@Service
public class LeadServiceImpl implements LeadService {
	
	@Autowired
	public LeadRepository LeadRepo;

	@Override
	public List<Lead> getAllLead() {
		// TODO Auto-generated method stub
		return LeadRepo.findAll();
	}

	@Override
	public Lead saveLead(Lead lead) {
		// TODO Auto-generated method stub
		return LeadRepo.save(lead);
	}
	@Override
	public void deleteLead(Long id) {
	    
		LeadRepo.deleteById(id);
	}
	@Override
	public Lead updateLead(Long id, Lead lead) {

	    Lead existingLead = LeadRepo.findById(id)
	            .orElseThrow(() -> new RuntimeException("Lead Not Found"));

	    existingLead.setName(lead.getName());
	    existingLead.setEmail(lead.getEmail());
	    existingLead.setContact(lead.getContact());
	
	    existingLead.setStatus(lead.getStatus());

	    return LeadRepo.save(existingLead);
	}

}
