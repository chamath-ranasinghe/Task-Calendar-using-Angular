import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent{
  @Input() text:string | undefined;
  @Input() color:string | undefined;
  @Output() btnClick = new EventEmitter();

  onClick() {
      this.btnClick.emit();
  }
}
