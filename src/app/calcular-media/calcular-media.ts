import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css'
})
export class CalcularMedia {
  notac1: number = 0;
  notac2: number = 0;
  notaag: number = 0;
  notaaf: number = 0;
  media: number = 0;
  resultado: string = '';

  constructor() { }

  calcularMedia(): void {
    this.media = ((this.notac1 * 0.15) + (this.notac2 * 0.30) + (this.notaag * 0.10) + (this.notaaf * 0.45));
    if (this.media >= 6) {
      this.resultado = 'Aprovado';
    } else {
      this.resultado = 'Reprovado';
    }
  }

}
