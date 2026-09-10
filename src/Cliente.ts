import Endereco from "./Endereco.js";
import Telefone from "./Telefone.js";

export default class Cliente{
    public nome: string;
    public endereco: Endereco;
    public telefones: Set<Telefone>;
    private cpf: number;

    constructor(nome: string, cpf: number, endereco: Endereco){
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.cpf = cpf;
    }

    public getCpf(): number{
        return this.cpf;
    }
}