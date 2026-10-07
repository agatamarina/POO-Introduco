export class Usuario {
  #nome: string;
  #idade: number;

  constructor(nome: string, idade: number) {
    this.#nome = nome;
    this.#idade = idade;
  }

  verNome(): string{
    return this.#nome;
  } 

  apresentar(): string {
    return `Olá, meu nome é ${this.#nome} e tenho ${this.#idade} anos.`;
  }
}