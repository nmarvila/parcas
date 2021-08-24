class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'teste@hotmail.com',
            texto: 'Algum texto qualquer, etc, etc...',
            sexo: 'feminino'
        };

        this.emailTrocou = this.emailTrocou.bind(this);
        this.sexoMudou = this.sexoMudou.bind(this);
    }

    emailTrocou(e) {
        let novoValor = e.target.value;

        this.setState({ email: novoValor });
    }

    sexoMudou(e) {
        this.setState({ sexo: e.target.value });
    }

    render() {
        return (
            <form method="POST">
                <input type="email" name="email" value={this.state.email} onChange={this.emailTrocou} /><br />
                <input type="email" name="senha" /><br />

                <textarea name="corpo" value={this.state.texto}></textarea><br />

                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.sexoMudou}>
                    <option></option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select><br />

                <input type="submit" value="Entrar" /><br />


                Sexo: {this.state.sexo}<br />
                E-mail: {this.state.email}
            </form>
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