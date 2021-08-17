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

    const [conta, setConta] = useState(0);
    const [gorjeta, setGorjeta] = useState(10);

    return (
        <>
            <h1>Calculadora de Gorjeta</h1>
            <p>Quanto deu a conta?</p>
            <Input type="number" min="0" value={conta} onChange={(e) => setConta(e.target.value)} />
            <p>Quanto deu a conta?</p>
            <Input type="number" min="0" value={gorjeta} onChange={(e) => setGorjeta(e.target.value)} />
            <hr />
            {conta > 0
                ?
                <>
                    <p>Sub-total: R$ {conta}</p>
                    <p>Gorjeta ({gorjeta}%): R$ {(gorjeta * 0.01 * conta).toFixed(2)}</p>
                    <p style={{ fontWeight: 'bold' }}>Total: R$ {(Number.parseFloat(conta) + (gorjeta * 0.01 * conta)).toFixed(2)}</p>
                </>
                : false
            }
        </>
    );
}

export default App;