import { CampeaoLista } from './campeao-lista';
export class JogadorSlider {
    constructor(public id: number,
                public nome: string,
                public funcao: string,
                public kda: number,
                public kill: number,
                public morte: number,
                public assistencia: number,
                public gold: number,
                public urlImagem: string,
                public campeoesLista: CampeaoLista[]){}
}
