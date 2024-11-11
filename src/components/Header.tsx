import React from 'react';
import { IoEnterOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLogged: boolean;
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({isLogged, handleLogout}) =>{
  return (
    <header className="bg-dark_green text-white p-4  rounded-b-3xl w-full">
    <nav className="flex justify-between items-center w-full">
      <div className="flex justify-center gap-8 w-full">
        <a href="#inicio" className="text-2xl font-semibold hover:text-primary_color">
          Início
        </a>
        <a href="#historia" className="text-2xl font-semibold hover:text-primary_color">
          Minha História
        </a>
        <a href="#experiencia" className="text-2xl font-semibold hover:text-primary_color">
          Experiências
        </a>
        <a href="#contato" className="text-2xl font-semibold hover:text-primary_color">
          Contato
        </a>
      </div>
      {isLogged ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-2xl font-semibold hover:text-primary_color mr-2"
          >
            Sair
          </button>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-3 text-2xl font-semibold hover:text-primary_color mr-2"
          >
            <IoEnterOutline className="h-8 w-8 mt-0.5" />
            Entrar
          </Link>
        )}
      </nav>
    </header>


  );

};

export default Header;