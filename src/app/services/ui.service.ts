import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  trigger$ = this.subject.asObservable();

  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }



  constructor() { }
}
