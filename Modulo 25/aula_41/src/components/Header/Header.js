import React, { Component } from 'react';

export class Header extends Component {

    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Empregados</h1>
                    <button style={{ backgroundColor: '#393', color: '#FFF', padding: '10px', border: '0', borderRadius: '3px', cursor: 'pointer', alignSelf: 'center' }} onClick={(e) => this.props.open(-1)}>Add New Employee</button>
                </div>
                <hr />
            </div>
        );
    }

}