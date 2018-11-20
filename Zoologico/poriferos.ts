import { invertebrados } from "./invertebrados";

export class poriferos extends invertebrados{
    private tipoDeReproducao: string
    private tipoDeAgua: string
    private tipoDoPorifero: string
    private classeDoPorifero: string

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdPatas: number, reproducao: string, agua: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdPatas);
        this.tipoDeReproducao = reproducao
        this.tipoDeAgua = agua
    }
    
    public definirTipoDoPorifero(tipo: string): void{
        this.tipoDoPorifero = tipo
    }
    public definirClasseDoPorifero(classe: string): void{
        this.classeDoPorifero = classe
    }
}