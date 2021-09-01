import React, { useState } from 'react';
import './App.css';

const App = () => {

  // const [valor, setValor] = useState('');
  const [email, setEmail] = useState('teste@hotmail.com');

  return (
    <div>

      <h1>Bem Vindo(a)</h1>

      <label for="email">Qual Seu E-mail?</label>
      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <hr />

      {email}

    </div>
  );
};

export default App;