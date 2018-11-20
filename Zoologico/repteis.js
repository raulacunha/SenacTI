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
var repteis = /** @class */ (function (_super) {
    __extends(repteis, _super);
    function repteis(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros, nome, agua) {
        var _this = _super.call(this, qtdOlhos, qtdDentes, qtdAntenas, qtdMembros) || this;
        _this.nomeDoAnimal = nome;
        _this.tipoDeAgua = agua;
        return _this;
    }
    repteis.prototype.definirComprimentoDoReptil = function (comprimento) {
        this.comprimentoDoReptil = comprimento;
    };
    repteis.prototype.definirPesoDoReptil = function (peso) {
        this.pesoDoAnimal = peso;
    };
    return repteis;
}(vertebrados_1.vertebrados));
exports.repteis = repteis;
