import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
import { TaskService} from '../services/task.service'; 
import { Task } from '../services/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  //tasks: Task[] = [];
  displayedColumns = ['id', 'name', 'desc', 'status','actions'];
  dataSource=null;
  constructor(private router: Router, private taskService:TaskService) { 
  
    this.taskService.getTasks().subscribe(
      tasks => {
        this.dataSource = new MatTableDataSource<Task>(tasks);
      },
      error => console.log(error) 
    );
      
  }
   
  ngOnInit() {

  }
  addTask(){
    this.router.navigate(['./add-task']);
  }

  completeTask(id:number){
    console.log(id);
    this.router.navigate(['./task-list']);
  }
  deleteTask(id:number) {
    console.log(id);
    this.router.navigate(['./task-list']);
  }
  
}

