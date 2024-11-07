import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: React.FC = () => {


  return (
    <div className='bg-secondary_text'>
      <Header />

    <section className='grid grid-cols-2 items-center justify-items-center mt-28'>
      <div className='grid gap-4'>
      <img src="" alt="" className='w-[260px] h-[260px] bg-black rounded-full'/>
      <h1 className='text-7xl'>Patoxxx</h1>
      <p className='text-3xl'>Paraíba, SP</p>
      <h1 className='text-3xl'>felipepatoxx@gmail.com</h1>
      </div>

    <div className='grid gap-8'>
    <h1 className='text-7xl'>Hello,<br /> I'm Felipe Pato</h1>
    <p>Olá, meu nome é Felipe Pato e sou dev<br />
      há 24 anos, sou um senior experiente e <br />
      potente, sempre disposto a evoluir!</p>


    </div>
    </section>






    </div>
  );
};

export default Home;
