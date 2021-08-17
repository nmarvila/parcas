import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width:400px;
    height:30px;
    font-size:16px;
    padding:10px;
    border:1px solid #000;
`;

function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleButton = () => {
        alert(email + ' - ' + password);
    }

    return (
        <>
            <Input placeholder="Digite um e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Digite uma senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleButton}>Dizer</button>
        </>
    );
}

export default App;