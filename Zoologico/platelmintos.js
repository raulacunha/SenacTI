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
var platelminto = /** @class */ (function (_super) {
    __extends(platelminto, _super);
    function platelminto(qtdOlhos, qtdDentes, qtdAntenas, qtdPatas, classe, reproducao) {
        var _this = _super.call(this, qtdOlhos, qtdDentes, qtdAntenas, qtdPatas) || this;
        _this.classeDoPlatelminto = classe;
        _this.tipoDeReproducao = reproducao;
        return _this;
    }
    platelminto.prototype.definirEspecieDoPlatelminto = function (especie) {
        this.especieDoPlatelminto = especie;
    };
    platelminto.prototype.definirNomeDoPlatelminto = function (nome) {
        this.nomeDoPlatelminto = nome;
    };
    return platelminto;
}(vertebrados_1.vertebrados));
exports.platelminto = platelminto;
