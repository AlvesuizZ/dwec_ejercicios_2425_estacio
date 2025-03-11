import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem(){
    this.addItemEvent.emit('Hola');
  }
}
