import React, { useState } from 'react';
import './App.css';

export default () => {

  const [msg, setMsg] = useState('Mostrar');
  const [mostrar, setMostrar] = useState(false);

  const handleButtonClick = () => {
    setMostrar(!mostrar);
    setMsg(mostrar ? 'Mostrar' : 'Ocultar');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>{msg}</button>
      {mostrar &&
        <h2>Men$4gem S3cr3t4!!! 2.0</h2>
      }
    </div>
  );

}