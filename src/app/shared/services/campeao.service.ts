import { CampeaoResumido } from './../models/campeao-resumido';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CampeaoService {

  constructor(private http: Http) { }

  getCampeoesLista() {
     return this.http.get('assets/dados/campeoes.json').map((res: Response) => res.json());
  }

  getCampeaoResumido(id: number): CampeaoResumido{
    let campeao: CampeaoResumido = {
              id:id,
              nome:'Shaco',
              titulo:'o Bufão Demoníaco',
              taxaVitoria:79.8,
              taxaBan:32.2,
              taxaPick:4.1,
              urlImagem:'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png',
              jogadores:[{
                          id:23,
                          nome:'JaspionJpg',
                          kda:12,
                          kill: 6,
                          morte: 1,
                          assistencia: 6,
                          jogosEscolha: 75,
                          taxaWin: 4,
                          urlImagem:'fotos/tockers.jpg'
                        }]
                  };
    return campeao;
  }
}
