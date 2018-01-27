package com.todoapp.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todoapp.demo.model.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task, Long> {

}
