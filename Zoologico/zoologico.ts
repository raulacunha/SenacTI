import { Animal } from "./animal";

export class Zoo{
    private endereco: string
    private listaDeAnimais: Array<Animal>

    //todo parametro e/ou atributo definido no inicio 
    //do meu método ou função só poderá ser 
    //acessado por ele mesmo
    constructor(end: string, list: Array<Animal>){
        this.endereco = end
        this.listaDeAnimais = list
    }

    //tirar o this.endereco do constructor
    //public definirEndereco(end: string): void{
    //    this.endereco = end
    //}

    public mostrarEndereco(): string{
        return this.endereco
    }
    public mostrarLista(): Array<Animal>{
        return this.listaDeAnimais
    }
}