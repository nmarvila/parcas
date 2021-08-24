class Sinal extends React.Component {
    render() {
        return (
            <div style={{ margin: '0', width: '100px', height: '350px', padding: '20px', border: '1px solid #000', backgroundColor: '#CCC' }}>
                <Luz cor="#F00" acesa={this.props.corAtual == 'vermelha'} />
                <Luz cor="#FF0" acesa={this.props.corAtual == 'amarela'} />
                <Luz cor="#0F0" acesa={this.props.corAtual == 'verde'} />
            </div>
        );
    }
}

class Luz extends React.Component {
    render() {
        return (
            <div style={{ margin: '0', width: '100%', height: '100px', borderRadius: '50%', backgroundColor: this.props.acesa ? this.props.cor : '#EEE', marginBottom: '20px' }}></div>
        );
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            corAtual: 'vermelha'
        };

        this.abrirSinal = this.abrirSinal.bind(this);
        this.fecharSinal = this.fecharSinal.bind(this);
    }

    abrirSinal() {
        if (this.state.corAtual == 'vermelha') {
            this.setState({ corAtual: 'verde' });
        }
    }

    fecharSinal() {
        if (this.state.corAtual == 'verde') {
            this.setState({ corAtual: 'amarela' });
            setTimeout(() => {
                this.setState({ corAtual: 'vermelha' });
            }, 2000);
        }
    }

    render() {
        return (
            <div>
                <Sinal corAtual={this.state.corAtual}></Sinal>

                <br /><br />

                <button onClick={this.abrirSinal}>Abrir Sinal</button>
                <button onClick={this.fecharSinal}>Fechar Sinal</button>
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);