import { Component,Input, inject } from '@angular/core';
import { CarService } from '../services/car.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  title="USER";
  CarService = inject(CarService);
  display = '';

  constructor(){
    this.display = this.CarService.getCars().join(' | ');
  }
  username= 'Yoda';
  @Input() name= ' ';
  precio = 1098.98
  logoUrl = '/img/logo.svg';
  logoAlt = 'Angular logo'
  favouriteFramework = '';
  showFramework(){
    alert(this.favouriteFramework)
  }
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, this.emailGValidator]),
  });

  emailGValidator(control: AbstractControl): ValidationErrors | null{
    const email = control.value;
    return email && email.endsWith('@gmail.com') ? null : {emailG: true};
  };

  handleSubmit(){
    alert(
      `Name: ${this.profileForm.value.name} | Email: ${this.profileForm.value.email}`
    )
  }
}
