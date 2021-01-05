import { Conta } from "./Conta.js";

// a propriedade "extends", extende a conta corrente utilizando dados da conta

export class ContaCorrente extends Conta{ // será nosso molde para cadastro de contas https://github.com/tc39/proposal-class-fields#private-fields
    static numeroDeContas = 0; // atributo estático, para podermos somar no número de contas, sempre será somado um e não será criado um novo valor
    constructor(cliente, agencia){
        super(0, cliente, agencia); // chama o construtor da classe pai
        ContaCorrente.numeroDeContas += 1; // temos que acessar a conta corrente como um todo para nosso atributo estático
    }

    // sobrescrevendo o comportamento de sacar
    sacar(valor){ // método ou função
        let taxa = 1.1;
        return this._sacar(valor, taxa); // vai utilziar o método de saque definido lá na classe conta
    }

    // a propriedade extends vai pegar nossos módulos de transferir
    // sacar e depositar da nossa classe Conta
    
    // essa propriedade extends é a herança, no caso Conta Corrente
    // irá herdar as propriedades e métodos da classe Conta

    // nem sempre o super chama o construtor
    // o super faz referência pra classe mãe em que estamos extendendo 

    // o super pode sobrescrever alguma função
    // essa sobrescrita sever para especializar o código

}