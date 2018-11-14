"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    //constructor da minha classe
    //Para que animal seja criada quero que defina quantidade de dentes e olhos
    //constructor(qtdDentes: number, qtdDeOlhos: number){
    //    this.quantidadeDeDentes = qtdDentes
    //    this.quantidadeDeOlhos = qtdDeOlhos
    //}
    constructor() {
    }
    definirOlhos(qtdOlhos) {
        this.quantidadeDeOlhos = qtdOlhos;
    }
    definirDentes(qtdDentes) {
        this.quantidadeDeDentes = qtdDentes;
    }
}
exports.Animal = Animal;
