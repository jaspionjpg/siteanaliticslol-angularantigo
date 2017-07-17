import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { JogadorResumidoComponent } from './jogador-basico/jogador-resumido/jogador-resumido.component';
import { JogadorRoutingModule } from './jogador.routing.module';
import { JogadorComponent } from './jogador.component';
import { JogadorBasicoComponent } from './jogador-basico/jogador-basico.component';
import { JogadorEstatisticaComponent } from './jogador-estatistica/jogador-estatistica.component';
import { JogadorDetalheComponent } from './jogador-detalhe/jogador-detalhe.component';


@NgModule({
  imports: [ 
    SharedModule,
    JogadorRoutingModule
  ],
  declarations: [
    JogadorComponent,
    JogadorBasicoComponent,
    JogadorEstatisticaComponent,
    JogadorResumidoComponent,
    JogadorDetalheComponent,
    JogadorResumidoComponent    
  ],
  providers: []
})
export class JogadorModule {}