import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TasksComponent } from "../tasks/tasks.component";
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-content',
  imports: [TasksComponent, AddTaskComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
