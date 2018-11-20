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
var anfibio = /** @class */ (function (_super) {
    __extends(anfibio, _super);
    function anfibio(qtdOlhos, qtdDentes, qtdAntenas, qtdMembros, peso, nome, tipo, cor) {
        var _this = _super.call(this, qtdOlhos, qtdDentes, qtdAntenas, qtdMembros) || this;
        _this.pesoDoAnimal = peso;
        _this.nomeDoAnimal = nome;
        _this.tipoDoAnfibio = tipo;
        _this.corDoAnfibio = cor;
        return _this;
    }
    anfibio.prototype.definirNumeroDePatas = function (qtdPatas) {
        this.quantidadeDePatas = qtdPatas;
    };
    anfibio.prototype.definirNumeroDeReceptoresAuditivos = function (qtdRecpt) {
        this.recptoresAuditivos = qtdRecpt;
    };
    return anfibio;
}(vertebrados_1.vertebrados));
exports.anfibio = anfibio;
