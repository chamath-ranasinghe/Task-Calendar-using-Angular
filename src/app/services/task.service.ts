import { Injectable, } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../model/Task';
import { Tasks } from '../data/Tasks';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:8080/tasks";

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
}

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  addTask(): Observable<Task[]>{
    const url = this.apiUrl;
    return this.http.put<Task[]>(url);
  }
}
