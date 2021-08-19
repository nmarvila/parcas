import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <header>
                <h1>Meu Site Legal</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </BrowserRouter>
    );
}

export default App;