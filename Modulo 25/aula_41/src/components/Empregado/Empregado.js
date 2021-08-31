import React, { Component } from 'react';

export class Empregado extends Component {
    render() {
        return (
            <tr style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #000', padding: '5px' }}>{this.props.name}</td>
                <td style={{ border: '1px solid #000', padding: '5px' }}>{this.props.address}</td>
                <td style={{ border: '1px solid #000', padding: '5px' }}>{this.props.salary}</td>
                <td style={{ border: '1px solid #000', padding: '5px' }}>
                    <span style={{ cursor: 'pointer' }} onClick={(e) => this.props.open(this.props.index)}>&#8665;</span>
                    <span style={{ cursor: 'pointer', marginLeft: 20 }} onClick={(e) => this.props.delete(this.props.index)}>&#10007;</span>
                </td>
            </tr>
        );
    }
}