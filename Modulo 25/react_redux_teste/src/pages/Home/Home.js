import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <h3>Página Home</h3>

                <p>E-MAIL: {this.props.email}</p>

                <Link to="/sobre">Ir para página sobre</Link>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    email: state.user.email,
    senha: state.user.pass
});

export default connect(mapStateToProps)(Home);