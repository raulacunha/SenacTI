export class Animal{
    private quantidadeDeDentes: number
    private quantidadeDeOlhos: number
    
    //constructor da minha classe
    //Para que animal seja criada quero que defina quantidade de dentes e olhos

    constructor(qtdDentes: number, qtdDeOlhos: number){
        this.quantidadeDeDentes = qtdDentes
        this.quantidadeDeOlhos = qtdDeOlhos
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