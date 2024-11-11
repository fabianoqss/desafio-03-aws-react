import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necessário para acessibilidade ao usar react-modal

const Card: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const [repositoryLink, setRepositoryLink] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSaveCard = () => {
    // A lógica de salvamento pode ser implementada aqui
    console.log({ title, period, skills, description, repositoryLink });
    closeModal();
  };

  return (
    <div>
      {/* Card existente */}
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

        <button onClick={openModal} className='mt-4 bg-dark_green text-white py-2 px-4 rounded'>
          Criar Novo Card
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Criação de Card"
        className="flex flex-col bg-white rounded-lg shadow-lg p-8 w-[600px] mx-auto mt-16 gap-8"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      >
        <h2 className="text-3xl text-dark_green font-extrabold mb-4">Criação de Card</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-md"
        />

        <input
          type="text"
          placeholder="Período de atuação"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-md"
        />

        <input
          type="text"
          placeholder="Habilidades (Separe-as por vírgula)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-md"
        />

        <textarea
          placeholder="Descreva a sua experiência"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-md h-24"
        />

        <input
          type="text"
          placeholder="Link do repositório (Opcional)"
          value={repositoryLink}
          onChange={(e) => setRepositoryLink(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-md"
        />

        <div className="flex gap-4">
          <button onClick={closeModal} className="bg-red-500 text-white py-2 px-4 rounded w-full">
            Cancelar
          </button>
          <button onClick={handleSaveCard} className="bg-dark_green text-white py-2 px-4 rounded w-full">
            Salvar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
