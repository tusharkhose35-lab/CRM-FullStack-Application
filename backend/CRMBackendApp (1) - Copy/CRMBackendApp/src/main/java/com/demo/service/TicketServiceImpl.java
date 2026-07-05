package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.entity.Ticket;
import com.demo.repository.TicketRepository;

@Service

public class TicketServiceImpl implements TicketService{
	
	@Autowired
	public TicketRepository TicketRepo;

	@Override
	public List<Ticket> getAllTicket() {
		// TODO Auto-generated method stub
		return TicketRepo.findAll();
	}
	@Override
	public Ticket getTicketById(Long id) {
	    return TicketRepo.findById(id).orElse(null);
	}

	@Override
	public Ticket saveTicket(Ticket ticket) {
		// TODO Auto-generated method stub
		return TicketRepo.save(ticket);
	}
	public void deleteTicket(Long id) {
	    TicketRepo.deleteById(id);
	}

}
