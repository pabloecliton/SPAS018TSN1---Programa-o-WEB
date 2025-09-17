import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';


const routes: Routes = [
  { path: '', redirectTo: 'calcular-media', pathMatch: 'full' },
  { path: 'calcular-media', component: CalcularMedia },
  { path: 'apolice-seguro', component: ApoliceSeguro },
  { path: 'conversor-temperatura', component: ConversorTemperatura },
  { path: 'calculadora-imc', component: CalculadoraImc },
  { path: '**', component: PaginaNaoEncontrada }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
