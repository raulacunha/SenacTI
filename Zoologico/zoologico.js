"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Zoo {
    //todo parametro e/ou atributo definido no inicio 
    //do meu método ou função só poderá ser 
    //acessado por ele mesmo
    constructor(end, list) {
        this.endereco = end;
        this.listaDeAnimais = list;
    }
    //tirar o this.endereco do constructor
    //public definirEndereco(end: string): void{
    //    this.endereco = end
    //}
    mostrarEndereco() {
        return this.endereco;
    }
    mostrarLista() {
        return this.listaDeAnimais;
    }
}
exports.Zoo = Zoo;
