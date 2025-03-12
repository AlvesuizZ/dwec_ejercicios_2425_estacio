import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title="USER";
  username= 'Yoda';
  @Input() name= ' ';
  logoUrl = '/img/logo.svg';
  logoAlt = 'Angular logo'
}
