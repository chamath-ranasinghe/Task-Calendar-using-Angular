import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Task } from '../../model/Task';
import {TaskService} from '../../services/task.service'
import { AddTaskSharedServiceService } from '../../services/add-task-shared-service.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  task!:string;
  date!:string;
  reminder:boolean = false;

  constructor(private taskService: TaskService, private addTaskSharedService: AddTaskSharedServiceService){}

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
