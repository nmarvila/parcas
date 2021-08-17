import React from 'react';
import styled from 'styled-components';

const Site = styled.div`
    width:400px;
    height:400px;
    background-color:#00FF00;
`;

const Botao = styled.button`
    font-size:19px;
    padding:10px 15px;
    border:3px dashed #FF0000;
    color:#FF0000;
    background-color:#FFF;
    margin:5px;
    border-radius:5px;
`;

const BotaoPequeno = styled(Botao)`
    padding:5px 10px;
    font-size:16px;
`;

function App() {
    return (
        <Site>
            <Botao>Clique aqui</Botao>
            <BotaoPequeno>Clique aqui</BotaoPequeno>
        </Site>
    );
}

export default App;