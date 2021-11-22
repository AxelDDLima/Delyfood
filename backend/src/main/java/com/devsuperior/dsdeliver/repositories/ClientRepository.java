package com.devsuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
	
	@Query("select obj from Client obj where obj.cpf = :cpf and obj.password = :password")
	public Client buscarLogin(String cpf, String password);
	
}

