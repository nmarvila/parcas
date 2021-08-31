import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Config from './Config';

import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Tabela } from './components/Tabela';
import { Empregado } from './components/Empregado';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {
                    id: '1',
                    name: 'Roland Mendel',
                    address: 'C/ Araquil, 67, Madrid',
                    salary: '5000'
                }, {
                    id: '2',
                    name: 'Victoria Ashworth',
                    address: '35 King George, London',
                    salary: '6500'
                }, {
                    id: '3',
                    name: 'Martin Blank',
                    address: '25, Rue Lauriston, Paris',
                    salary: '8000'
                }
            ],
            modal: false,
            current: '0',
            oldState: { id: '', name: '', address: '', salary: '' },
            newEmployee: { id: '', name: '', address: '', salary: '' }
        };

        this.limparStates = this.limparStates.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
        this.cancelarMudancas = this.cancelarMudancas.bind(this);
        this.abrirModal = this.abrirModal.bind(this);
        this.deletar = this.deletar.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    limparStates() {
        let oldStateLocal = { id: '', name: '', address: '', salary: '' };
        let newEmployeeLocal = { id: '', name: '', address: '', salary: '' };

        this.setState({ oldState: oldStateLocal, newEmployee: newEmployeeLocal });
    }

    fecharModal(index) {
        let newState = this.state.employees;
        let newEmployee = this.state.newEmployee;
        if (index < 0) {
            newEmployee.id = (newState.length + 1).toString();
            newState.push(newEmployee);
        } else {
            newEmployee.id = this.state.employees[index].id;
            newState[index] = newEmployee;
        }
        this.setState({ modal: false, employees: newState });
    }

    cancelarMudancas(index) {
        let newState = this.state.employees;

        newState[index] = this.state.oldState;

        this.setState({ modal: false, employees: newState });
    }

    abrirModal(index) {
        this.limparStates();
        let employee = { id: '', name: '', address: '', salary: '' };
        let oldStateLocal = { id: '', name: '', address: '', salary: '' };
        if (index < 0) {
            employee.id = '';
            employee.name = '';
            employee.address = '';
            employee.salary = '';
        } else {
            employee.id = this.state.employees[index].id;
            employee.name = this.state.employees[index].name;
            employee.address = this.state.employees[index].address;
            employee.salary = this.state.employees[index].salary;
            oldStateLocal.id = this.state.employees[index].id;
            oldStateLocal.name = this.state.employees[index].name;
            oldStateLocal.address = this.state.employees[index].address;
            oldStateLocal.salary = this.state.employees[index].salary;
        }
        this.setState({ newEmployee: employee, oldState: oldStateLocal });
        this.setState({ modal: true, current: index });
    }

    deletar(index) {
        let newState = this.state.employees;

        newState.splice(index, 1);

        this.setState({ employees: newState });
    }

    handleInput(e, field, index) {
        let employee = this.state.newEmployee;

        employee[field] = e.target.value;
        this.setState({ newEmployee: employee });
    }

    render() {
        return (
            <BrowserRouter basename={Config.BASE_URL}>
                <div>
                    <Header open={this.abrirModal} />

                    {this.state.employees.length > 0 &&
                        <>
                            <Modal visible={this.state.modal} current={this.state.current} employees={this.state.employees} newEmployee={this.state.newEmployee} close={this.fecharModal} cancelar={this.cancelarMudancas} handleInput={this.handleInput} />
                            <Tabela employees={this.state.employees} open={this.abrirModal} delete={this.deletar} />
                        </>
                    }
                    {this.state.employees.length <= 0 &&
                        <>
                            <Modal visible={this.state.modal} current={-1} employees={this.state.employees} newEmployee={this.state.newEmployee} close={this.fecharModal} cancelar={this.cancelarMudancas} handleInput={this.handleInput} />
                            <h2>Tabela vazia</h2>
                        </>
                    }
                </div>
            </BrowserRouter>
        );
    }

}

export default App;