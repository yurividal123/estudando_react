import { useState } from "react";

import Perfil from "./components";
import Formulario from "./components/formukario";
import ReposList from "./components/ReposList";




function App() { 
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
    <Perfil nome="Yuri" endereco="https://github.com/yurividal123.png" />
    <ReposList />
    {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>

  )
}

export default App
