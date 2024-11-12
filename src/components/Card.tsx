import { useState } from 'react';
import Modal from 'react-modal';
import { GrAddCircle } from 'react-icons/gr';

interface CardData {
  title: string;
  period: string;
  skills: string[];
  description: string;
}

const Card: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cards, setCards] = useState<CardData[]>([]);
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSaveCard = () => {
    const newCard: CardData = {
      title,
      period,
      skills: skills.split(',').map(skill => skill.trim()),
      description,
    };

    setCards([...cards, newCard]);
    closeModal();
    setTitle('');
    setPeriod('');
    setSkills('');
    setDescription('');
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6 max-w-5xl mx-auto">

      <div className="bg-card_color p-12 pb-14 rounded-[20px] shadow-custom-offset flex flex-col items-center justify-center group cursor-pointer">
        <button
          onClick={openModal}
          className="flex flex-col justify-center items-center gap-4 text-center w-full h-full"
        >
          <GrAddCircle className="w-24 h-24 text-white hover:text-primary_color" />
          <h2 className="text-3xl text-white hover:text-primary_color font-extrabold">Adicionar Card</h2>
        </button>
      </div>

  
      {cards.map((card, index) => (
        <div key={index} className="bg-card_color p-8 pb-40 gap-4 rounded-[20px] shadow-custom-offset flex flex-col">
          <h1 className="text-3xl text-white">{card.title}</h1>
          <p className="text-xl text-tertiary_text">{card.period}</p>
          <div className="flex gap-3">
            {card.skills.map((skill, skillIndex) => (
              <p key={skillIndex} className="text-white bg-dark_green p-2 rounded">
                {skill}
              </p>
            ))}
          </div>
          <p className="text-left text-white text-xl">{card.description}</p>
        </div>
      ))}

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

        <div className="flex gap-4">
          <button onClick={closeModal} className="bg-white text-dark_green border-[1px] border-dark_green py-3 px-8 rounded-lg w-full hover:bg-red">
            Cancelar
          </button>
          <button onClick={handleSaveCard} className="bg-dark_green text-white py-3 px-8 rounded-lg w-full hover:bg-primary_color">
            Salvar
          </button>
        </div>
      </Modal>
    </section>
  );
};


export default Card;
