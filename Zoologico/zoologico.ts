import { Animal } from "./animal";

export class Zoo{
    private endereco: string
    private listaDeAnimais: Array<Animal>

    //todo parametro e/ou atributo definido no inicio 
    //do meu método ou função só poderá ser 
    //acessado por ele mesmo
    constructor(list: Array<Animal>){
        this.listaDeAnimais = list
    }

    //tirar o this.endereco do constructor
    //public definirEndereco(end: string): void{
    //    this.endereco = end
    //}

    public definirEndereco(end: string): void{
        this.endereco = end
    }

    public mostrarEndereco(): string{
        return this.endereco
    }
    public mostrarLista(): Array<Animal>{
        return this.listaDeAnimais
    }
}