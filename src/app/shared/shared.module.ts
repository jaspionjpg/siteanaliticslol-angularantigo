import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampeaoService } from './services/campeao.service';
import { JogadorService } from './services/jogador.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [], 
  exports: [
    CommonModule,
    HttpModule
  ],
  providers: [ JogadorService, CampeaoService ]
})
export class SharedModule { }
