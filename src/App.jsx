import { useState } from "react";

import Perfil from "./components";
import Formulario from "./components/formukario";




function App() { 
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
    <Perfil nome="Yuri" endereco="https://github.com/yurividal123.png" />

    {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>

  )
}

export default App
