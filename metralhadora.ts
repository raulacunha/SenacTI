import {arma} from "./arma";


export class metralhadora extends arma{
    private tiroPorSegundo: number

    constructor(projeteis: number, capacidade: number, tiro: number){
        super(capacidade, projeteis)
        this.tiroPorSegundo = tiro
    }
}