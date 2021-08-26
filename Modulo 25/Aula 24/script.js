class Tabela extends React.Component {
    render() {
        return (
            <table style={{ border: '1px solid #000', borderSpacing: '0' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #000', padding: '5px' }}>Name</th>
                        <th style={{ border: '1px solid #000', padding: '5px' }}>Email Address</th>
                        <th style={{ border: '1px solid #000', padding: '5px' }}>Phone</th>
                        <th style={{ border: '1px solid #000', padding: '5px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map((item, index) =>
                        <Empregado key={item.id} name={item.name} email={item.email} phone={item.phone} index={index} open={this.props.open} />
                    )}
                </tbody>
            </table>
        );
    }
}

class Empregado extends React.Component {
    render() {
        return (
            <tr style={{ textAlign: 'center' }}>
                <td style={{ border: '1px solid #000', padding: '5px' }}>{this.props.name}</td>
                <td style={{ border: '1px solid #000', padding: '5px' }}>{this.props.email}</td>
                <td style={{ border: '1px solid #000', padding: '5px' }}>{this.props.phone}</td>
                <td style={{ border: '1px solid #000', padding: '5px' }}><span style={{ cursor: 'pointer' }} onClick={(e) => this.props.open(this.props.index)}>&#8665;</span></td>
            </tr>
        );
    }
}

class Modal extends React.Component {
    render() {
        return (
            <div style={{ top: '0', left: '0', bottom: '0', right: '0', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: '99', position: 'absolute', display: this.props.visible ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '70%', backgroundColor: '#FFF', borderRadius: '2px', boxShadow: '5px 5px 10px #000', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #EEE' }}>
                        <p style={{ margin: '0', padding: '20px', fontWeight: 'bold', fontSize: '24px' }}>Edit Member Detail</p>
                        <span style={{ alignSelf: 'center', color: '#999', padding: '20px', cursor: 'pointer' }} onClick={(e) => this.props.cancelar(this.props.current)}>&times;</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <p style={{ margin: '0', marginBottom: '10px', fontWeight: 'bold' }}>ID</p>
                            <input type="text" value={this.props.employees[this.props.current].id} disabled />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <p style={{ margin: '0', marginBottom: '10px', fontWeight: 'bold' }}>Name</p>
                            <input type="text" value={this.props.employees[this.props.current].name} onChange={(e) => this.props.handleInput(e, 'name', this.props.current)} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <p style={{ margin: '0', marginBottom: '10px', fontWeight: 'bold' }}>Email Address</p>
                            <input type="text" value={this.props.employees[this.props.current].email} onChange={(e) => this.props.handleInput(e, 'email', this.props.current)} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                            <p style={{ margin: '0', marginBottom: '10px', fontWeight: 'bold' }}>Phone</p>
                            <input type="text" value={this.props.employees[this.props.current].phone} onChange={(e) => this.props.handleInput(e, 'phone', this.props.current)} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', alignSelf: 'bottom', alignItems: 'center', borderTop: '2px solid #EEE', padding: '20px' }}>
                        <button style={{ backgroundColor: '#339', color: '#FFF', padding: '10px', border: '0', borderRadius: '3px', cursor: 'pointer' }} onClick={(e) => this.props.close()}>Update</button>
                        <button style={{ backgroundColor: '#FFF', padding: '10px', border: '1px solid #EEE', borderRadius: '3px', marginLeft: '10px', cursor: 'pointer' }} onClick={(e) => this.props.cancelar(this.props.current)}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                {
                    id: '1',
                    name: 'John Doe',
                    email: 'johndoe@mail.com',
                    phone: '(171) 555-2222'
                }, {
                    id: '2',
                    name: 'Peter Parker',
                    email: 'peterparker@mail.com',
                    phone: '(313) 555-5735'
                }, {
                    id: '3',
                    name: 'Fran Wilson',
                    email: 'franwilson@mail.com',
                    phone: '(503) 555-9931'
                }
            ],
            modal: false,
            current: '0',
            oldState: { name: '', email: '', phone: '' }
        };

        this.fecharModal = this.fecharModal.bind(this);
        this.cancelarMudancas = this.cancelarMudancas.bind(this);
        this.abrirModal = this.abrirModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    fecharModal() {
        this.setState({ modal: false });
    }

    cancelarMudancas(index) {
        let newState = this.state.employees;

        newState[index] = this.state.oldState;

        this.setState({ employees: newState });
        this.fecharModal();
        // console.log(index);
    }

    abrirModal(index) {
        let oldStateLocal = { name: '', email: '', phone: '' };
        oldStateLocal.name = this.state.employees[index].name.toString();
        oldStateLocal.email = this.state.employees[index].email.toString();
        oldStateLocal.phone = this.state.employees[index].phone.toString();
        this.setState({ oldState: oldStateLocal });
        this.setState({ modal: true, current: index });
    }

    handleInput(e, field, index) {
        let newState = this.state.employees;

        newState[index][field] = e.target.value;
        this.setState({ employees: newState });
    }

    render() {
        return (
            <div>
                <Modal visible={this.state.modal} current={this.state.current} employees={this.state.employees} close={this.fecharModal} cancelar={this.cancelarMudancas} handleInput={this.handleInput} />
                <Tabela employees={this.state.employees} open={this.abrirModal} />
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);