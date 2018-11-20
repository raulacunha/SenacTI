import { vertebrados } from "./vertebrados";

export class peixes extends vertebrados{
    private pesoDoPeixe: number
    private tipoDeAgua: string
    private comprimentoDoPeixe: number
    private especieDoPeixe: string
    private alimentoDoPeixe: string
    private nadadeirasDoPeixe: number

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number, peso: number, agua: string, comprimento: number, especie: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros);
        this.pesoDoPeixe = peso
        this.tipoDeAgua = agua
        this.comprimentoDoPeixe = comprimento
        this.especieDoPeixe = especie
    }

    public definirAlimentacao(alimentacao: string): void{
        this.alimentoDoPeixe = alimentacao
    }
    public definirQuantidadeDeNadadeiras(nadadeiras: number): void{
        this.nadadeirasDoPeixe = nadadeiras
    }
}