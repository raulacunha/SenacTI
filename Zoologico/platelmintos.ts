import { vertebrados } from "./vertebrados";

export class platelminto extends vertebrados{
    private classeDoPlatelminto: string
    private tipoDeReproducao: string
    private especieDoPlatelminto: string
    private nomeDoPlatelminto: string

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdPatas: number, classe: string, reproducao: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdPatas);
        this.classeDoPlatelminto = classe
        this.tipoDeReproducao = reproducao
    }
    public definirEspecieDoPlatelminto(especie: string): void{
        this.especieDoPlatelminto = especie
    }
    public definirNomeDoPlatelminto(nome: string): void{
        this.nomeDoPlatelminto = nome
    }
}