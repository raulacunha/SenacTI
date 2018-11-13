export class pessoa{
    protected nome: string
    protected idade: number
    protected telefone: number

    constructor(NomePessoa: string, IdadePessoa: number, TelPessoa: number){
        this.nome = NomePessoa
        this.idade = IdadePessoa
        this.telefone = TelPessoa
    }
    
    public logar(): void{
        this.nome = 'raul'
        if(this.nome == 'raul'){
            console.log('Logado!')
        }
    }

    public deslogar(): void{

    }

    public ConsultarAgenda(): void{

    }
}