import React, { useState, useEffect } from 'react';
import './App.css';
import formSubmit from './formSubmit';

const App = () => {

  const [email, setEmail] = useState('teste@hotmail.com');

  useEffect(() => {
    document.title = email;
  });

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