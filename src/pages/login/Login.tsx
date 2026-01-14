import { useState } from "react";
import Home from "../home/Home";

function Login() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <>
      {
        isLogged ? (
          <Home titulo='Está acabando' texto='vai dar bom! Eu acho...' />
        ) : (
          <div>
            <h2>Login</h2>
            <button onClick={() => setIsLogged(true)}>Logar</button>
          </div>
        )
      }
    
    </>
  )
}

export default Login