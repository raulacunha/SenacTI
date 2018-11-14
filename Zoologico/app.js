"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
//definida uma variável que no caso é um objeto criado a 
//partir de uma classe(forma) no caso Animal
let toto = new animal_1.Animal();
toto.definirDentes(3);
//quando coloca o . voce pode acessar tudo o que 
//tem publico na classe animal
console.log(toto);
