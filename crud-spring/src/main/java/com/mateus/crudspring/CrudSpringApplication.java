package com.mateus.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.mateus.crudspring.model.Course;
import com.mateus.crudspring.repository.CouserRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CouserRepository couserRepository) {
		return args -> {
			couserRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular");
			c.setCategory("Front-end");

			couserRepository.save(c);
		};
	}

}
