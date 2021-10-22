import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SitemaAutenticacao } from "./SitemaAutenticacao.js";

const diretor = new Diretor("Rodigo", 10000, 26739002384);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Pedro", 8000, 73395844301);
gerente.cadastrarSenha("123456");

const cliente = new Cliente("Lais", 37299483374, "456");

const diretorEstaLogado = SitemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SitemaAutenticacao.login(gerente, "123456");
const clienteEstaLogado = SitemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
