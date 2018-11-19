import { invertebrados } from "./invertebrados";

export class poriferos extends invertebrados{
    private tipoDeReproducao: string
    private tipoDeAgua: string

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdPatas: number, reproducao: string, agua: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdPatas);
        this.tipoDeReproducao = reproducao
        this.tipoDeAgua = agua
    }

}