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
var ave = /** @class */ (function (_super) {
    __extends(ave, _super);
    function ave(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros, peso, nome, alimentacao, especie) {
        var _this = _super.call(this, qtdOlhos, qtdDentes, qtdAntenas, qtdMembros) || this;
        _this.pesoDoAnimal = peso;
        _this.nomeDoAnimal = nome;
        _this.tipoDeAlimentacao = alimentacao;
        _this.especieDaAve = especie;
        return _this;
    }
    ave.prototype.definirNumeroDePatas = function (qtdPatas) {
        this.quantidadeDePatas = qtdPatas;
    };
    ave.prototype.definirAlturaMaximaDeVoo = function (altura) {
        this.alturaMaxima = altura;
    };
    ave.prototype.definirOrdem = function (ordem) {
        this.ordemDaAve = ordem;
    };
    ave.prototype.definirTempoMaximoDeVoo = function (tempo) {
        this.tempoMaximo = tempo;
    };
    return ave;
}(vertebrados_1.vertebrados));
exports.ave = ave;
