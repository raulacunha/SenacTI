"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    //constructor da minha classe
    //Para que animal seja criada quero que defina quantidade de dentes e olhos
    function Animal(qtdDentes, qtdDeOlhos, nomeAnimal) {
        this.quantidadeDeDentes = qtdDentes;
        this.quantidadeDeOlhos = qtdDeOlhos;
        this.nomeDoAnimal = nomeAnimal;
    }
    return Animal;
}());
exports.Animal = Animal;
