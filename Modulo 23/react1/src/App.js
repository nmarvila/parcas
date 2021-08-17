import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

function App() {

    return (
        <>
            <h1>Lista de Tarefas</h1>

            <SearchBox frasePadrao="Faça sua busca..." />

            <SearchBox frasePadrao="Digite seu nome" />

            <SearchBox />

        </>
    );
}

export default App;