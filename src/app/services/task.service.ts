import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { Tasks } from '../data/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  async getTasks(): Promise<Task[]>{
    try{
    const res = await fetch("http://localhost:8080/tasks");

    if (!res.ok){
      throw new Error(`Http Error! Status ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    
  } catch(error:any){
    console.error("Error fetching tasks", error);
  }
  return Tasks;
}



  constructor() { }
}
