import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/Task';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{
  tasks!: Task[];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }


}
