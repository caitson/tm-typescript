import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa{
    numeroDeConta: number;

    constructor(n: string, a: string, i: number, g: string ,ndc: number){
        super(n,a,i,g)
        this.numeroDeConta = ndc;
    }
}