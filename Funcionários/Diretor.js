import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        this._bonificacao = 2;
    }
}

// o polimorfismo: "objeto que é tratado de varias formas"