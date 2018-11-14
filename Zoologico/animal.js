"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    //constructor da minha classe
    //Para que animal seja criada quero que defina quantidade de dentes e olhos
    //constructor(qtdDentes: number, qtdDeOlhos: number){
    //    this.quantidadeDeDentes = qtdDentes
    //    this.quantidadeDeOlhos = qtdDeOlhos
    //}
    function Animal() {
    }
    Animal.prototype.definirOlhos = function (qtdOlhos) {
        this.quantidadeDeOlhos = qtdOlhos;
    };
    Animal.prototype.definirDentes = function (qtdDentes) {
        this.quantidadeDeDentes = qtdDentes;
    };
    Animal.prototype.definirNome = function (nome) {
        this.nomeDoAnimal = nome;
    };
    return Animal;
}());
exports.Animal = Animal;
