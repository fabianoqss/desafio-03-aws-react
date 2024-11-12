import React, { useState } from 'react';
import Modal from 'react-modal';
import instaIcon from '../assets/insta-black.svg';
import facebookIcon from '../assets/facebook-black.svg';
import twitterIcon from '../assets/twitter-black.svg';
import youtubeIcon from '../assets/youtube-black.svg';
import { MdLocationOn } from "react-icons/md";

Modal.setAppElement('#root');

const Footer: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [url, setUrl] = useState('');

  const openModal = (platform: string) => {
    setSelectedPlatform(platform);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPlatform(null);
    setUrl('');
  };

  const handleSaveUrl = () => {
    if (selectedPlatform) {
      localStorage.setItem(`url_${selectedPlatform}`, url);
      console.log(`URL para ${selectedPlatform}: ${url} foi salva`);
    }
    closeModal();
  };

  return (
    <footer className='grid justify-center  pt-32 gap-16 pb-16'>
      <h1 className='text-4xl font-bold text-center text-dark_green'>Assim que possível, me envie um email para que possamos <br /> trabalhar felizes juntos!</h1>

      <div className='flex items-center gap-5 justify-center'>
      <div className="w-16 h-16 bg-dark_green rounded-full flex items-center justify-center">
      <img src={instaIcon} alt="Instagram" onClick={() => openModal('Instagram')} className="w-16 h-16 cursor-pointer" />
        </div>

        <div className="w-16 h-16 bg-dark_green rounded-full flex items-center justify-center">
      <img src={facebookIcon} alt="Instagram" onClick={() => openModal('Instagram')} className="w-16 h-16 cursor-pointer" />
        </div>

        <div className="w-16 h-16 bg-dark_green rounded-full flex items-center justify-center">
      <img src={twitterIcon} alt="Instagram" onClick={() => openModal('Instagram')} className="w-16 h-16 cursor-pointer" />
        </div>

      <div className="w-16 h-16 bg-dark_green rounded-full flex items-center justify-center">
      <img src={youtubeIcon} alt="Instagram" onClick={() => openModal('Instagram')} className="w-16 h-16 cursor-pointer" />
        </div>
      </div>

      <div className='flex items-center gap-20 justify-center'>
        <p className='flex items-center gap-1 text-xl gap-3'><MdLocationOn className='text-primary_text'/>
        Brasil</p>
        <p className='text-xl'>© 2024, All Rights By Compass UOL</p>
      </div>

      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Adicionar URL"
  className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-16 max-w-3xl w-full mt-16 gap-8"
  overlayClassName="fixed inset-0 bg-tertiary_text bg-opacity-75 flex items-center justify-center"
>
  <h2 className="text-5xl font-semibold mb-4 text-left">Adicionar link</h2>
  
  <input
    type="text"
    placeholder="Digite a URL"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    className="border border-gray-300 p-3 w-full rounded-md mb-4"
  />
  
  <div className="flex gap-4 w-full">
    <button onClick={closeModal} className="bg-white text-dark_green border-[1px] border-dark_green py-3 px-8 rounded-lg w-full hover:bg-red">
      Cancelar
    </button>
    <button onClick={handleSaveUrl} className="bg-dark_green text-white py-3 px-8 rounded-lg w-full hover:bg-primary_color">
      Salvar
    </button>
  </div>
</Modal>
    </footer>
  );
};

export default Footer;
