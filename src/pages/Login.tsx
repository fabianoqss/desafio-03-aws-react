import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";


const Login: React.FC = () =>{
  return (
    <div>
  <div className='flex justify-center items-center min-h-screen bg-secondary_text flex-col gap-6'>
    <h1 className='text-4xl font-bold'>Digite o nome de usuário que deseja buscar</h1>

    <form className='flex w-full max-w-[748px] gap-5'>
      <input
        type="text"
        placeholder="Digite o nome de usuário"
        className="w-full h-[56px] p-2 border border-primary_text rounded-2xl placeholder:text-2xl box-border pl-5 pb-2"
      />
      <button
        type="submit"
        className="bg-tertiary_text text-white px-6 py-2  border border-primary_text rounded-2xl"
      >
        <FaArrowRight className='w-10 h-10'/>
      </button>
    </form>

    <div className="flex items-center gap-3 max-w-[748px]">
      <div className="bg-secondary_color w-[350px] h-[5px]"></div> 

      <span className="text-2xl font-medium">ou</span> 

      <div className="bg-secondary_color w-[350px] h-[5px]"></div>
    </div>

    <div className="flex items-center gap-3">
      <span className='text-2xl font-bold'> Acesse sua conta com </span>
      <a
        href="https://github.com/login"
        target="_blank"  
        rel="noopener noreferrer"  
        className="bg-dark_green text-xl text-secondary_text px-6 py-3 rounded-2xl flex items-center gap-3"
      >
        <TbBrandGithubFilled className='w-6 h-6'/> Github
      </a>
    </div>
  </div>
</div>

  )
}



export default Login;