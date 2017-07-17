import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JogadorResumidoComponent } from './jogador-basico/jogador-resumido/jogador-resumido.component';
import { JogadorDetalheComponent } from './jogador-detalhe/jogador-detalhe.component';
import { JogadorEstatisticaComponent } from './jogador-estatistica/jogador-estatistica.component';
import { JogadorBasicoComponent } from './jogador-basico/jogador-basico.component';
import { JogadorComponent } from './jogador.component';

const jogadoresRoutes = [
    {path: '', component: JogadorComponent, 
     children : [
        {path: 'basico', component: JogadorBasicoComponent,
            children : [
                {path: ':id', component: JogadorResumidoComponent},
                {path: '', redirectTo: '1', pathMatch: 'full' }
            ]},
        {path: 'estatistica', component: JogadorEstatisticaComponent},
        {path: '', redirectTo: 'basico', pathMatch: 'full' },
        {path: 'detalhe/:id', component: JogadorDetalheComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(jogadoresRoutes)],
    exports: [RouterModule]
})
export class JogadorRoutingModule {}