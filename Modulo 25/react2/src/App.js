import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />

                    <Route exact path="/react2/public" component={Home} />
                    <Route path="/react2/public/sobre" component={Sobre} />
                </div>
            </BrowserRouter>
        );
    }

}

export default App;