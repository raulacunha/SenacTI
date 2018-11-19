import { Animal } from "./animal";

export class vertebrados extends Animal{
    private quantidadeDeAntenas: number
    private quantidadeDeMembros: number

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number){
        super(qtdOlhos, qtdDentes);
        this.quantidadeDeAntenas = qtdAntenas
        this.quantidadeDeMembros = qtdMembros
    }
}