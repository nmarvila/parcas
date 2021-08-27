import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmes: []
        };
    }

    componentDidMount() {
        fetch('https://api.b7web.com.br/cinema/')
            .then(r => r.json())
            .then(json => {
                this.setState({ filmes: json });
            });
    }

    render() {
        return (
            <div>

                {this.state.filmes.length == 0 &&
                    <span>Carregando...</span>
                }

                {this.state.filmes.length > 0 &&
                    this.state.filmes.map((filme) => {
                        return (
                            <div style={{ width: 200, padding: 10, margin: 10, display: 'inline-block', textAlign: 'center' }}>
                                <img src={filme.avatar} width="100%" /><br />
                                <span>{filme.titulo}</span>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

}