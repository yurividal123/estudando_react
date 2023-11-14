import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/yurividal123/repos')
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
    }, []);

    return (
        <>
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            <ul>
                {repos.map(repositorio => (
                    <li key={repositorio.id}> <br />
                        <b>Nome</b> {repositorio.name} <br />
                        <b>LInguagem</b> {repositorio.language} <br />
                        <a target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
        </>
    )
}

export default ReposList;