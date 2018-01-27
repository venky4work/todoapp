import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTaskComponent} from '../add-task/add-task.component';
import {TaskListComponent} from '../task-list/task-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'task-list', pathMatch: 'full'}, 
  {path: 'task-list', component:TaskListComponent},
  {path: 'add-task', component:AddTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
