import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  standalone: false,
  templateUrl: './apolice-seguro.html',
  styleUrl: './apolice-seguro.css'
})
export class ApoliceSeguro {
  idade: number = 0;
  valorSeguro: number = 0;
  valorveiculo: number = 0;
  idadecondutor: number = 0;
  sexocondutor: string = '';

  constructor() { }

  resultadoApolice(): void {
    if ((this.idadecondutor <= 25) && (this.sexocondutor === 'Masculino')) {
      this.valorSeguro = this.valorveiculo * 0.15;
    }
    else if ((this.idadecondutor > 25) && (this.sexocondutor === 'Masculino')) {
      this.valorSeguro = this.valorveiculo * 0.10;
    }
    else {
      this.valorSeguro = this.valorveiculo * 0.08;
    }
  }
}
