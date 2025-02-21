import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import { MdModeEditOutline } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";

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
    const email = localStorage.getItem('email');
    if (user) {
      setIsLogged(true);
      setUserData((prevData) => ({
        ...prevData,
        email: email || '',
      }));
      fetchGitHubData(user);
    }
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('email');
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
    localStorage.getItem('story') || ''
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

      <section id='inicio' className='grid grid-cols-2 justify-center items-center  mt-28'>
        <div className='grid gap-4 justify-items-center'>
          <img
            src={userData.avatarUrl || ''}
            alt={userData.name}
            className='w-[260px] h-[260px] bg-black rounded-full'
          />
          <h1 className='text-[64px] font-extrabold'>{userData.username || ''}</h1>
          <p className='text-[25px] font-semibold'>{userData.location || ''}</p>
          <h1 className='text-[25px] font-semibold'>{localStorage.getItem('email') || ''}</h1>
        </div>

        <div className='grid gap-8 max-w-xl relative'>
          <h1 className='text-7xl'>Hello,<br /> I'm <span className='text-primary_color'>{userData.name || 'Fulano'}</span></h1>
          <p className='text-[#18191F] font-semibold'>Olá, meu nome é {userData.name || 'Usuário'} </p>
          <div className='flex'>
            <Button url={`https://github.com/${userData.username}`} label="GitHub" />
            <Button url="https://www.linkedin.com" label="Linkedin" />
          </div>

          {isEditing ? (
            <IoCheckmarkCircle 
              className='absolute top-4 right-8 w-10 h-10 text-white bg-card_color rounded-full p-2 hover:bg-primary_color cursor-pointer'
              onClick={handleSaveStory}
            />
          ) : (
            <MdModeEditOutline 
              className='absolute top-4 right-8 w-10 h-10 text-white bg-card_color rounded-full p-2 hover:bg-primary_color cursor-pointer'
              onClick={handleEditStory}
            />
          )}
        </div>
      </section>

      <article id='historia' className='bg-card_color max-w-[1240px] mx-auto rounded-3xl mt-36 p-16 relative'>
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

    <section id="experiencia" className="flex flex-col items-center bg-secondary_color mt-32 py-16 gap-16">
      <h1 className="text-center text-7xl text-white font-bold">Experiências</h1>
      <Card />
    </section>

      <Footer id="contato" />
    </div>
  );
};

export default Home;
