import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService {
    tasks: Task[] = [];
    baseUrl: String = "http://localhost:8080/demo/api";

    constructor(private http: Http) {

    }

    addTask(task:Task) : Observable<Task>{
        task.taskStatus = "PENDING"
        return this.http.post(this.baseUrl + "/task",task).map(this.extractObject).catch(this.handleError);
    }

    updateTask() {

    }

    getTasks(): Observable<Task[]> {

        return this.http.get(this.baseUrl + "/tasks").map(this.extractArray).catch(this.handleError);

    }
    deleteTask() {

    }

    extractArray(res: Response) {
        let body = res.json();
        return body || [];
    }

    extractObject(res: Response) {
        let body = res.json();
        return body || {};
    }

    handleError(err: any): Observable<any> {
        let msg = (err.message) ? err.message : (err.status);
        return msg;
    }

}