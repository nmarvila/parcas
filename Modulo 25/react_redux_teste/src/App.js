import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers';

import Config from './Config';

import { Header } from './components/Header';
import { Sobre } from './pages/Sobre';
import { Home } from './pages/Home';

const store = createStore(Reducers);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter basename={Config.BASE_URL}>
                    <div>
                        <Header />

                        <Route exact path="/" component={Home} />
                        <Route path="/sobre" component={Sobre} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }

}

export default App;