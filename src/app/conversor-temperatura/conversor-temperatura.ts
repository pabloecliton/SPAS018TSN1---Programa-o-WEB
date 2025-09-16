import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: false,
  templateUrl: './conversor-temperatura.html',
  styleUrl: './conversor-temperatura.css'
})
export class ConversorTemperatura {
  tempCelsius: number = 0;
  tempFahrenheit: number = 0;
  tempKelvin: number = 0;

  constructor() { }

  converterTemperatura(): void {
    this.tempFahrenheit = (this.tempCelsius * 9/5) + 32;
    this.tempKelvin = this.tempCelsius + 273.15;
  }

}
