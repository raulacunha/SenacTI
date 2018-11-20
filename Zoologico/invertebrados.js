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
var animal_1 = require("./animal");
var invertebrados = /** @class */ (function (_super) {
    __extends(invertebrados, _super);
    function invertebrados(qtdOlhos, qtdDentes, qtdPatas, qtdAntenas) {
        var _this = _super.call(this, qtdOlhos, qtdDentes) || this;
        _this.quantidadeDePatas = qtdPatas;
        _this.quantidadeDeAntenas = qtdAntenas;
        return _this;
    }
    return invertebrados;
}(animal_1.Animal));
exports.invertebrados = invertebrados;
