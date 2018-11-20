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
var invertebrados_1 = require("./invertebrados");
var poriferos = /** @class */ (function (_super) {
    __extends(poriferos, _super);
    function poriferos(qtdOlhos, qtdDentes, qtdAntenas, qtdPatas, reproducao, agua) {
        var _this = _super.call(this, qtdOlhos, qtdDentes, qtdAntenas, qtdPatas) || this;
        _this.tipoDeReproducao = reproducao;
        _this.tipoDeAgua = agua;
        return _this;
    }
    poriferos.prototype.definirTipoDoPorifero = function (tipo) {
        this.tipoDoPorifero = tipo;
    };
    poriferos.prototype.definirClasseDoPorifero = function (classe) {
        this.classeDoPorifero = classe;
    };
    return poriferos;
}(invertebrados_1.invertebrados));
exports.poriferos = poriferos;
