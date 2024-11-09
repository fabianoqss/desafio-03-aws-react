import React from 'react';


const Card: React.FC = () =>{

  return (
    <div className='bg-card_color mt-6 grid max-w-sm p-8 gap-4 rounded-[20px] shadow-custom-offset pb-48'>
      <h1 className='text-3xl text-white'>Título</h1>
      <p className='text-xl text-tertiary_text'>Junho - 2002 - 2020</p>
      <div className='flex gap-3 '>
        <p className='text-white bg-dark_green p-2 rounded'>TypeScript</p>
        <p className='text-white bg-dark_green p-2 rounded'>Angular</p>
        <p className='text-white bg-dark_green p-2 rounded'>Vue.JS</p>
      </div>

      <p className='text-left text-white text-xl '>
      Trabalhei com figma na nasa construindo designs de foguetes usando figma pro Elon Musk
      </p>


    </div>
  )
}

export default Card;