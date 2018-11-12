export class arma{
    private calibre: string
    private marca: string
    private tipo: string
    protected capacidade: number
    protected projeteisNoPente: number

    constructor(projeteis: number, capacidade: number){
        this.capacidade = capacidade
        this.projeteisNoPente = projeteis
    }

    public atirar(n:number = 1): void{
        if (this.projeteisNoPente == 0){
            console.log('Não há balas, por favor recarregue')
        }
        else {
        this.projeteisNoPente = this.projeteisNoPente - n
        console.log('bang!')
        }
    }
    public recarregar(): void{
        this.projeteisNoPente = this.capacidade
    }

    public informarBalas(): number{
        console.log(this.projeteisNoPente)
        return this.projeteisNoPente
    }
}

