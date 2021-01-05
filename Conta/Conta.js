// Classe abstrata, ou seja, ela é criada para poder ser herdada. Não a instanciamos diretamente

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata"); // lança um erro que para a execução do programa
        }
        
        this._saldo = saldoInicial; // é uma boa prática declarar os atributgos dentro do método da classe
        this._cliente = cliente; // podemos utilizar os acessores que estão dentro da classe
        this._agencia = agencia; // o underline foi uma convenção para declarar que este atributo é privado
                                 // será permitido a alteração, entretanto não é o certo a se fazer
                                 // caso haja o underline, apenas não altere nada sem autorização
                                 // é uma boa prática declarar os atributos dentro do método da classe
    }
    
    // encapsulamento
    set cliente(novoValor){ // assessor de atribuição
        if(novoValor instanceof Cliente){ // fazemos uma instância, para só permitir atribuição se realmente for passado um cliente como valor
            this._cliente = novoValor;
        }
    }
    
    get cliente(){
        return this._cliente;
    }

    get saldo(){ // assessor de acesso
        return this._saldo;
    }

    
    sacar(valor){ // método ou função
        // let taxa = 1;
        // return this._sacar(valor,taxa); // utilizamos o this para chamar o método neste caso
        // deixamos o sacar vazio para que as classes especializadas sobrescrevam o metodo sacar
        // este metodo é um método abstrato, ou seja, tem a mesma ideia das classes abstratas
        throw new Error("O método sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){ // utiliza qualquer conta corrente
            this._saldo -= valorSacado; // no caso ele utiliza a conta que estivermos mexendo
            return valorSacado; // retorna o valor sacado | quando o return for ativado a função é terminada
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0) return; // tecnica chamada de early return, utilizada para melhorar a legibilidade 
        this._saldo += valor;
    }

    transferir(valor, conta){ // precisamos saber o valor e para quem este valor será transferido | um objeto foi passado como parâmetro
        const valorSacado = this.sacar(valor); // vamos retirar o valor da nossa conta
        conta.depositar(valorSacado);
    }

    // #saldo; atributo | a cerquilha é um método em estudo para declarar atributos privados 

}