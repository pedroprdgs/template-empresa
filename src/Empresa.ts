import Endereco from "./Endereco.js";
import Cliente from "./Cliente.js";
import Telefone from "./Telefone.js";

export default class Empresa{
    public endereco: Endereco;
    public nomeFantasia: string;
    public razaoSocial: string;
    private cnpj: number;
    public clientes: Set<Cliente>;
    public telefones: Set<Telefone>

    constructor(endereco: Endereco, nomeFantasia: string, razaoSocial: string, cnpj: number, clientes: Set<Cliente>, telefones: Set<Telefone>){
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.clientes = clientes;
        this.telefones = telefones
    }

    public getCnpj(): number{
        return this.cnpj;
    }

    public detalhe(): string{
        let detalhes = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\nCNPJ: ${this.getCnpj()}\n${'-'.repeat(20)}\n`
        this.clientes.forEach(cliente => {
            detalhes += `Nome: ${cliente.nome}\n`;
            detalhes += `Estado: ${cliente.endereco.estado}\n`;
            detalhes += `cidade: ${cliente.endereco.cidade}\n`;
            detalhes += `rua: ${cliente.endereco.rua}\n`;
            detalhes += `numero: ${cliente.endereco.numero}\n`

            cliente.telefones.forEach(telefone => {
                detalhes += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`;
            });

             detalhes += '\n';
        });

        return detalhes;
    }
}