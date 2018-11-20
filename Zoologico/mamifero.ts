import { vertebrados } from "./vertebrados";

export class mamifero extends vertebrados{
    private pesoDoAnimal: number
    private nomeDoAnimal: string
    private tipoDeAlimentacao: string
    private especieDoMamifero: string
    private mamilosDoAnimal: number

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number, peso: number, nome: string, alimentacao: string, especie: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros);
        this.pesoDoAnimal = peso
        this.nomeDoAnimal = nome
        this.tipoDeAlimentacao = alimentacao
        this.especieDoMamifero = especie
    }
    public definirQuantidadeDeMamilos(mamilos: number): void{
        this.mamilosDoAnimal = mamilos
    }
    
}