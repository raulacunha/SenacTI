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
var peixes = /** @class */ (function (_super) {
    __extends(peixes, _super);
    function peixes(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros, peso, agua, comprimento, especie) {
        var _this = _super.call(this, qtdOlhos, qtdDentes, qtdAntenas, qtdMembros) || this;
        _this.pesoDoPeixe = peso;
        _this.tipoDeAgua = agua;
        _this.comprimentoDoPeixe = comprimento;
        _this.especieDoPeixe = especie;
        return _this;
    }
    peixes.prototype.definirAlimentacao = function (alimentacao) {
        this.alimentoDoPeixe = alimentacao;
    };
    peixes.prototype.definirQuantidadeDeNadadeiras = function (nadadeiras) {
        this.nadadeirasDoPeixe = nadadeiras;
    };
    return peixes;
}(vertebrados_1.vertebrados));
exports.peixes = peixes;
