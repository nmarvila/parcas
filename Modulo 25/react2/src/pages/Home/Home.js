import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

    render() {
        return (
            <div>
                Página Home...

                <Link to="/react2/public/sobre">Ir para página sobre</Link>
            </div>
        );
    }

}