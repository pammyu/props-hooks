import { useEffect, useState } from "react";

function Tarefa() {
  const [completed, setCompleted] = useState<boolean>(false);
  const [tarefa, setTarefa] = useState<string>('');
  
  useEffect(() =>{
    if (completed) {
      setTarefa('Tarefa concluída!');
    } 
  }, [completed]);
  
  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir</button>
    </div>
  )
}

export default Tarefa