import { Pessoa } from "./pessoa";

export class Conta extends Pessoa {

    numeroDeconta: number;
    saldo: number;

    constructor(n: string,a: string, i: number, g: string , ndc: number, s: number){
        super(n, a, i);
        this.numeroDeconta = ndc;
        this.saldo = s;
    }

}