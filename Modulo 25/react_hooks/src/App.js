import React from 'react';
import './App.css';
import formSubmit from './formSubmit';
import useTitleInput from './hooks/useTitleInput';

const App = () => {

  const [email, setEmail] = useTitleInput('teste@hotmail.com');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formSubmit(email, setEmail);
  }

  return (
    <div>

      <h1>Bem Vindo(a)</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Qual Seu E-mail?</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <input className="submit" type="submit" value="Enviar" />
      </form>

    </div>
  );
};

export default App;