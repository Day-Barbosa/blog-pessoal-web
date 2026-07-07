import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import IMG_1324 from "../../assets/IMG_1324.jpg"

function Perfil (){
    const navigate = useNavigate()
    const { usuario } = useContext(AuthContext)

    useEffect(()=> {
        if (usuario.token === ''){
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [usuario.token])

    return (
        <div className="flex justify-center mx-4">
            <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
                <img className="w-full h-72 object-cover border-b-8 border-white" src={IMG_1324} alt="Capa do perfil" />
                <img className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10" src={usuario.foto || 'https://i.imgur.com/WxNkK7J.png'} alt={`Foto de perfil de ${usuario.nome}`} />

                <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center rounded-2xl">
                    <p>Nome: {usuario.nome}</p>
                    <p>Email: {usuario.usuario}</p>
                </div>
            </div>
        </div>
    )
}

export default Perfil