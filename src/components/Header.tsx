import React from 'react';



const Header: React.FC = () =>{
  return (
    <header className="bg-dark_green text-white p-4 fixed rounded-b-3xl w-full">
    <nav className="flex justify-between items-center w-full">
      <div className="flex justify-center gap-8 w-full">
        <a href="#inicio" className="text-lg font-semibold hover:text-primary_color">
          Início
        </a>
        <a href="#historia" className="text-lg font-semibold hover:text-primary_color">
          Minha História
        </a>
        <a href="#experiencia" className="text-lg font-semibold hover:text-primary_color">
          Experiências
        </a>
        <a href="#contato" className="text-lg font-semibold hover:text-primary_color">
          Contato
        </a>
      </div>
      <a href="#entrar" className="text-lg font-semibold hover:text-primary_color ml-auto">
        Entrar
      </a>
    </nav>
  </header>

  );

};

export default Header;