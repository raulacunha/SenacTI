import { vertebrados } from "./vertebrados";

export class anfibio extends vertebrados{
    private pesoDoAnimal: number
    private nomeDoAnimal: string
    private tipoDoAnfibio: string
    private corDoAnfibio: string
    private quantidadeDePatas: number
    private recptoresAuditivos: number

    constructor(qtdOlhos: number, qtdDentes: number, qtdAntenas: number, qtdMembros: number, peso: number, nome: string, tipo: string, cor: string){
        super(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros);
        this.pesoDoAnimal = peso
        this.nomeDoAnimal = nome
        this.tipoDoAnfibio = tipo
        this.corDoAnfibio = cor
    }

    public definirNumeroDePatas(qtdPatas: number): void{
        this.quantidadeDePatas = qtdPatas
    }
    public definirNumeroDeReceptoresAuditivos(qtdRecpt: number): void{
        this.recptoresAuditivos = qtdRecpt
    }
}