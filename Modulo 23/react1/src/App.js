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
    background-color: ${props => props.ativo == true ? '#0000FF' : '#CCC'};
    color: ${props => props.ativo == true ? '#FFF' : '#000'};
`;

function App() {
    return (
        <Site>
            <Botao ativo={true}>Clique aqui</Botao>
            <Botao ativo={false}>Clique aqui</Botao>
        </Site>
    );
}

export default App;