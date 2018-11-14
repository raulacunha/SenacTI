"use strict";
exports.__esModule = true;
var animal_1 = require("./animal");
//definida uma variável que no caso é um objeto criado a 
//partir de uma classe(forma) no caso Animal
var toto = new animal_1.Animal();
toto.definirDentes(3);
//quando coloca o . voce pode acessar tudo o que 
//tem publico na classe animal
toto.definirOlhos(2);
toto.definirNome('Led');
console.log(toto);
var gato = new animal_1.Animal();
gato.definirDentes(20);
gato.definirOlhos(2);
gato.definirNome('Botas');
console.log(gato);
var tartaruga = new animal_1.Animal();
tartaruga.definirDentes(0);
tartaruga.definirOlhos(2);
tartaruga.definirNome('Timoteo');
console.log(tartaruga);
var furao = new animal_1.Animal();
furao.definirDentes(0);
furao.definirOlhos(2);
furao.definirNome('Eustacio');
console.log(furao);
