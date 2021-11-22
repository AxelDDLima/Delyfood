package com.devsuperior.dsdeliver.dto;

import java.io.Serializable;

import com.devsuperior.dsdeliver.entities.Client;

public class ClientDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String lastName;
	private String surName;
	private String email;
	private String cpf;
	private String password;
	

	public ClientDTO() {}

	public ClientDTO(Long id, String lastName, String surName, String email, String cpf, String password) {
		this.id = id;
		this.lastName = lastName;
		this.surName = surName;
		this.email = email;
		this.cpf = cpf;
		this.password = password;
	}
	
	public ClientDTO(Client entity) {
		id = entity.getId();
		lastName = entity.getLastName();
		surName = entity.getSurname();
		email = entity.getEmail();
		cpf = entity.getCpf();
		password = entity.getPassword();
	}
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSurName() {
		return surName;
	}

	public void setSurName(String surName) {
		this.surName = surName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
