import {arma} from "./arma";


export class metralhadora extends arma{
    private tiroPorSegundo: number

    constructor(projeteis: number, capacidade: number, tiro: number){
        super(capacidade, projeteis)
        this.tiroPorSegundo = tiro
    }

    public atirar(): void{
        if (this.projeteisNoPente <= 0){
            console.log('Não há balas, por favor recarregue')
        }
        else {
        this.projeteisNoPente = this.projeteisNoPente - 3
        console.log('tratra')
        }
    }
}