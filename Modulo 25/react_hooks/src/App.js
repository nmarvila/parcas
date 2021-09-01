import React, { useState, useMemo } from 'react';
import './App.css';

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const countString = (str) => {
    console.log("Função chamada!");
    return str.length;
  };

  const countedName = useMemo(() => countString(name), [name]);

  const countedEmail = useMemo(() => countString(email), [email]);

  return (
    <div>
      <h1>Bem Vindo(a)</h1>

      <label>Qual Seu Nome?</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>{countedName} letras</p>

      <label>Qual Seu E-mail?</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>{countedEmail} letras</p>

    </div>
  );
};

export default App;