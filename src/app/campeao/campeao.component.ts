import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { CampeaoLista } from './../shared/models/campeao-lista';
import { CampeaoService } from './../shared/services/campeao.service';

@Component({
  selector: 'app-campeao',
  templateUrl: './campeao.component.html',
  styleUrls: ['./campeao.component.css']
})
export class CampeaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
