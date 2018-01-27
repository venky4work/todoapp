/**
 * 
 */
package com.todoapp.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todoapp.demo.model.Task;
import com.todoapp.demo.repo.TaskRepo;

/**
 * @author Venky
 *
 */
@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class TaskController {
	
	 @Autowired
	 TaskRepo taskRepo;
	 
	 @GetMapping("/tasks")
	 public List<Task> getAllTasks() {
	     return taskRepo.findAll();
	 }
	 
	 @PutMapping("/task/{id}")
	 public ResponseEntity<Task> updateTask(@PathVariable(value = "id") Long taskId, 
	                                        @RequestBody Task taskDetails) {
		 Task task = taskRepo.findOne(taskId);
	     if(task == null) {
	         return ResponseEntity.notFound().build();
	     }
         task.setTaskStatus(taskDetails.getTaskStatus());
	     Task updatedNote = taskRepo.save(task);
	     return ResponseEntity.ok(updatedNote);
	 }
	 
	 @DeleteMapping("/task/{id}")
	 public ResponseEntity<Task> deleteTask(@PathVariable(value = "id") Long taskId) {
		 Task task = taskRepo.findOne(taskId);
	     if(task == null) {
	         return ResponseEntity.notFound().build();
	     }

	     taskRepo.delete(task);
	     return ResponseEntity.ok().build();
	 }
	 
	 @PostMapping("/task")
	 public Task createTask(@RequestBody Task task) {
	     return taskRepo.save(task);
	 }


}
