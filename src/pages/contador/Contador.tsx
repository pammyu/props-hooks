import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState<number>(0);

  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O valor inicial do contador é: {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Incrementar</button>
      <button onClick={() => setValor(0)}>Resetar</button>
    </div>
  )
}

export default Contador