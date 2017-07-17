import { Component, OnInit } from '@angular/core';

import { CampeaoService } from './../../shared/services/campeao.service';
import { CampeaoLista } from './../../shared/models/campeao-lista';

@Component({
  selector: 'app-campeao-basico',
  templateUrl: './campeao-basico.component.html',
  styleUrls: ['./campeao-basico.component.css']
})
export class CampeaoBasicoComponent implements OnInit {
  campeoesLista: CampeaoLista[] = [];
  constructor(private campeaoService: CampeaoService) { }

  ngOnInit() {
    this.campeaoService.getCampeoesLista().subscribe(dados => {
      this.campeoesLista = dados;
    });
  }

}
