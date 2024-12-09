import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit{
  @Input() text:string | undefined;
  @Input() color:string | undefined;
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {
    console.log(this.color);
  }

  onClick() {
      this.btnClick.emit();
  }
}
