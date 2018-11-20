"use strict";
exports.__esModule = true;
var animal_1 = require("./animal");
var zoologico_1 = require("./zoologico");
var anfibio_1 = require("./anfibio");
var aves_1 = require("./aves");
var mamifero_1 = require("./mamifero");
var peixes_1 = require("./peixes");
var platelmintos_1 = require("./platelmintos");
var poriferos_1 = require("./poriferos");
var repteis_1 = require("./repteis");
//definida uma variável que no caso é um objeto criado a 
//partir de uma classe(forma) no caso Animal
var conjunto = [];
var toto = new animal_1.Animal(1, 2);
//toto.definirDentes(3)
//toto.definirOlhos(2)
//toto.definirNome('Led')
console.log(toto);
//quando coloca o . voce pode acessar tudo o que 
//tem publico na classe animal
var gato = new animal_1.Animal(1, 2);
//gato.definirDentes(20)
//gato.definirOlhos(2)
//gato.definirNome('Botas')
console.log(gato);
var tartaruga = new animal_1.Animal(1, 2);
//tartaruga.definirDentes(0)
//tartaruga.definirOlhos(2)
//tartaruga.definirNome('Timoteo')
console.log(tartaruga);
var furao = new animal_1.Animal(1, 2);
//furao.definirDentes(10)
//furao.definirOlhos(2)
//furao.definirNome('Eustacio')
console.log(furao);
conjunto.push(toto);
conjunto.push(gato);
conjunto.push(tartaruga);
conjunto.push(furao);
var zoologico = new zoologico_1.Zoo(conjunto);
zoologico.definirEndereco('sapucaia');
var salamandra = new anfibio_1.anfibio(2, 20, 0, 50, 19, 'Salamandra De Fogo', 'Amphibia', 'preta');
console.log(salamandra);
var papagaio = new aves_1.ave(2, 0, 0, 20, 1, 'Amazona', 'Frutas e Vegetais', 'Amazona aestiva');
console.log(papagaio);
var humano = new mamifero_1.mamifero(2, 26, 0, 206, 80, 'Joselino', 'Tudo', 'Homem sapien ou Mulheres sapien(meme da dilma njsnjsj)');
console.log(humano);
var carpa = new peixes_1.peixes(2, 0, 0, 20, 1, 'doce', 20, 'Cyprinidae');
console.log(carpa);
var platelmintao = new platelmintos_1.platelminto(0, 0, 0, 0, 'Turbellaria', 'Trocam células');
console.log(platelmintao);
var esponja = new poriferos_1.poriferos(0, 0, 0, 0, 'assexuada', 'salgada');
console.log(esponja);
var jacare = new repteis_1.repteis(2, 50, 0, 40, 'jacarao', 'salgada');
console.log(esponja);
salamandra.definirNumeroDePatas(4);
salamandra.definirNumeroDeReceptoresAuditivos(2);
papagaio.definirAlturaMaximaDeVoo(20);
papagaio.definirNumeroDePatas(2);
papagaio.definirOrdem('Psittaciformes');
papagaio.definirTempoMaximoDeVoo(30);
humano.definirQuantidadeDeMamilos(2);
carpa.definirAlimentacao('Carnivoro');
carpa.definirQuantidadeDeNadadeiras(4);
esponja.definirClasseDoPorifero('Scleropongiae');
esponja.definirTipoDoPorifero('esponja');
platelmintao.definirEspecieDoPlatelminto('Turbellaria');
platelmintao.definirNomeDoPlatelminto('plato');
jacare.definirComprimentoDoReptil(5);
jacare.definirPesoDoReptil(230);
