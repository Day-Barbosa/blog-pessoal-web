function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
      <div className="container flex justify-between text-lg mx-8">
        <div>Blog Pessoal</div>
        <div className="flex gap-4">
          <div>Postagens</div>
          <div>Temas</div>
          <div>Cadastrar tema</div>
          <div>Perfil</div>
          <div>Sair</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
