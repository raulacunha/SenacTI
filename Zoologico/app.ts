import { Animal } from "./animal";
import { Zoo } from "./zoologico";
import { anfibio } from "./anfibio";
import { ave } from "./aves";
import { mamifero } from "./mamifero";
import { peixes } from "./peixes";
import { platelminto } from "./platelmintos";
import { poriferos } from "./poriferos";
import { repteis } from "./repteis";

//definida uma variável que no caso é um objeto criado a 
//partir de uma classe(forma) no caso Animal

let conjunto: Array<Animal> = []

let toto = new Animal(1,2)
//toto.definirDentes(3)
//toto.definirOlhos(2)
//toto.definirNome('Led')
console.log(toto)

//quando coloca o . voce pode acessar tudo o que 
//tem publico na classe animal

let gato = new Animal(1,2)
//gato.definirDentes(20)
//gato.definirOlhos(2)
//gato.definirNome('Botas')
console.log(gato)

let tartaruga = new Animal(1,2)
//tartaruga.definirDentes(0)
//tartaruga.definirOlhos(2)
//tartaruga.definirNome('Timoteo')
console.log(tartaruga)

let furao = new Animal(1,2)
//furao.definirDentes(10)
//furao.definirOlhos(2)
//furao.definirNome('Eustacio')
console.log(furao)

conjunto.push(toto)
conjunto.push(gato)
conjunto.push(tartaruga)
conjunto.push(furao)

let zoologico = new Zoo(conjunto)
zoologico.definirEndereco('sapucaia')

let salamandra = new anfibio(2, 20, 0, 50, 19, 'Salamandra De Fogo', 'Amphibia', 'preta')
console.log(salamandra)

let papagaio = new ave(2, 0, 0, 20, 1, 'Amazona', 'Frutas e Vegetais', 'Amazona aestiva')
console.log(papagaio)

let humano = new mamifero(2, 26, 0, 206, 80, 'Joselino', 'Tudo', 'Homem sapien ou Mulheres sapien(meme da dilma njsnjsj)')
console.log(humano)

let carpa = new peixes(2, 0, 0, 20, 1, 'doce', 20, 'Cyprinidae')
console.log(carpa)

let platelmintao = new platelminto(0,0,0,0,'Turbellaria', 'Trocam células')
console.log(platelmintao)

let esponja = new poriferos(0, 0, 0, 0, 'assexuada', 'salgada')
console.log(esponja)

let jacare = new repteis(2, 50, 0, 40, 'jacarao', 'salgada')
console.log(jacare)

salamandra.definirNumeroDePatas(4)
salamandra.definirNumeroDeReceptoresAuditivos(2)
papagaio.definirAlturaMaximaDeVoo(20)
papagaio.definirNumeroDePatas(2)
papagaio.definirOrdem('Psittaciformes')
papagaio.definirTempoMaximoDeVoo(30)
humano.definirQuantidadeDeMamilos(2)
carpa.definirAlimentacao('Carnivoro')
carpa.definirQuantidadeDeNadadeiras(4)
esponja.definirClasseDoPorifero('Scleropongiae')
esponja.definirTipoDoPorifero('esponja')
platelmintao.definirEspecieDoPlatelminto('Turbellaria')
platelmintao.definirNomeDoPlatelminto('plato')
jacare.definirComprimentoDoReptil(5)
jacare.definirPesoDoReptil(230)


