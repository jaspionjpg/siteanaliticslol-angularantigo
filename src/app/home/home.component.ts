import { JogadorSlider } from './../shared/models/jogador-slider';
import { JogadorService } from './../shared/services/jogador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jogadoresSlider: JogadorSlider[] = [];
  
  constructor(private jogadorService: JogadorService) { }

  ngOnInit() {
    this.jogadoresSlider = this.jogadorService.getJogadoresSlider();
  }
}
