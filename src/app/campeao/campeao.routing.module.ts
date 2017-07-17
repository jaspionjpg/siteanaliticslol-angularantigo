import { CampeaoDetalheComponent } from './campeao-detalhe/campeao-detalhe.component';
import { CampeaoResumidoResolver } from './campeao-basico/campeao-resumido.resolver';
import { CampeaoResumido } from './../shared/models/campeao-resumido';
import { CampeaoResumidoComponent } from './campeao-basico/campeao-resumido/campeao-resumido.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CampeaoBasicoComponent } from './campeao-basico/campeao-basico.component';
import { CampeaoEstatisticaComponent } from './campeao-estatistica/campeao-estatistica.component';
import { CampeaoComponent } from './campeao.component';

const campeoesRoutes = [
    {path: '', component: CampeaoComponent, 
     children : [
        {path: 'basico', component: CampeaoBasicoComponent,
            children : [
                {path: ':id', component: CampeaoResumidoComponent, resolve: { campeao : CampeaoResumidoResolver }},
                {path: '', redirectTo: '1', pathMatch: 'full' }
            ]},
        {path: 'estatistica', component: CampeaoEstatisticaComponent},
        {path: '', redirectTo: 'basico', pathMatch: 'full' },
        {path: 'detalhe/:id', component: CampeaoDetalheComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(campeoesRoutes)],
    exports: [RouterModule]
})
export class CampeaoRoutingModule {}