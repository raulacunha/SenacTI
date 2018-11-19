import { Animal } from "./animal"

export class invertebrados extends Animal{
    private quantidadeDePatas: number
    private quantidadeDeAntenas: number

    constructor(qtdOlhos: number, qtdDentes:number, qtdPatas: number, qtdAntenas: number){
        super(qtdOlhos, qtdDentes,)
        this.quantidadeDePatas = qtdPatas
        this.quantidadeDeAntenas = qtdAntenas

    }
}