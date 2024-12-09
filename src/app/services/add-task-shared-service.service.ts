import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class AddTaskSharedServiceService {
  private triggerSubject = new Subject<Task>();

  trigger$ = this.triggerSubject.asObservable();

  triggerFunction(task: Task){
    this.triggerSubject.next(task);
  }

  constructor() { }
}
