import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div>
                <h3>Página Home</h3>

                <Link to="/sobre">Ir para página sobre</Link>
            </div>
        );
    }

}