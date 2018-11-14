import { Animal } from "./animal";

//definida uma variável que no caso é um objeto criado a 
//partir de uma classe(forma) no caso Animal

let toto = new Animal()
toto.definirDentes(3)
//quando coloca o . voce pode acessar tudo o que 
//tem publico na classe animal
toto.definirOlhos(2)
toto.definirNome('Led')
console.log(toto)

let gato = new Animal()
gato.definirDentes(20)
gato.definirOlhos(2)
gato.definirNome('Botas')
console.log(gato)

let tartaruga = new Animal()
tartaruga.definirDentes(0)
tartaruga.definirOlhos(2)
tartaruga.definirNome('Timoteo')
console.log(tartaruga)

let furao = new Animal()
furao.definirDentes(10)
furao.definirOlhos(2)
furao.definirNome('Eustacio')
console.log(furao)