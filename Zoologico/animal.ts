export class Animal{
    private quantidadeDeDentes: number
    private quantidadeDeOlhos: number
    private nomeDoAnimal: string
    
    //constructor da minha classe
    //Para que animal seja criada quero que defina quantidade de dentes e olhos

    constructor(qtdDentes: number, qtdDeOlhos: number, nomeAnimal: string){
        this.quantidadeDeDentes = qtdDentes
        this.quantidadeDeOlhos = qtdDeOlhos
        this.nomeDoAnimal = nomeAnimal
    }

    //public definirOlhos(qtdOlhos: number): void{
    //    this.quantidadeDeOlhos = qtdOlhos
    //}
    //public definirDentes(qtdDentes: number): void{
    //    this.quantidadeDeDentes = qtdDentes
    //}
    //public definirNome(nome: string): void{
    //    this.nomeDoAnimal = nome
    //}

}