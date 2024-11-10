import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () =>{
  return (
    <footer className='grid justify-center gap-12'>
      <h1 className='text-4xl font-bold text-center'>Assim que possível, me envie um email para que possamos <br /> trabalhar felizes juntos!</h1>

      <div className='flex items-center gap-5 '>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="w-6 h-6 text-red-600 hover:text-red-800" />
      </a>
    </div>



    </footer>
  );
};

export default Footer;