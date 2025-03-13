import { Component, inject } from "@angular/core";
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})

export class AppComponent{
  title = 'mi_app_02'
}
