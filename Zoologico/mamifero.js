"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var vertebrados_1 = require("./vertebrados");
var mamifero = /** @class */ (function (_super) {
    __extends(mamifero, _super);
    function mamifero(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros, peso, nome, alimentacao, especie) {
        var _this = _super.call(this, qtdOlhos, qtdDentes, qtdAntenas, qtdMembros) || this;
        _this.pesoDoAnimal = peso;
        _this.nomeDoAnimal = nome;
        _this.tipoDeAlimentacao = alimentacao;
        _this.especieDoMamifero = especie;
        return _this;
    }
    mamifero.prototype.definirQuantidadeDeMamilos = function (mamilos) {
        this.mamilosDoAnimal = mamilos;
    };
    return mamifero;
}(vertebrados_1.vertebrados));
exports.mamifero = mamifero;
