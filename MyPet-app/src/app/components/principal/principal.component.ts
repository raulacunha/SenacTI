import { Component } from '@angular/core'

@Component({
    //selector é o nome que eu quero para o meu componente
    selector: 'principal',
    templateUrl: './principal.component.html'
})

export class PrincipalComponent {
    //property binding
    imagem: string = '/assets/img/dory.jpg'
    //property binding
    exibirImagem(): void{
        //estou verificando se existe
        //o diretorio de imagem (se ela existe)
        if(this.imagem == ''){
            //caso nao exista eu defino um para ele
            this.imagem = '/assets/img/dory.jpg'
        }
        else {
        //caso sim, deixa em branco
        this.imagem = ''
        }
    }
    text1: string = 'Olá Mundo'
    text2: string = ''
    
    dispararNoConsole(valor: Event): void{
        console.log((<HTMLInputElement>valor.target).value)
        this.text2 = (<HTMLInputElement>valor.target).value
        }
}