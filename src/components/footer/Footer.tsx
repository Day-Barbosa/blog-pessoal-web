import { GithubLogo } from "@phosphor-icons/react"

function Footer() {
    let data = new Date().getFullYear()

    return (
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

export default Footer