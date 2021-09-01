import React, { useRef } from 'react';
import './App.css';
import formSubmit from './formSubmit';
import useTitleInput from './hooks/useTitleInput';
import Contador from './Contador';

const App = () => {

  const [email, setEmail] = useTitleInput('teste@hotmail.com');

  const area = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formSubmit(email, setEmail);
  };

  return (
    <div ref={area}>

      <button onClick={() => {
        area.current.classList.remove('maior');
        area.current.classList.add('menor');
      }}>Fonte Menor</button>

      <button onClick={() => {
        area.current.classList.remove('menor');
        area.current.classList.add('maior');
      }}>Fonte Maior</button>

      <h1>Bem Vindo(a)</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Qual Seu E-mail?</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <input className="submit" type="submit" value="Enviar" />
      </form>

      <hr />

      <Contador />

    </div>
  );
};

export default App;