package com.mateus.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mateus.crudspring.model.Course;

@Repository
public interface CouserRepository extends JpaRepository<Course, Long>{
    
}
