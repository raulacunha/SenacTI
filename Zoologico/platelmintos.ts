import { vertebrados } from "./vertebrados";

export class platelminto extends vertebrados{
    private classeDoPlatelminto: string
    private tipoDeReproducao: string

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdPatas: number, classe: string, reproducao: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdPatas);
        this.classeDoPlatelminto = classe
        this.tipoDeReproducao = reproducao
    }

}