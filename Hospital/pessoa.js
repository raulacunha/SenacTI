"use strict";
exports.__esModule = true;
var pessoa = /** @class */ (function () {
    function pessoa(NomePessoa, IdadePessoa, TelPessoa) {
        this.nome = NomePessoa;
        this.idade = IdadePessoa;
        this.telefone = TelPessoa;
    }
    pessoa.prototype.logar = function () {
        this.nome = 'raul';
        if (this.nome == 'raul') {
            console.log('Logado!');
        }
    };
    pessoa.prototype.deslogar = function () {
    };
    pessoa.prototype.ConsultarAgenda = function () {
    };
    return pessoa;
}());
exports.pessoa = pessoa;
