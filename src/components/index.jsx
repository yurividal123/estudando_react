import './Perfil/perfil.css'

const Perfil = () => {
    const usuario = {
        nome: 'Yuri Vidal',
        avatar: 'https://github.com/yurividal123.png'
    }
    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;