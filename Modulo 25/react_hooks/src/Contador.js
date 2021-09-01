import React, { useReducer } from 'react';

const initialState = {
    contagem: 0
};

const reducer = () => {

};

const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h4>Contagem: {state.contagem}</h4>

            <button>+</button>
            <button>-</button>
            <button>reset</button>
        </div>
    );
};

export default Contador;