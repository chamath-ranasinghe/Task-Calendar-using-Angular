import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/Task';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../../services/task.service';
import { AddTaskSharedServiceService } from '../../services/add-task-shared-service.service';

@Component({
  selector: 'app-tasks',
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{
  tasks!: Task[];

  constructor(private taskService: TaskService, private addTaskSharedService: AddTaskSharedServiceService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks;
    });

    this.addTaskSharedService.trigger$.subscribe({next:(task)=>{
      this.addTask(task);
    }})
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter((t)=> t.id !== task.id);
    });
  }

  addTask(newTask:Task){
    this.taskService.addTask(newTask).subscribe({next: (task)=>{
      this.tasks.push(task);
      console.log(this.tasks);
      console.log("Task Successfully Added");
    }})
  }

}
