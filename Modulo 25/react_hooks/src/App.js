import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './Modal';

const App = () => {

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filmes, setFilmes] = useState([]);
  const [selectedFilme, setSelectedFilme] = useState({});

  const getFilmes = async () => {
    setLoading(true);

    const res = await fetch('https://api.b7web.com.br/cinema/');
    const json = await res.json();

    setLoading(false);
    setFilmes(json);
  };

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <div>
      <h1>Filmes Em Cartaz</h1>

      {modal &&
        <Modal closeAction={() => setModal(false)}>
          Titulo: {selectedFilme.titulo}
          <img src={selectedFilme.avatar} alt={selectedFilme.titulo} />
        </Modal>
      }

      {loading &&
        <p>Carregando...</p>
      }

      <section className="filmes">
        {filmes.map((filme) => (
          <article className="filme" onClick={() => {
            setModal(true);
            setSelectedFilme(filme);
          }}>
            <img src={filme.avatar} alt={filme.titulo}></img>
            <span>{filme.titulo}</span>
          </article>
        ))}
      </section>

    </div>
  );
};

export default App;