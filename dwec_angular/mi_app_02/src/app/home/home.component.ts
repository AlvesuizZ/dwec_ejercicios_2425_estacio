import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'HOME';
  year = new Date().getFullYear();
  isServerRunning = false;
  users = [
    { id: 0, name: 'Rachel' },
    { id: 1, name: 'Pepe' },
    { id: 2, name: 'Pablo' },
    { id: 3, name: 'Sergio' },
  ];
  trackByUserId(index: number, user: any): number {
    return user.id;
  }
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
