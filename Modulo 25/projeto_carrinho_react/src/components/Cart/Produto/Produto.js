import React, { Component } from 'react';
import "./style.css";

export class Produto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        };

        this.adicionar = this.adicionar.bind(this);
    }

    adicionar() {
        if (this.props.stock - 1 == 0) {
            this.setState({ disabled: true });
        }
        this.props.add(this.props.index);
    }

    render() {
        return (
            <div className={this.state.disabled ? 'produto disabled' : 'produto'}>
                <h1>{this.props.name}</h1>
                <small>Estoque: {this.props.stock}</small>
                <p>R$ {this.props.price}</p>
                <button onClick={this.adicionar}>Adicionar ao Carrinho</button>
            </div>
        );
    }

}