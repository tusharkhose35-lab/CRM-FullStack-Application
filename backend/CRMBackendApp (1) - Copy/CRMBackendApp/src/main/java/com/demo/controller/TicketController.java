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

import com.demo.entity.Ticket;
import com.demo.service.TicketService;

@RestController
@RequestMapping("/api/Ticket")
@CrossOrigin("*")
public class TicketController {
	
	@Autowired
	public TicketService ticketservice;
	
	@GetMapping
	public List<Ticket> getAllTicket(){
		return ticketservice.getAllTicket();
	}
	@GetMapping("/{id}")
	public Ticket getTicketById(@PathVariable Long id) {
	    return ticketservice.getTicketById(id);
	}
	
	@PostMapping()
	public Ticket saveticket(@RequestBody Ticket ticket) {
		return ticketservice.saveTicket(ticket);
	}
	@DeleteMapping("/{id}")
	public void deleteTicket(@PathVariable Long id) {
	    ticketservice.deleteTicket(id);
	}
	@PutMapping("/{id}")
	public Ticket updateTicket(@PathVariable Long id,
	                           @RequestBody Ticket ticket) {

	    Ticket existing = ticketservice.getTicketById(id);

	    existing.setTitle(ticket.getTitle());
	    existing.setBody(ticket.getBody());
	    existing.setContact(ticket.getContact());
	    existing.setEmail(ticket.getEmail());

	    return ticketservice.saveTicket(existing);
	}

}
