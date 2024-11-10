import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button';
import Card from '../components/Card';

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
      <div className='flex'>
      <Button url="https://github.com/seuusername" label="GitHub" />
      <Button url="https://github.com/seuusername" label="Linkedin" />
      </div>
    </div>
    </section>


    <article className='bg-card_color max-w-[1240px] mx-auto rounded-3xl mt-36 p-16'>
    <h1 className='text-7xl text-white '>Minha História</h1>
    <p className='text-white mt-16'>Olá, eu sou Felipe Pato e comecei minha carreira trabalhando em um pequeno escritório na California  para meu chefe Elon Musk, fui demitido 2 dias depois por commitar errado e apagar o repositório da  empresa. Voltei então a trabalhar de casa criando sites de Yoga para idosos, ganhando muito dinheiro  no processo, esses sites eram desenvolvidos usando Fortro e Cobol, ao qual aprendi com meu tio  Jhon. No entanto, essa forma de fazer sites não durou muito com o advento das IAs, foi então que  decidi estudar muito e acabei passando no processo seletivo da cicada 3301, me tornando assim um  grande dev da minha area, hoje trabalho espionando hackers e destruindo governos, eu sou Felipe Pato!</p>

    </article>

    <section className='grid justify-center bg-secondary_color mt-32 py-16'>
      <h1 className='text-center text-7xl text-white font-bold'>Experiências</h1>

      <div className='grid grid-cols-2 justify-center gap-8'>
      <Card />  
      <Card /> 
      </div>
      </section>    

    <Footer/>
    </div>
  );
};

export default Home;
