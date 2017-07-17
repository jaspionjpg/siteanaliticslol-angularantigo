import { JogadorSlider } from './../models/jogador-slider';
import { Jogador } from './../models/jogador';
import { Injectable } from '@angular/core';

@Injectable()
export class JogadorService {
                
  getJogadoresSlider() :JogadorSlider[] {
    return [
      {id: 1, nome: 'Tockers', funcao: 'Meio', kda: 3.82, kill: 17, morte: 3, assistencia: 5, gold: 42000, urlImagem: 'fotos/tockers.jpg', campeoesLista:[{id: 1, nome: 'Lee Sin', urlImagem: 'fotos/LeeSin.png'},{id: 1, nome: 'Lee Sin', urlImagem: 'fotos/LeeSin.png'}]},
      {id: 2, nome: 'Nappon', funcao: 'Caçador', kda: 3.82, kill: 17, morte: 3, assistencia: 5, gold: 42000, urlImagem: 'fotos/nappon.png', campeoesLista:[{id: 1, nome: 'Lee Sin', urlImagem: 'fotos/LeeSin.png'}]},
      {id: 3, nome: 'Brtt', funcao: 'Atirador', kda: 3.82, kill: 17, morte: 3, assistencia: 5, gold: 42000, urlImagem: 'fotos/brtt.jpg', campeoesLista:[{id: 1, nome: 'Lee Sin', urlImagem: 'fotos/LeeSin.png'}]},
      {id: 4, nome: 'Yoda', funcao: 'Meio', kda: 3.82, kill: 17, morte: 3, assistencia: 5, gold: 42000, urlImagem: 'fotos/yoda.png', campeoesLista:[{id: 1, nome: 'Lee Sin', urlImagem: 'fotos/LeeSin.png'}]},
      {id: 5, nome: 'Dioud', funcao: 'Suporte', kda: 3.82, kill: 17, morte: 3, assistencia: 5, gold: 42000, urlImagem: 'fotos/dioud.png', campeoesLista:[{id: 1, nome: 'Lee Sin', urlImagem: 'fotos/LeeSin.png'}]},
      {id: 6, nome: 'Robo', funcao: 'Topo', kda: 3.82, kill: 17, morte: 3, assistencia: 5, gold: 42000, urlImagem: 'fotos/robo.png', campeoesLista:[{id: 1, nome: 'Lee Sin', urlImagem: 'fotos/LeeSin.png'}]},
      {id: 7, nome: 'Brucer', funcao: 'Meio', kda: 3.82, kill: 17, morte: 3, assistencia: 5, gold: 42000, urlImagem: 'fotos/brucer.png', campeoesLista:[{id: 1, nome: 'Lee Sin', urlImagem: 'fotos/LeeSin.png'}]}
    ];
  }

