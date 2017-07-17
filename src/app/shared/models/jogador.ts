export class Jogador {
    constructor(public id: number,
                public nome: string,   
                public titulo: string,
                public taxaVitoria: number,
                public taxaBan: number,
                public taxaPick: number,
                public urlImagem: string,
                public jogadores: any[]){}
}
