export class Pessoa {
    public nome: string;
    public apelido: string;
    public idade: number;


    constructor(n: string, a: string, i: number){
        this.nome = n;
        this.apelido = a;
        this.idade = i;
    }  
    
    // public get nome(){
    //     return this._nome;
    // } 

    // public set nome(nome: string){
    //     this._nome = nome;
    // }

}