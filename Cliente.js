export class Cliente{ // será nosso molde para cadastro de clientes

    get cpf(){
        return this._cpf; // não daremos um assessor para que o cpf possa ser atribuido diretamente
    }

    constructor(nome, cpf, senha){ // construtores -> cadastra o nome e o cpf
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
}