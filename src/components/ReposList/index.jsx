import { useEffect, useState } from "react";

import styles from '../ReposList/ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}> <br />
                    <div className={styles.itemName}>
                        <b>Nome</b>
                        {repositorio.name} 
                    </div>
                    <div className={styles.IemLanguagem}>
                    <b>LInguagem</b> 
                    {repositorio.language}
                    </div>
                        <a className={styles.ItemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
            )}
        </div>
    )
}

export default ReposList;