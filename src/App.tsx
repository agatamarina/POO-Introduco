
import './App.css'
import {Usuario} from './models/Usuario'
import {ContaBancaria} from './models/ContaBancaria'

function App() {
  const usuario1 = new Usuario('Ana', 25)  
  const usuario2 = new Usuario('Pedro', 89)  
  const usuario3 = new Usuario('Carlos', 11)

  const conta = new ContaBancaria(usuario2)

  conta.depositar(500.16)

  return (
    <>
     <p>{usuario1.apresentar()}</p>
     <p>{usuario2.apresentar()}</p>
     <p>{usuario3.apresentar()}</p>
     <p>R$ {conta.verSaldo()}</p>

    </>
  )
}

export default App
