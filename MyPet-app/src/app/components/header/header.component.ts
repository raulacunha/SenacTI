import { Component } from '@angular/core'

@Component({
    //selector é o nome que eu quero para o meu componente
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    //string interpolation
    teste: string = 'Massa'
    
}