import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Config from './Config';

import { Header } from './components/Header';
import { Sobre } from './pages/Sobre';
import { Home } from './pages/Home';
import { Login } from './pages/Login';


class App extends Component {

    render() {
        return (
            <BrowserRouter basename={Config.BASE_URL}>
                <div>
                    <Header />

                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/sobre" component={Sobre} />
                </div>
            </BrowserRouter>
        );
    }

}

export default App;