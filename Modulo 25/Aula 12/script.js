class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 0
        };

        this.mostrar = this.mostrar.bind(this);
    }

    mostrar() {
        this.setState({ status: 1 });
    }

    render() {
        let txt;
        let mostrarBtn;

        if (this.state.status == 1) {
            txt = '.......';
            mostrarBtn = null;
        } else {
            txt = '';
            mostrarBtn = <button onClick={this.mostrar}>Mostrar</button>;
        }

        return (
            <div>
                {mostrarBtn}
                {txt}
            </div>
        );
    }
}

let elemento = (
    <div>
        <Login />
    </div>
);

ReactDOM.render(
    elemento,
    document.getElementById("app")
);