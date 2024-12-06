import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-content',
  imports: [TasksComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  
}
