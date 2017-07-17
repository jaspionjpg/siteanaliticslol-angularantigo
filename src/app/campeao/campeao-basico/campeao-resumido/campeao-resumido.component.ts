import { CampeaoResumido } from './../../../shared/models/campeao-resumido';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { CampeaoService } from './../../../shared/services/campeao.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Campeao } from './../../../shared/models/campeao';

@Component({
  selector: 'app-campeao-resumido',
  templateUrl: './campeao-resumido.component.html',
  styleUrls: ['./campeao-resumido.component.css']
})
export class CampeaoResumidoComponent implements OnInit, OnDestroy {
 
  campeao: CampeaoResumido;
  inscricao: Subscription;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.inscricao = this.route.data.subscribe(
      (info: {campeao: any}) => {
        this.campeao = info.campeao;
      }
    );
  }

  ngOnDestroy(){
     this.inscricao.unsubscribe();
  }
}
