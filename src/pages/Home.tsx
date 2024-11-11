import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Home: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    location: '',
    avatarUrl: '',
    username: ''
  });

  // Função para buscar dados do usuário na API do GitHub
  const fetchGitHubData = async (username: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData({
        name: response.data.name,
        email: response.data.email || 'Não disponível',
        location: response.data.location || 'Não disponível',
        avatarUrl: response.data.avatar_url,
        username: response.data.login
      });
    } catch (error) {
      console.error('Erro ao buscar dados do GitHub:', error);
    }
  };

  useEffect(() => {
    // Recupera o usuário do localStorage
    const user = localStorage.getItem('user');
    if (user) {
      const { username } = JSON.parse(user);
      setIsLogged(true);
      fetchGitHubData(username); // Chama a função para buscar os dados do GitHub
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLogged(false);
    setUserData({
      name: '',
      email: '',
      location: '',
      avatarUrl: '',
      username: ''
    });
  };

  return (
    <div className='bg-secondary_text'>
      <Header isLogged={isLogged} handleLogout={handleLogout} />

      <section className='grid grid-cols-2 items-center justify-items-center mt-28'>
        <div className='grid gap-4'>
          <img
            src={userData.avatarUrl || ''}
            alt={userData.name}
            className='w-[260px] h-[260px] bg-black rounded-full'
          />
          <h1 className='text-7xl'>{userData.name || 'Nome não disponível'}</h1>
          <p className='text-3xl'>{userData.location || 'Localização não disponível'}</p>
          <h1 className='text-3xl'>{userData.email || 'Email não disponível'}</h1>
        </div>

        <div className='grid gap-8'>
          <h1 className='text-7xl'>Hello,<br /> I'm {userData.name || 'Usuário'}</h1>
          <p>Olá, meu nome é {userData.name || 'Usuário'} e sou dev há 24 anos, sou um senior experiente e potente, sempre disposto a evoluir!</p>
          <div className='flex'>
            <Button url={`https://github.com/${userData.username}`} label="GitHub" />
            <Button url="https://www.linkedin.com" label="Linkedin" />
          </div>
        </div>
      </section>

      <article className='bg-card_color max-w-[1240px] mx-auto rounded-3xl mt-36 p-16'>
        <h1 className='text-7xl text-white'>Minha História</h1>
        <p className='text-white mt-16'>
          Olá, eu sou Felipe Pato e comecei minha carreira trabalhando em um pequeno escritório na California para meu chefe Elon Musk...
        </p>
      </article>

      <section className='grid justify-center bg-secondary_color mt-32 py-16'>
        <h1 className='text-center text-7xl text-white font-bold'>Experiências</h1>
        <div className='grid grid-cols-2 justify-center gap-8'>
          <Card />
          <Card />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
