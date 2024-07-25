import { Pessoa } from "./pessoa";

export class Funcionario extends Pessoa{
    
    numeroDeConta: number;
    salario: number;

    constructor(n: string, a: string, i: number, g: string ,ndc: number, s: number){
        super(n,a,i)
        this.numeroDeConta = ndc;
        this.salario = s;
    }

}