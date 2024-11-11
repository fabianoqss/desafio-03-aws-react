import React, { useState } from 'react';
import { MdLocationOn } from "react-icons/md";

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Link adicionado: ${link}`);
    closeModal();
  };

  return (
    <footer className='grid justify-center gap-12 pt-32 gap-16 pb-16'>
      <h1 className='text-4xl font-bold text-center text-dark_green'>
        Assim que possível, me envie um email para que possamos <br /> trabalhar felizes juntos!
      </h1>

      <div className='flex items-center gap-5 justify-center'>
        {/* Ação ao clicar no ícone */}
        <div onClick={openModal}>
          
        </div>
      </div>

      <div className='flex items-center gap-20 justify-center'>
        <p className='flex items-center gap-1 text-xl'>
          <MdLocationOn /> Brasil
        </p>
        <p className='text-xl'>© 2024, All Rights By Compass UOL</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg w-1/3'>
            <h2 className='text-2xl mb-4'>Adicionar Link</h2>
            <input
              type="url"
              value={link}
              onChange={handleLinkChange}
              placeholder="Digite o link"
              className="w-full p-2 border rounded mb-4"
            />
            <div className='flex justify-between'>
              <button onClick={closeModal} className='text-gray-500'>Fechar</button>
              <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded'>
                Salvar Link
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;