import { useState } from "react";

import Perfil from "./components";
import Formulario from "./components/formukario";
import ReposList from "./components/ReposList";




function App() { 
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
    <Perfil nomeUsuario="yurividal123" />
    <ReposList />
    {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>

  )
}

export default App
