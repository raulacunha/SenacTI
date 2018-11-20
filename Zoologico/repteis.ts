import { vertebrados } from "./vertebrados";

export class repteis extends vertebrados{
    private pesoDoAnimal: number
    private nomeDoAnimal: string
    private tipoDeAgua: string
    private comprimentoDoReptil: number

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number, nome: string, agua: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros);
        this.nomeDoAnimal = nome
        this.tipoDeAgua = agua
    }
    public definirComprimentoDoReptil(comprimento: number): void{
        this.comprimentoDoReptil = comprimento
    }
    public definirPesoDoReptil(peso: number): void{
        this.pesoDoAnimal = peso
    }
}