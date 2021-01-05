import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionários/Gerente.js"
import {Diretor} from "./Funcionários/Diretor.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Thiago", 11122233301, "123456"); // cria um novo cliente, no caso este cliente é um objeto
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "123456");

const diretor = new Diretor("Mauro", 10000, 11122233390); 
diretor.cadastrarSenha("123456789"); // polimorfismo
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

const gerente = new Gerente("Thiago", 5000, 11122233380);
gerente.cadastrarSenha("987654321"); // polimorfismo
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "987654321");

console.log(clienteEstaLogado, diretorEstaLogado, gerenteEstaLogado)

// const contaCorrenteThiago = new ContaCorrente(cliente1, 1001); // cria uma nova conta corrente, no caso uma conta é um objeto
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1)

// contaCorrenteThiago.depositar(500);
// contaCorrenteThiago.sacar(100);

// contaPoupanca.depositar(500)
// contaPoupanca.sacar(100);

// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);

// console.log(contaCorrenteThiago);
// console.log(contaPoupanca);

// let valor = 300;
// const cliente2 = new Cliente("Marina", 22233344402); 
// const contaCorrenteMarina = new ContaCorrente(0, cliente2, 1001);
// contaCorrenteThiago.transferir(valor, contaCorrenteMarina);

// contaCorrenteThiago.sacar(x); como chamamos a função
// contaCorrenteThiago.depositar(y);

// classes são como moldes utilizadas quando precisamos repetir uma mesma tarefa 
// variáveis do tipo const não recebem outros valores