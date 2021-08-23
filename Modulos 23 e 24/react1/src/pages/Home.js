import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    let history = useHistory();
    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre');
        }, 2000);
    };

    const handleNichollas = () => {
        dispatch({
            type: 'SET_NAME',
            payload: { name: 'Nichollas' }
        });
    };

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT_CONTADOR'
        });
    };

    return (
        <div>
            <h4>Página HOME</h4>

            NOME: {name}<br />
            CONTAGEM: {contador}<br /><br />

            <button onClick={handleNichollas}>Setar nome para Nichollas</button>
            <button onClick={handleIncrement}>+1</button>

            <br /><br />
            <button onClick={handleButton}>Ir para a página SOBRE</button>
        </div>
    );
}

export default Home;