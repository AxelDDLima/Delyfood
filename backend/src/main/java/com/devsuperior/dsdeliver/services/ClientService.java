package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.ClientDTO;
import com.devsuperior.dsdeliver.entities.Client;
import com.devsuperior.dsdeliver.repositories.ClientRepository;

@Service
public class ClientService {
	
	@Autowired
	private ClientRepository repository;
	
	@Transactional
	public List<ClientDTO> findAll(){
		List<Client> list = repository.findAll();
		return list.stream().map(x -> new ClientDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public ClientDTO insert(ClientDTO dto) {
		Client client = new Client(null, dto.getLastName(), dto.getSurName(), dto.getEmail(), dto.getCpf(), dto.getPassword());
		
		client = repository.save(client);
		return new ClientDTO(client);
	}
	
	public ClientDTO loginClient(String cpf, String password) {
		Client clientLogin = repository.buscarLogin(cpf, password);
		
		return new ClientDTO(clientLogin);
	}
}
