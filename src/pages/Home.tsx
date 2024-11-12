import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import { MdModeEditOutline } from "react-icons/md";

const Home: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    location: '',
    avatarUrl: '',
    username: ''
  });

  const fetchGitHubData = async (username: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log("Reposta da API DO GIT: ", response)
      setUserData({
        name: response.data.name,
        email: response.data.email || '',
        location: response.data.location || '',
        avatarUrl: response.data.avatar_url,
        username: response.data.login
      });
    } catch (error) {
      console.error('Erro ao buscar dados do GitHub:', error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      setIsLogged(true);
      fetchGitHubData(user); 
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

  const [isEditing, setIsEditing] = useState<boolean>(false); 
  const [story, setStory] = useState<string>(
    ''
  );

  const handleEditStory = () => {
    setIsEditing(true);
  };
  
  const handleSaveStory = () => {
    localStorage.setItem('story', story);
    setIsEditing(false);
  };


  return (
    <div className='bg-secondary_text'>
      <Header isLogged={isLogged} handleLogout={handleLogout} />

      <section className='grid grid-cols-2 justify-center items-center  mt-28'>
        <div className='grid gap-4 justify-items-center'>
          <img
            src={userData.avatarUrl || ''}
            alt={userData.name}
            className='w-[260px] h-[260px] bg-black rounded-full'
          />
          <h1 className='text-6xl'>{userData.username || ''}</h1>
          <p className='text-2xl'>{userData.location || ''}</p>
          <h1 className='text-2xl'>{userData.email || ''}</h1>
        </div>

        <div className='grid gap-8 max-w-xl relative'>
          <h1 className='text-7xl'>Hello,<br /> I'm <span className='text-primary_color'>{userData.name || 'Fulano'}</span></h1>
          <p>Olá, meu nome é {userData.name || 'Usuário'} e sou dev há 24 anos, sou um senior experiente e potente, sempre disposto a evoluir!</p>
          <div className='flex'>
            <Button url={`https://github.com/${userData.username}`} label="GitHub" />
            <Button url="https://www.linkedin.com" label="Linkedin" />
          </div>
          <MdModeEditOutline 
          className='absolute top-4 right-8 w-10 h-10 text-white bg-card_color rounded-full p-2 hover:bg-primary_color cursor-pointer'
         onClick={isEditing ? handleSaveStory : handleEditStory} 
         />
        </div>
      </section>

      <article className='bg-card_color max-w-[1240px] mx-auto rounded-3xl mt-36 p-16 relative'>
  <h1 className='text-7xl text-white'>Minha História</h1>
  {isEditing ? (
    <textarea
      value={story}
      onChange={(e) => setStory(e.target.value)}
      onInput={(e) => {
        const target = e.target as HTMLTextAreaElement;
        target.style.height = 'auto';
        target.style.height = `${target.scrollHeight}px`; 
      }}
      placeholder='Adicione sua historia'
      className="text-white mt-16 bg-transparent w-full text-xl p-4 rounded outline-none resize-none border-0 focus:ring-0"
    />
    ) : (
    <p className='text-white mt-16'>{story}</p>
    )}
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
