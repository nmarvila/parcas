class Moeda extends React.Component {
    render() {
        return (
            <div>
                {this.props.moeda}:
                {this.props.moeda === 'real' ? (
                    <input type="number" value={this.props.valor} onChange={(e) => { this.props.mudar(e.target.value) }} />
                ) : (
                    <input type="number" value={this.props.valor / 3} onChange={(e) => { this.props.mudar(e.target.value * 3) }} />
                )}
            </div>
        );
    }
}


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: 20
        };

        this.vChange = this.vChange.bind(this);

    }

    vChange(novoValor) {
        this.setState({ valor: novoValor });
    }

    render() {
        return (
            <div>
                <Moeda valor={this.state.valor} moeda="real" mudar={this.vChange} />
                <Moeda valor={this.state.valor} moeda="dollar" mudar={this.vChange} />
            </div>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);