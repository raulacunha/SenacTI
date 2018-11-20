import { vertebrados } from "./vertebrados";

export class ave extends vertebrados{
    private pesoDoAnimal: number
    private nomeDoAnimal: string
    private tipoDeAlimentacao: string
    private especieDaAve: string
    private quantidadeDePatas: number
    private alturaMaxima: number
    private ordemDaAve: string
    private tempoMaximo: number

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number, peso: number, nome: string, alimentacao: string, especie: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros);
        this.pesoDoAnimal = peso
        this.nomeDoAnimal = nome
        this.tipoDeAlimentacao = alimentacao
        this.especieDaAve = especie
    }
    public definirNumeroDePatas(qtdPatas: number): void{
        this.quantidadeDePatas = qtdPatas
    }
    public definirAlturaMaximaDeVoo(altura: number): void{
        this.alturaMaxima = altura
    }
    public definirOrdem(ordem: string): void{
        this.ordemDaAve = ordem
    }
    public definirTempoMaximoDeVoo(tempo: number): void{
        this.tempoMaximo = tempo
    }

}