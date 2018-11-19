import { vertebrados } from "./vertebrados";

export class mamifero extends vertebrados{
    private pesoDoAnimal: number
    private nomeDoAnimal: string
    private tipoDeAlimentacao: string
    private especieDoMamifero: string

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number, peso: number, nome: string, alimentacao: string, especie: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros);
        this.pesoDoAnimal = peso
        this.nomeDoAnimal = nome
        this.tipoDeAlimentacao = alimentacao
        this.especieDoMamifero = especie
    }

}