import { JogadorService } from './../../shared/services/jogador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogador-detalhe',
  templateUrl: './jogador-detalhe.component.html',
  styleUrls: ['./jogador-detalhe.component.css']
})
export class JogadorDetalheComponent implements OnInit {
  jogador: any[] = [];
  constructor(private jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogador = this.jogadorService.getJogador();
  }

}
