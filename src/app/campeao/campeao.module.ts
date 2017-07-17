import { CampeaoResumidoResolver } from './campeao-basico/campeao-resumido.resolver';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CampeaoComponent } from './campeao.component';
import { CampeaoRoutingModule } from './campeao.routing.module';
import { CampeaoEstatisticaComponent } from './campeao-estatistica/campeao-estatistica.component';
import { CampeaoBasicoComponent } from './campeao-basico/campeao-basico.component';
import { CampeaoResumidoComponent } from './campeao-basico/campeao-resumido/campeao-resumido.component';
import { CampeaoDetalheComponent } from './campeao-detalhe/campeao-detalhe.component';

@NgModule({
  imports: [ 
    SharedModule,
    CampeaoRoutingModule
  ],
  declarations: [
    CampeaoComponent,
    CampeaoBasicoComponent,
    CampeaoEstatisticaComponent,
    CampeaoResumidoComponent,
    CampeaoDetalheComponent    
  ],
  providers: [
    CampeaoResumidoResolver
  ]
})
export class CampeaoModule {}