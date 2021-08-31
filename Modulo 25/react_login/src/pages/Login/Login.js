import React, { Component } from 'react';
import CSS from './Login.css'

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMsg: ''
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar() {
        let email = document.getElementById('email').value;
        let pass = document.getElementById('pass').value;

        fetch('https://alunos.b7web.com.br/apis/loginteste/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, pass })
        })
            .then(r => r.json())
            .then(json => {

                this.setState({ errorMsg: json.error });

                if (json.error == '' && json.jwt != '') {
                    localStorage.setItem('jwt', json.jwt);
                    this.props.history.push('/');
                }

            });
    }

    render() {
        return (
            <div class="loginarea">

                <h1>Login</h1>

                <p class="error">{this.state.errorMsg}</p>

                <label>
                    E-mail:
                    <br />
                    <input type="email" id="email" />
                </label>

                <label>
                    Senha:
                    <br />
                    <input type="password" id="pass" />
                </label>

                <button onClick={this.entrar} >Entrar</button>

            </div>
        );
    }

}