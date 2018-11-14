"use strict";
exports.__esModule = true;
var Zoo = /** @class */ (function () {
    //todo parametro e/ou atributo definido no inicio 
    //do meu método ou função só poderá ser 
    //acessado por ele mesmo
    function Zoo(list) {
        this.listaDeAnimais = list;
    }
    //tirar o this.endereco do constructor
    //public definirEndereco(end: string): void{
    //    this.endereco = end
    //}
    Zoo.prototype.definirEndereco = function (end) {
        this.endereco = end;
    };
    Zoo.prototype.mostrarEndereco = function () {
        return this.endereco;
    };
    Zoo.prototype.mostrarLista = function () {
        return this.listaDeAnimais;
    };
    return Zoo;
}());
exports.Zoo = Zoo;
