import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi_app_02';
  year = new Date().getFullYear();
  isServerRunning = false;
  users = [
    { id: 0, name: 'Rachel' },
    { id: 1, name: 'Pepe' },
    { id: 2, name: 'Pablo' },
    { id: 3, name: 'Sergio' },
  ];
  isEditable = true;
  message = '';
  onMouseOver() {
    this.message = "Way to go";
  };
  items: string[] = [];
  addItem(newItem: string){
    this.items.push(newItem);
  }
}
