import { GithubLogo } from "@phosphor-icons/react"

import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {

    const data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

      let component: ReactNode

        if(usuario.token !== ''){

        component = (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Blog Pessoal | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse meu Github</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/Day-Barbosa" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

return  (
    <>
        {component}
    </>
)
}

export default Footer