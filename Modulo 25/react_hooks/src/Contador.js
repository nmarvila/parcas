import React, { useReducer } from 'react';

const initialState = {
    contagem: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_plus':
            return { ...state, contagem: state.contagem + action.qt };
            break;
        case 'add':
            return { ...state, contagem: state.contagem + 1 };
            break;
        case 'minus':
            return { ...state, contagem: state.contagem - 1 };
            break;
        case 'reset':
            return initialState;
            break;
    }
};

const Contador = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h4>Contagem: {state.contagem}</h4>

            <button onClick={() => dispatch({ type: 'add_plus', qt: 10 })}>+10</button>
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
            <button onClick={() => dispatch({ type: 'minus' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    );
};

export default Contador;