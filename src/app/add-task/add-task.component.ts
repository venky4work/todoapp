import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormGroup,FormBuilder} from '@angular/forms';
import {Task} from '../services/task.model';
import { TaskService} from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task:Task = new Task();
  taskGroup: FormGroup;
  constructor(private router: Router,private taskService:TaskService,private fb: FormBuilder) { }

  ngOnInit() {
    this.taskGroup = this.fb.group({
      tname : ['',Validators.required],
      tdesc : ['',Validators.required]
   });
  }
  
  
  getNameErrorMessage() {
    return this.taskGroup.controls.tname.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorMessage() {
    return this.taskGroup.controls.tdesc.hasError('required') ? 'You must enter a value' : '';
  }

  
  
  addTask(){
    this.task.taskName = this.taskGroup.controls.tname.value;
    this.task.taskDesc = this.taskGroup.controls.tdesc.value;
    this.taskService.addTask(this.task).subscribe(task => {if(task) this.router.navigate(['./task-list']);});
    this.router.navigate(['./task-list']);
  }

  goBack(){
    this.router.navigate(['./task-list']);
  }

}
