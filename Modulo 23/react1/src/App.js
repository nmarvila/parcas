import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Categoria from "./pages/Categoria";

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
                        <li>
                            <Link to="/quem-somos">Quem Somos</Link>
                        </li>
                        <li>
                            <Link to="/categoria?tipo=esportes">Esportes</Link>
                        </li>
                        <li>
                            <Link to="/categoria?tipo=noticias">Notícias</Link>
                        </li>
                        <li>
                            <Link to="/categoria?tipo=viagem">Viagem</Link>
                        </li>
                        <li>
                            <Link to="/difahsçdkfj">URL que não existe</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <hr />

            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/sobre">
                    <Sobre />
                </Route>

                <Route path="/quem-somos">
                    <Redirect to="/sobre" />
                </Route>

                <Route path="/categoria">
                    <Categoria />
                </Route>

                <Route path="*">
                    <h4>Página não encontrada!</h4>
                </Route>

            </Switch>

            <hr />
            <footer>
                Todos os direitos reservados...
            </footer>
        </BrowserRouter>
    );
}

export default App;