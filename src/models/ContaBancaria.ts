import {Usuario} from "./Usuario";

// src/models/ContaBancaria.ts
export class ContaBancaria {
  #saldo: number;
  #titular: Usuario; 

  constructor(usuario: Usuario) {
    this.#saldo = 0;
    this.#titular = usuario;
  }

  depositar(valor: number) {
    if (valor > 0) {
      this.#saldo += valor;
    }
  }

  sacar(valor: number) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    }
  }

  verSaldo(): string {
    return "O usuario " + this.#titular.verNome() + " tem " + this.#saldo + " reais";
  }
}