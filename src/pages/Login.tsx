import { signInWithPopup } from 'firebase/auth';
import { FaArrowRight } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { auth, provider } from '../Firebase/firebaseConfig';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiAlertFill } from "react-icons/ri";

const GitHubLoginButton = () => {
  const navigate = useNavigate();

  const loginWithGithub = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const token = await user.getIdToken();

        const username = user.displayName || user.email;
  
        localStorage.setItem('user', JSON.stringify({ username }));
        localStorage.setItem('token', token);
  
        navigate('/home');
      })
      .catch((error) => {
        console.error("Erro no login com Github:", error);
      });
  };

  return (
    <button className='bg-dark_green text-xl text-secondary_text px-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-primary_color transition-colors duration-200' onClick={loginWithGithub}>
      <TbBrandGithubFilled className='w-6 h-6' /> Github
    </button>
  );
};

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [savedUsername, setSavedUsername] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) {
      const user = JSON.parse(saved);
      setSavedUsername(user.username);
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === savedUsername) {
      localStorage.setItem('username', username);
      setError(null);
      navigate('/home');
    } else {
      setError('Nome de usuário não encontrado ou não cadastrado');
    }
  };

  const handleLoginWithSavedUser = () => {
    if (savedUsername) {
      navigate('/home');
    } else {
      setError('Nome de usuário não encontrado ou não cadastrado');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-secondary_text flex-col gap-6">
      <h1 className="text-4xl font-bold">Digite o nome de usuário que deseja buscar</h1>

      <form className="flex w-full max-w-[748px] gap-5" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Digite o nome de usuário"
          className="w-full h-[56px] p-2 border border-primary_text rounded-2xl placeholder:text-2xl box-border pl-5 pb-2"
          list="username-suggestions"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <datalist id="username-suggestions">
          {savedUsername && <option value={savedUsername} />}
        </datalist>
        <button
  type="submit"
  onClick={(e) => {
    if (!username && savedUsername) {
      e.preventDefault(); 
      handleLoginWithSavedUser(); 
    }
  }}
  className={`${
    username ? 'bg-secondary_color hover:bg-primary_color' : 'bg-tertiary_text'
  } text-white px-6 py-2 border border-primary_text rounded-2xl transition-colors duration-200`}
>
  <FaArrowRight className="w-10 h-10" />
</button>
      </form>

      {error && (
        <p className="text-red font-semibold text-base flex items-center gap-2 text-left w-[744px]">
          <RiAlertFill className="w-5 h-5" /> {error}
        </p>
      )}

      <div className="flex items-center gap-3 max-w-[748px]">
        <div className="bg-secondary_color w-[350px] h-[5px]"></div>

        <span className="text-2xl font-medium">ou</span>

        <div className="bg-secondary_color w-[350px] h-[5px]"></div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold">Acesse sua conta com</span>
        <GitHubLoginButton />
      </div>
    </div>
  );
};

export default Login;