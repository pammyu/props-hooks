import { useState } from "react";
import Home from "../home/Home";

function Login() {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <>
      {
        isLogged ? (
          <Home titulo='Parabéns!' texto='Agora você está logado! :)' />
        ) : (
          <div>
            <h2>Login</h2>
            <p>Você ainda não está logado</p>
            <button onClick={() => setIsLogged(true)}>Logar</button>
          </div>
        )
      }
    
    </>
  )
}

export default Login