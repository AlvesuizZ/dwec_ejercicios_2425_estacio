import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username= 'Yoda';
  @Input() name= ' ';
  logoUrl = '/imgs/logo.svg';
  logoAlt = 'Angular logo'
}
