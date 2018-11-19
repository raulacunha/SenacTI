import { vertebrados } from "./vertebrados";

export class ave extends vertebrados{
    private pesoDoAnimal: number
    private nomeDoAnimal: string
    private tipoDeAlimentacao: string
    private especieDaAve: string

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number, peso: number, nome: string, alimentacao: string, especie: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros);
        this.pesoDoAnimal = peso
        this.nomeDoAnimal = nome
        this.tipoDeAlimentacao = alimentacao
        this.especieDaAve = especie
    }

}