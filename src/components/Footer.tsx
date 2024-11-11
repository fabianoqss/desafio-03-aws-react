import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

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
    console.log(`URL for ${selectedPlatform}: ${url}`);
    closeModal();
  };

  return (
    <footer className='grid justify-center gap-12 pt-32 gap-16 pb-16'>
      <h1 className='text-4xl font-bold text-center text-dark_green'>Assim que possível, me envie um email para que possamos <br /> trabalhar felizes juntos!</h1>

      <div className='flex items-center gap-5 justify-center'>
        <FaInstagram onClick={() => openModal('Instagram')} className="w-6 h-6 text-pink-500 hover:text-pink-700 cursor-pointer" />
        <FaFacebook onClick={() => openModal('Facebook')} className="w-6 h-6 text-blue-600 hover:text-blue-800 cursor-pointer" />
        <FaTwitter onClick={() => openModal('Twitter')} className="w-6 h-6 text-blue-400 hover:text-blue-600 cursor-pointer" />
        <FaYoutube onClick={() => openModal('YouTube')} className="w-6 h-6 text-red-600 hover:text-red-800 cursor-pointer" />
      </div>

      <div className='flex items-center gap-20 justify-center'>
        <p className='flex items-center gap-1 text-xl'>Brasil</p>
        <p className='text-xl'>© 2024, All Rights By Compass UOL</p>
      </div>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        contentLabel="Adicionar URL"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar URL para {selectedPlatform}</h2>
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder={`Digite a URL do ${selectedPlatform}`}
        />
        <button onClick={handleSaveUrl}>Salvar</button>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </footer>
  );
};

export default Footer;
