export class Pessoa {
    protected _nome: string;
    apelido: string;
    idade: number;
    genero: string

    constructor(n: string, a: string, i: number, g: string){
        this._nome = n;
        this.apelido = a;
        this.idade = i;
        this.genero = g;
    }  
    
public get nome_(){
    return this._nome;
} 
}