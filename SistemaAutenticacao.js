export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && // se a chave "autenticar" existe dentro do objeto autenticavel
         autenticavel.autenticar instanceof Function; 
    }
}

// o JS só se interessa se estamos utilizando as propriedades/metodos corretos

// ser autenticavel significa ter o método "senha"

// ducky type é utilizado em linguagens que são fracamente tipadas