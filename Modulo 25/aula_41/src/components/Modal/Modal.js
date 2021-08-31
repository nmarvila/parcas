import React, { Component } from 'react';

export class Modal extends Component {
    render() {
        return (
            <div style={{ top: '0', left: '0', bottom: '0', right: '0', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: '99', position: 'absolute', display: this.props.visible ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '70%', backgroundColor: '#FFF', borderRadius: '2px', boxShadow: '5px 5px 10px #000', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #EEE' }}>
                        <p style={{ margin: '0', padding: '20px', fontWeight: 'bold', fontSize: '24px' }}>{this.props.current >= 0 ? 'Edit Member Detail' : 'New Member Detail'}</p>
                        <span style={{ alignSelf: 'center', color: '#999', padding: '20px', cursor: 'pointer' }} onClick={(e) => this.props.cancelar(this.props.current)}>&times;</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {this.props.current >= 0 &&
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                                <p style={{ margin: '0', marginBottom: '10px', fontWeight: 'bold' }}>ID</p>
                                <input type="text" value={this.props.newEmployee.id} disabled />
                            </div>
                        }
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <p style={{ margin: '0', marginBottom: '10px', fontWeight: 'bold' }}>Name</p>
                            <input type="text" value={this.props.newEmployee.name} onChange={(e) => this.props.handleInput(e, 'name', this.props.current)} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <p style={{ margin: '0', marginBottom: '10px', fontWeight: 'bold' }}>Address</p>
                            <input type="text" value={this.props.newEmployee.address} onChange={(e) => this.props.handleInput(e, 'address', this.props.current)} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <p style={{ margin: '0', marginBottom: '10px', fontWeight: 'bold' }}>Salary</p>
                            <input type="text" value={this.props.newEmployee.salary} onChange={(e) => this.props.handleInput(e, 'salary', this.props.current)} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', alignSelf: 'bottom', alignItems: 'center', borderTop: '2px solid #EEE', padding: '20px' }}>
                        <button style={{ backgroundColor: '#339', color: '#FFF', padding: '10px', border: '0', borderRadius: '3px', cursor: 'pointer' }} onClick={(e) => this.props.close(this.props.current)}>{this.props.current >= 0 ? 'Update' : 'Add'}</button>
                        <button style={{ backgroundColor: '#FFF', padding: '10px', border: '1px solid #EEE', borderRadius: '3px', marginLeft: '10px', cursor: 'pointer' }} onClick={(e) => this.props.cancelar(this.props.current)}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}