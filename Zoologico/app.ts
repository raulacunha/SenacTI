import { Animal } from "./animal";
import { Zoo } from "./zoologico";

//definida uma variável que no caso é um objeto criado a 
//partir de uma classe(forma) no caso Animal

let conjunto: Array<Animal> = []

let toto = new Animal(1,2,'led')
//toto.definirDentes(3)
//toto.definirOlhos(2)
//toto.definirNome('Led')
console.log(toto)

//quando coloca o . voce pode acessar tudo o que 
//tem publico na classe animal

let gato = new Animal(1,2,'botas')
//gato.definirDentes(20)
//gato.definirOlhos(2)
//gato.definirNome('Botas')
console.log(gato)

let tartaruga = new Animal(1,2,'timoteo')
//tartaruga.definirDentes(0)
//tartaruga.definirOlhos(2)
//tartaruga.definirNome('Timoteo')
console.log(tartaruga)

let furao = new Animal(1,2,'eustacio')
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