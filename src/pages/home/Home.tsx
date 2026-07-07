import ListaPostagens from '../../components/postagem/listapostagens/ListaPostagens'
import ModalPostagem from '../../components/postagem/modalpostagem/ModalPostagem'
import IMG_4213 from '../../assets/IMG_4213.jpg';

function Home() {
  return (
    <>
      <div 
        className="relative flex justify-center items-center min-h-[50vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(${IMG_4213})` }}
      >
        <div className="absolute inset-0 bg-indigo-900/40"></div>
        
        <div className="relative z-10 container text-white flex flex-col items-center justify-center text-center py-16">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Seja Bem Vinde!
          </h2>
          <p className="text-xl mb-8 drop-shadow-md font-medium">
            Expresse aqui seus pensamentos e opiniões
          </p>
          <div className="flex justify-around gap-4">
            <ModalPostagem />
          </div>
        </div>
      </div>
      
      <ListaPostagens />
    </>
  )
}

export default Home