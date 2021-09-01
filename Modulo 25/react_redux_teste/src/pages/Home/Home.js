import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeEmail, changePassword } from '../../actions/UserActions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.trocarEmail = this.trocarEmail.bind(this);
        this.trocarSenha = this.trocarSenha.bind(this);
    }

    trocarEmail(text) {
        this.props.changeEmail(text);
    }

    trocarSenha(text) {
        this.props.changePassword(text);
    }

    render() {
        return (
            <div>
                <h3>Página Home</h3>

                <p>E-MAIL: {this.props.email}</p>
                <p>SENHA: {this.props.senha}</p>

                <input type="email" id="email" placeholder="E-mail" onChange={(e) => this.trocarEmail(e.target.value)} /><br />
                <input type="password" id="pass" placeholder="Senha" onChange={(e) => this.trocarSenha(e.target.value)} />

                <br />

                <Link to="/sobre">Ir para página sobre</Link>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    email: state.user.email,
    senha: state.user.pass
});

const mapActionsToProps = {
    changeEmail: changeEmail,
    changePassword: changePassword
};

export default connect(mapStateToProps, mapActionsToProps)(Home);