import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeEmail } from '../../actions/UserActions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.trocarEmail = this.trocarEmail.bind(this);
    }

    trocarEmail() {
        let email = document.getElementById("email").value;
        this.props.changeEmail(email);
    }

    render() {
        return (
            <div>
                <h3>Página Home</h3>

                <p>E-MAIL: {this.props.email}</p>

                <input type="email" id="email" />
                <button onClick={this.trocarEmail}>Trocar E-mail</button>

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
    changeEmail
};

export default connect(mapStateToProps, mapActionsToProps)(Home);