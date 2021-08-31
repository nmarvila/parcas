import React, { Component } from 'react';
import { Empregado } from '../Empregado';

export class Tabela extends Component {
    render() {
        return (
            <table style={{ border: '1px solid #000', borderSpacing: '0' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #000', padding: '5px' }}>Name</th>
                        <th style={{ border: '1px solid #000', padding: '5px' }}>Address</th>
                        <th style={{ border: '1px solid #000', padding: '5px' }}>Salary</th>
                        <th style={{ border: '1px solid #000', padding: '5px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map((item, index) =>
                        <Empregado key={item.id} name={item.name} address={item.address} salary={item.salary} index={index} open={this.props.open} delete={this.props.delete} />
                    )}
                </tbody>
            </table>
        );
    }
}