import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = "Task Tracker";
  showAddTask: boolean = false;

  constructor(private uiService: UIService){
    this.uiService.trigger$.subscribe({next:(value)=>{
      this.showAddTask = value;
    }})
  }

  toggleAddTask = ()=>{
    this.uiService.toggleAddTask();
  }

}
