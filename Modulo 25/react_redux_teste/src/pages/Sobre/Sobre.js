import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sobre extends Component {

    render() {
        return (
            <div>
                Página Sobre...

                <br />

                <p>E-MAIL: {this.props.email}</p>
                <p>SENHA: {this.props.senha}</p>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    email: state.user.email,
    senha: state.user.pass
});

export default connect(mapStateToProps)(Sobre);