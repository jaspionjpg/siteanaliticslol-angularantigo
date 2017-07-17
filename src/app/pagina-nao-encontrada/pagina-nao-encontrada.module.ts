import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

@NgModule({
  imports: [ 
    SharedModule 
  ],
  declarations: [
    PaginaNaoEncontradaComponent
  ]
})
export class PaginaNaoEncontradaModule {}