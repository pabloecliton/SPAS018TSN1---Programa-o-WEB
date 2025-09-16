import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperior } from './menu-superior/menu-superior';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalculadoraImc } from './calculadora-imc/calculadora-imc';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

@NgModule({
  declarations: [
    App,
    MenuSuperior,
    CalcularMedia,
    ApoliceSeguro,
    ConversorTemperatura,
    CalculadoraImc,
    PaginaNaoEncontrada
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