  getJogador(): any {  
    return {id: 1,
            nome: 'Gabriel Claumann',
            nick: 'Tockers',
            posicao:'Mid Laner',
            nacionalidade: 'BR',
            urlImagemNacionalidade: './fotos/br.png',
            idade: 19,
            dataNascimento: 'Fev 21, 1996',
            urlImagem: './fotos/tockers.jpg',
            kda:5.70,
            kill: 6,
            morte: 1,
            assistencia: 6,
            partidasJogadas: 81,
            partidasGanhas: 75, 
            taxaVitoria: 95,
            farme: 322,
            sociais: [{id:1, url:'facebook/tralala', rede:'facebook'}],
            time: {id:1, nome:'Red Canids', urlImagem:'./fotos/redCanidis.png'},
            topChampions: [{id:1, nome:'Lee sin', farme: 221, kda: 12, kill: 6, morte: 1, assistencia: 6, jogosEscolha: 10, taxaWin: 43, urlImagem:'fotos/LeeSin.png'},
                           {id:1, nome:'Lee sin', farme: 221, kda: 12, kill: 6, morte: 1, assistencia: 6, jogosEscolha: 10, taxaWin: 43, urlImagem:'fotos/LeeSin.png'},
                           {id:1, nome:'Lee sin', farme: 221, kda: 12, kill: 6, morte: 1, assistencia: 6, jogosEscolha: 10, taxaWin: 43, urlImagem:'fotos/LeeSin.png'}],
            troféus: [{id: 1, nome:'CBLOL', descricao:'1º Split', ano: 2015, jogosEscolha: 10, taxaWin: 43, urlImagem:'fotos/cblol.png'},
                      {id: 1, nome:'CBLOL', descricao:'2º Split', ano: 2016, jogosEscolha: 10, taxaWin: 43, urlImagem:'fotos/cblol.png'},
                      {id: 1, nome:'CBLOL', descricao:'1º Split', ano: 2017, jogosEscolha: 10, taxaWin: 43, urlImagem:'fotos/cblol.png'}],
            times: [{id: 1, nome:'INTZ', tempo:'2 Anos', jogosEscolha: 10, taxaWin: 43, urlImagem:'fotos/intz.png'},
                    {id: 1, nome:'Red Canids', tempo:'6 meses', jogosEscolha: 10, taxaWin: 43, urlImagem:'fotos/redCanidis.png'}],
            series: [{id: 1,
                     patch: 7.6,
                     numeroJogos: 2,
                     nome: 'PNG-vs-VFK',
                     titulo: 'Semana 1',
                     faseTorneio: 'group_phase',
                     data: 'Sábado 16 de abril de 2017',
                     time1: {id:1, nick:'PNG', jogosGanhos: 1},
                     time2: {id:2, nick:'INTZ', jogosGanhos: 1},
                     vencedor: true,
                     campeonato:{id:1, titulo: 'CBLOL 2017'},
                     jogos:[{id: 1,
                             season: 7,
                             numeroJogo: 1,
                             gameId: 20707,
                             patch: 7.1,
                             platform: 'ESPORTSTMNT03',
                             urlVideoYoutube: 'https://www.youtube.com/embed/2N9cm4jx3R4',
                             data: '2017-01-28 14:32:50',
                             vencedor: true,
                             tempoJogo: 31,
                             jogador:{id:1,
                                      kda:5.70,
                                      kill: 6,
                                      morte: 1,
                                      assistencia: 6,
                                      farme: 266,
                                      dpm: 694,
                                      participacao: 68,
                                      ks: 36,
                                      mastery: {id: 1, urlImagem: ''},
                                      feitico1: {id: 1, urlImagem: ''},
                                      feitico2: {id: 1, urlImagem: ''},
                                      campeao: {id: 1, urlImagem: ''},
                                      item0: {id: 1, urlImagem: ''},
                                      item1: {id: 1, urlImagem: ''},
                                      item2: {id: 1, urlImagem: ''},
                                      item3: {id: 1, urlImagem: ''},
                                      item4: {id: 1, urlImagem: ''},
                                      item5: {id: 1, urlImagem: ''},
                                      item6: {id: 1, urlImagem: ''},
                                      jogadores1: [{id: 1, urlImagem: '', nick: ''},
                                                   {id: 1, urlImagem: '', nick: ''},
                                                   {id: 1, urlImagem: '', nick: ''},
                                                   {id: 1, urlImagem: '', nick: ''},
                                                   {id: 1, urlImagem: '', nick: ''}],
                                      jogadores2: [{id: 2, urlImagem: '', nick: ''},
                                                   {id: 2, urlImagem: '', nick: ''},
                                                   {id: 2, urlImagem: '', nick: ''},
                                                   {id: 2, urlImagem: '', nick: ''},
                                                   {id: 2, urlImagem: '', nick: ''}],
                             }
                           }],
            jogadoresRelacionados: [{id: 1, primeiroNome:'Felipe', sobrenome:'Gonçalves', nomeTime:'Red Canids', funcao:'Atirador', nick:'BRTT', urlImagem:'fotos/brtt.jpg'},
                                    {id: 1, primeiroNome:'Felipe', sobrenome:'Gonçalves', nomeTime:'Red Canids', funcao:'Atirador', nick:'BRTT', urlImagem:'fotos/brtt.jpg'},
                                    {id: 1, primeiroNome:'Felipe', sobrenome:'Gonçalves', nomeTime:'Red Canids', funcao:'Atirador', nick:'BRTT', urlImagem:'fotos/brtt.jpg'},
                                    {id: 1, primeiroNome:'Felipe', sobrenome:'Gonçalves', nomeTime:'Red Canids', funcao:'Atirador', nick:'BRTT', urlImagem:'fotos/brtt.jpg'}]
            }]  
    };
  }

  constructor() { }
}
