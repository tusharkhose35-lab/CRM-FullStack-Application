package com.demo.entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="crmrole")
@Data @Getter @Setter
@NoArgsConstructor  @AllArgsConstructor
public class Role {

	 @Id
	 @GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable=false ,unique=true)
	private String name;
	
	public Role() {}

	public Role(Object object, String roleName) {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName1() {
		// TODO Auto-generated method stub
		return null;
	}
}
