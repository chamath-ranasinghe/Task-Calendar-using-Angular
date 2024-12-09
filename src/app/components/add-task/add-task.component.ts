import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { NgIf } from '@angular/common';
import { Task } from '../../model/Task';
import {TaskService} from '../../services/task.service'
import { AddTaskSharedServiceService } from '../../services/add-task-shared-service.service';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  task!:string;
  date!:string;
  reminder:boolean = false;

  showAddTask!: boolean;

  constructor(private taskService: TaskService, private addTaskSharedService: AddTaskSharedServiceService, private uiService: UIService){
    this.uiService.trigger$.subscribe({next: (value)=>{
      this.showAddTask = value;
    }})
  }

  onSubmit(){
    if (!this.task || !this.date){
      alert('Please complete the data required');
      return;
    }

    let newTask: Task = {
      text: this.task,
      date: this.date,
      reminder: this.reminder
    };

    this.addTaskSharedService.triggerFunction(newTask);
    
  }
}
