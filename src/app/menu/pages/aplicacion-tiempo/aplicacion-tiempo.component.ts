import { Component } from '@angular/core';
import { AplicacionTiempoService } from '../../../service/aplicacion-tiempo.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './aplicacion-tiempo.component.html',
  styleUrls: ['./aplicacion-tiempo.component.css']
})
export class AplicacionTiempoComponent {
  city: string = '';
  weather: any;

  constructor(private aplicaionTiempoService: AplicacionTiempoService) { }

  getWeather() {
    this.aplicaionTiempoService.getWeather(this.city).subscribe(
      data => {
        this.weather = data;
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
