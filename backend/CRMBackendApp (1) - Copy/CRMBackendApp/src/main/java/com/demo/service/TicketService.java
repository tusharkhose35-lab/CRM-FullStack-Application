package com.demo.service;

import java.util.List;

import com.demo.entity.Ticket;

public interface TicketService {
	
	List<Ticket>getAllTicket();
	
	Ticket saveTicket(Ticket ticket);

	void deleteTicket(Long id);

	Ticket getTicketById(Long id);

}
