import { vertebrados } from "./vertebrados";

export class repteis extends vertebrados{
    private pesoDoAnimal: number
    private nomeDoAnimal: string
    private tipoDeAgua: string
    private comprimentoDoReptil: number

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number, peso: number, nome: string, agua: string, comprimento: number){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros);
        this.pesoDoAnimal = peso
        this.nomeDoAnimal = nome
        this.tipoDeAgua = agua
        this.comprimentoDoReptil = comprimento
    }

}